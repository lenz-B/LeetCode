function maximumDifference(nums: number[]): number {
    let max = -Infinity
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] < nums[j] && max < (nums[j] - nums[i])) max = nums[j] - nums[i]
        }
    }
    return max === -Infinity ? -1 : max    
};