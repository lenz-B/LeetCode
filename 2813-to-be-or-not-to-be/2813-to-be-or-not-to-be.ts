type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const check = (condition: boolean, msg: string) => {
        if (!condition) throw new Error(msg)
        return true
    }
    return {
        toBe: (val1) => check(val1 === val, 'Not Equal'),
        notToBe: (val1) => check(val1 !== val, 'Equal')
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */