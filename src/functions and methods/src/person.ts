type Person = {
    name: string,
    age: number,
    etc?: boolean
};

export function makePerson(name: string, age: number, etc: boolean = false): Person {
    const person: Person = {
        name: name,
        age: age,
        etc: etc
    };

    return person;
}