/**
 * https://nodejs.org/api/stream.html#writable-streams
 * 
 * Writable streams are an abstraction for a destination to which data is written.
 */
import { createWriteStream } from 'fs';

const writeStream = createWriteStream('../big.file');

