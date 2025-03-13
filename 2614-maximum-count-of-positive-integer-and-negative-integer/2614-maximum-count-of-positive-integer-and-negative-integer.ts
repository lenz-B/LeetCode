function maximumCount(nums: number[]): number {
    let pos = 0, neg = 0
    for (let num of nums){
        if (num < 0) neg++
        if (0 < num) pos++
    }
    return pos < neg ? neg : pos 
};