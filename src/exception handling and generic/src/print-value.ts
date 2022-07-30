import {IValuable} from "./valuable";

export const printValue = <T>(v: IValuable<T>): void => console.log(v.value);