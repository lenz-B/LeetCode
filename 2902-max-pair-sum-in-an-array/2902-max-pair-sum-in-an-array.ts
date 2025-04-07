function maxSum(nums: number[]): number {
    let pairs: {num: number; lar: number}[] = []
    for (let num of nums){
        let lar = Math.max(...num.toString().split('').map(Number))
        pairs.push({num, lar})
    }
    
    let digitMap = new Map<number, number[]>()
    for (let pair of pairs){
        if (!digitMap.has(pair.lar)) digitMap.set(pair.lar, [])
        digitMap.get(pair.lar)!.push(pair.num)
    }

    let maxSum = -1

    for (let [digit, nums] of digitMap.entries()){
        if (nums.length > 1){
            nums.sort((a, b) => b - a)
            let sum = nums[0] + nums[1]
            maxSum = Math.max(sum, maxSum)
        }
    }

    return maxSum
};