function topKFrequent(nums: number[], k: number): number[] {
    let map: { [key: number]: number } = {};

    for(let num of nums){
        map[num] = (map[num] || 0) +1
    }

    const arr = Object.entries(map).sort(([, a], [, b]) => b - a)

    return arr.slice(0, k).map(([key]) => Number(key))
};