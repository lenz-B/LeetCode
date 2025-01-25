function minimumOperations(nums: number[]): number {
    let uniqueElements = new Set(nums)
    if (uniqueElements.has(0)) uniqueElements.delete(0)
    return uniqueElements.size
};