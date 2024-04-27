#Build stage
FROM node:20-alpine AS build

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN npm run build

#Production stage
FROM node:20-alpine AS production

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY --from=build /app/dist ./dist

CMD ["node", "dist/index.js"]
