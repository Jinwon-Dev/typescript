export function helloMessage(message: string): void {
    console.log('Hello', message);
}

export function helloUser(user: {name: string, age: number}): void {
    console.log("User's name: ", user.name);
    console.log("User's age: ", user.age);
}