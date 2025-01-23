function removeTrailingZeros(num: string): string {
    let size = num.length - 1
    for (let i = size; i >= 0; i--){
        if (num[i] == '0') num = num.slice(0, i)
        else break
    }
    return num
};