import { readFile, createReadStream } from 'fs';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  // readFile('../big.file', (err, data) => {
  //   if (err) {
  //     throw err;
  //   }

  //   res.send(data);
  // });
  const readStream = createReadStream('../big.file');

  readStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
