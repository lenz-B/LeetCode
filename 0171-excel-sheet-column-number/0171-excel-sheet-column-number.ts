function titleToNumber(columnTitle: string): number {
    let num = 0
    for (let s of columnTitle){
        num = num * 26 + (s.charCodeAt(0) - 64)
    }
    return num
};