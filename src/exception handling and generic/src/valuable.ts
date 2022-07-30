export interface IValuable<T> {
    value: T;
}

export class Valuable<T> implements IValuable<T> {
    constructor(public value: T) {
    }
}