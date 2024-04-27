import express from 'express';
import { createServer } from 'http';
import type { Request, Response } from 'express';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
