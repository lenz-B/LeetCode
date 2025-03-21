function numIdenticalPairs(nums: number[]): number {
    let pairCount = 0;
    const map = {};
    for (const n of nums) {
        map[n] = (map[n] || 0) + 1;
        pairCount += map[n] - 1;
    }
    return pairCount;
};