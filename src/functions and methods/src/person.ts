type Person = {
    name: string,
    age: number,
    etc?: boolean
};

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person => {
    const person: Person = {name, age, etc}; // 속성 이름과 매개 변수 이름이 같을 시 적용 가능

    return person;
}