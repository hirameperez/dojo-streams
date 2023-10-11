import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const file = '../big.file';

createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('!'))
  .pipe(createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Finished'));
