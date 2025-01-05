function maximumValue(strs: string[]): number {
    let max = 0
    for (let str of strs){
        if (isNaN(Number(str))) max = Math.max(max, str.length)
        else max = Math.max(max, Number(str))
    }
    return max    
};