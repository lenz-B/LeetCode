function numIdenticalPairs(nums: number[]): number {
   let goodPair = 0 
   let map = {}
   for(let num of nums) {
     if(map[num]) {
       goodPair += map[num]
       map[num]++
     } else {
       map[num] = 1
     }
   }
  return goodPair
};