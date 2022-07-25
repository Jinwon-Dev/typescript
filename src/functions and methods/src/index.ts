import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson} from "./person";
import {init} from "./init";

printHello();
printUser('Jinwon', 24);

const person = makePerson('Jinwon', 24);
person.printInfo();

init(() => console.log('custom initialization finished'));