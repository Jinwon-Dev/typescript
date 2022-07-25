class Person {
    constructor(
        private name: string,
        private age: number,
        private etc?: boolean
    ) {}

    printInfo: () => void = (): void => {
        console.log(`Person name: ${this.name}`);
        console.log(`Person age: ${this.age}`);
        console.log(`Person etc: ${this.etc}`);
    }
}

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person => {
    return new Person(name, age, etc);
}