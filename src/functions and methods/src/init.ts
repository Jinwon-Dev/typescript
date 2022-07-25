type voidFunc = () => void;
export const init = (callback: voidFunc): void => {
    console.log('default initialization finished');
    callback();
    console.log('all initialization finished');
}