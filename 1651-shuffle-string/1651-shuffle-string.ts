function restoreString(s: string, indices: number[]): string {
    let result = new Array(s.length)
    for (let i = 0; i < s.length; i++){
        result[indices[i]] = s[i]
    }
    return result.join('')
};