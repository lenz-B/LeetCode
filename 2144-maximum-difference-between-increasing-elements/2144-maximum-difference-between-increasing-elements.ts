function maximumDifference(nums: number[]): number {
    let max = -Infinity
    let min = nums[0]
    
    for (let i = 1; i < nums.length; i++){
        if (nums[i] > min) max = Math.max(max, nums[i] - min)
        else min = nums[i]
    }
    
    return max === -Infinity ? -1 : max    
};