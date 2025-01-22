function search(nums: number[], target: number): number {
    let mid = Math.floor(nums.length / 2);

    if (nums.length === 0) return -1; 
    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
        return search(nums.slice(0, mid), target);
    } else {
        const result = search(nums.slice(mid + 1), target); 
        return result === -1 ? -1 : mid + 1 + result;
    }
}
