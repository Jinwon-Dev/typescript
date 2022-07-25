type Person = {
    name: string,
    age: number,
    etc?: boolean
};

export const printPerson = ({name, age}: Person): void => {
    console.log(`Person name: ${name}`);
    console.log(`Person age: ${age}`);
}

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person =>
    ({name, age, etc});