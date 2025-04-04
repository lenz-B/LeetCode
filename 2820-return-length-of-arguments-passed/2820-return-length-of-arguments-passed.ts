type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let res: number = 0;
    let i: number = 0;

    while (args[i] !== undefined) {
        res++;
        ++i;
    };

    return res;
};