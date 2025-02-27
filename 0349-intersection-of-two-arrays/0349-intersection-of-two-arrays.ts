function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set<number>(nums1)
    let res = new Set<number>()
    for(let num of nums2){
        if(set1.has(num)) res.add(num)
    }
    return [...res]
};