import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson, printPerson} from "./person";

printHello();
printUser('Jinwon', 24);

const person = makePerson('Jinwon', 24);
printPerson(person);