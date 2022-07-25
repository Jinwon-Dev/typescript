import Person, {makePerson} from "./person";

const person = makePerson('Jinwon', 24);
person.printInfo();

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['Jinwon', 'haena', 'jongwan'];
const people: Person[] = [
    makePerson('test', 24, true),
    makePerson('test2', 29)
];

console.log(Array.isArray(people));

for (const index in numbers) {
    console.log(`[${index}]: ${numbers[index]}`);
}

for (const property in person) {
    console.log(`property: ${property}`);
    // @ts-ignore
    console.log(`-> ${person[property]}`);
}

for (const person of people) {
    person.printInfo();
}