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

type MakePerson = (string, number, boolean?) => Person;

class MakePersonData {
    private _name: string;
    age: number;
    etc: boolean;

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }
}

export const makePerson: (personData: MakePersonData) => Person = (personData: Readonly<MakePersonData>): Person => {
    console.log (personData.name);

    return new Person(personData.name, personData.age, personData.etc);
};