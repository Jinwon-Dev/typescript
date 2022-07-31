import {readFile, readFileSync} from "fs";
import * as Buffer from "buffer";

readFile('./package.json', (error: Error, buffer: Buffer) => {
    if (error) {
        console.log(error)
    } else {
        console.log('파일을 비동기 방식으로 읽는중...');
        console.log(buffer.toString());
    }
});

console.log('파일을 동기 방식으로 읽는중...')
const buffer: Buffer = readFileSync('./package.json')
console.log(buffer.toString());