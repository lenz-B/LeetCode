function isGood(nums: number[]): boolean {
    let biggest = Math.max(...nums)
    let obj = {}
    let flag = 0
    
    for (let num of nums){
        if (num === biggest) flag++

        if (num !== biggest){
            if (obj[num]) return false
            else obj[num] = true 
        }
    }
    return flag <= 2 && biggest === nums.length - 1;
};