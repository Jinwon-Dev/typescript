type PrintUserFunc = (arg0: string, arg1: number) => void

export const printUser: PrintUserFunc = function(name: string, age: number): void {
    console.log(`User's name: ${name}`);
    console.log(`User's age: ${age}`);
};