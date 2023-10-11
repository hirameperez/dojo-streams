import { readFile } from 'fs';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
