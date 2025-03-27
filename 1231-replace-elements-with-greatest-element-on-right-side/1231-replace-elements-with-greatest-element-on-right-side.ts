function replaceElements(arr: number[]): number[] {
    let maxValue = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const currentValue = arr[i];
        arr[i] = maxValue;
       maxValue = Math.max(maxValue, currentValue);
    }
    return arr;
};