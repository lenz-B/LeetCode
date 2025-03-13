function maximumCount(nums: number[]): number {
    let firstNonNeg = binarySearch(nums, 0)
    let firstPos = binarySearch(nums, 1)

    let negCount = firstNonNeg
    let posCount = nums.length - firstPos

    return Math.max(negCount, posCount)
};

function binarySearch(nums: number[], target: number): number{
    let left = 0, right = nums.length

    while(left < right){
        let mid = Math.floor((left + right)/2)

        if (nums[mid] < target) left = mid +1
        else right = mid
    }

    return left
}