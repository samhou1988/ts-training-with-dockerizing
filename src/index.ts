function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const port = process.env.PORT || 3000;
  console.log(port)
  console.log('Hello');
  await wait(1000);
  console.log('World');
}

main();
