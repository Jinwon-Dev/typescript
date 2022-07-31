import {readFile, readFileSync} from "fs";
import {readFilePromise} from "./read-file.promise";

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

readFilePromise('./package.json')
    .then((value: string) => {
        console.log(value);
        return readFilePromise('./tsconfig.json');
    })
    .then((value: string) => {
        console.log('print tsconfig.json')
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    })

const asyncFunction = async (): Promise<void> => {
    const result = await readFilePromise('./package.json');
    console.log(result);
    const result2 = await readFilePromise('./tsconfig.json');
    console.log(result2);
}
asyncFunction();