type Person = {
    name: string,
    age: number,
    etc?: boolean
};

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person => {
    const person: Person = {
        name: name,
        age: age,
        etc: etc
    };

    return person;
}