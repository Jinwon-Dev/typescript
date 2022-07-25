export default class Person {
    static numberOfPerson: number = 0;

    constructor(
        private readonly name: string,
        private readonly age: number,
        private readonly etc?: boolean
    ) {
        Person.numberOfPerson++;
    }

    printInfo(): void {
        console.log(`Person name: ${this.name}`);
        console.log(`Person age: ${this.age}`);
        console.log(`Person etc: ${this.etc}`);
    }

    static printNumberOfPerson() {
        console.log(`The Number Of Person Object: ${this.numberOfPerson}`);
    }
}

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person => {
    return new Person(name, age, etc);
};