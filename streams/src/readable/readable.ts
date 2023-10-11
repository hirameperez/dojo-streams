/**
 * https://nodejs.org/api/stream.html#two-reading-modes
 */
import { Readable } from 'node:stream';

class MyReadStream extends Readable {
  constructor(opts) {
    super(opts);
  }
}

const opts = {
  read: () => {}
}

const readStream = new MyReadStream(opts);

const vowels = ['a', 'e', 'i', 'o', 'u'];

vowels.forEach(v => readStream.push(v));

readStream.pipe(process.stdout);
