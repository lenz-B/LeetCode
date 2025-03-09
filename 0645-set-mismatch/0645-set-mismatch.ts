function findErrorNums(nums: number[]): number[] {
    let n = nums.length
    let count = new Array(n +1).fill(0)
    let a = -1, b = -1

    for (let num of nums){
        count[num]++
    }

    for (let i = 1; i <= n; i++){
        if (count[i] > 1) a = i
        if (count[i] === 0) b = i
        if (a !== -1 && b !== -1) break
    }

    return [a,b]
};