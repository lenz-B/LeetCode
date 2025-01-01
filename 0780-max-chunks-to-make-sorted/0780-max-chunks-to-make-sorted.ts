function maxChunksToSorted(arr: number[]): number {
    let max = -1;
    let count = 0;
    for (let i=0; i<arr.length; ++i) {
        const x = arr[i];
        max = Math.max(max, x);
        if (i === max) ++count;
    }

    return count;
}