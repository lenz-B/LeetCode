function getCommon(nums1: number[], nums2: number[]): number {
    let smallest = Infinity;
    const set2 = new Set(nums2); 
    for (let num of nums1) {
        if (set2.has(num) && num < smallest) {
            smallest = num;
        }
    }

    return smallest === Infinity ? -1 : smallest;
}
