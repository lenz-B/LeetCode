function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums)
    return nums.length !== set.size    
};