function findDuplicates(nums: number[]): number[] {
    let n = nums.length
    let map = {}
    let result = []
    for(let i = 0; i < n; i++){
        map[nums[i]] = (map[nums[i]] || 0) +1
        if (map[nums[i]] === 2) result.push(nums[i])
    }
    return result
};