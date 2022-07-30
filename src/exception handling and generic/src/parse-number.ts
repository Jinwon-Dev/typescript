import {IValuable} from "./valuable";

export const parseNumber = <S extends String, T extends IValuable<S>>(v: T):
    number => parseInt(v.value.toString());