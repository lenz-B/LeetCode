function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    let map: {[keys: number]: number} = {}
    let result = 0
    for(let num of nums){
        map[num] = (map[num] || 0) + 1
    }
    for (let key in map){
        if (map[key] === 1) result = Number(key)
    }
    return result      
};