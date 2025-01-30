function getEncryptedString(s: string, k: number): string {
    let res = ''
    for (let i = 0; i < s.length; i++){
        res+= s[(i + k) % s.length]
    }
    return res    
};