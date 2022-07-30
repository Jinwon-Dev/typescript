import {occurErrorMethod} from "./occur-error.method";
import {Valuable} from "./valuable";
import {printValue} from "./print-value";
import {parseNumber} from "./parse-number";
import {mergeObjects} from "./merge-objects";
import {ICircle, IRectangle, ISquare} from "./shape";
import {calculatorArea} from "./calculator-area";
import {flyOrSwim} from "./fly-or-swim";
import Bird from "./bird";
import Fish from "./fish";

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

type INameable = {
    name: string
};

type IAgeable = {
    age: number
};

const objectWithNameAndAge: INameable & IAgeable = mergeObjects(
    {name: 'Jinwon'}, {age: 24}
);
console.log(objectWithNameAndAge);

const square: ISquare = {tag: 'square', size: 10};

const rectangle: IRectangle = {tag: 'rectangle', width: 4, height: 5};

const circle: ICircle = {tag: 'circle', radius: 10};

console.log(
    calculatorArea(square),
    calculatorArea(rectangle),
    calculatorArea(circle)
);

const bird: Bird = new Bird();
const fish: Fish = new Fish();

flyOrSwim(bird);
flyOrSwim(fish);