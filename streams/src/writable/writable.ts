/**
 * https://nodejs.org/api/stream.html#writable-streams
 * 
 * Writable streams are an abstraction for a destination to which data is written.
 * 
 * https://nodejs.org/api/stream.html#new-streamwritableoptions
 * https://nodejs.org/api/stream.html#implementing-a-writable-stream
 * 
 */

import { Writable } from 'node:stream';

class MyWriteStream extends Writable {
  constructor(opts) {
    super(opts);
  }
}

const opts = {
  write: (chunk, decode, callback) => {
    console.log(chunk.toString());
    callback();
  }
}

const writeStream = new MyWriteStream(opts);

process.stdin.pipe(writeStream);
