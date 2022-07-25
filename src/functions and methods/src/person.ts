type Person = {
    name: string,
    age: number,
    etc?: boolean
};

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person =>
    ({name, age, etc});