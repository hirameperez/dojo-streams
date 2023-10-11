/**
 * https://nodejs.org/api/stream.html#class-streamduplex
 */
import { Duplex } from 'node:stream';

class MyDuplexStream extends Duplex {
  currentCharCode = 0;

  constructor(charCode, opts) {
    super(opts);

    this.currentCharCode = charCode;
  }

  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error) => void): void {
    console.log(chunk.toString());
    callback();
  }

  _read(size: number) {
    this.push(String.fromCharCode(this.currentCharCode++));

    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
}

const duplexStream = new MyDuplexStream(65, {});

process.stdin
  .pipe(duplexStream)
  .pipe(process.stdout);
