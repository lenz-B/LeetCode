/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let k = m + n -1, i = m -1, j = n -1
    
    while(j >=0){
        nums1[k--] = (i >= 0 && nums2[j] < nums1[i]) ? nums1[i--] : nums2[j--]
    }
};