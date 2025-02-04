function countKeyChanges(s: string): number {
    let count = 0
    let str = s.toLowerCase()
    let key = str[0]
    for (let i = 0; i < str.length; i++){
        if(key !== str[i]) count++
        key = str[i] 
    }
    return count
};