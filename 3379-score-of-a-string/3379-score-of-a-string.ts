function scoreOfString(s: string): number {
    const arr = s.split('')

    let result = 0
    for (let idx = 0; idx < arr.length - 1; idx++) {
        result += Math.abs(arr[idx].charCodeAt(0) - arr[idx + 1].charCodeAt(0))
    }

    return result;
};