import {occurErrorMethod} from "./occur-error.method";
import {Valuable} from "./valuable";
import {printValue} from "./print-value";
import {parseNumber} from "./parse-number";

try {
    occurErrorMethod();
} catch (e) {
    console.error(`Error message : ${e.message}`);
}

printValue(new Valuable<number>(1));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('hello'));
printValue(new Valuable<number[]>([1, 2, 3]));

const result: number = parseNumber(new Valuable('123'));
console.log(result);