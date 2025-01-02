function minLength(s: string): number {
    let lastLen
    do{
        lastLen = s.length
        s = s.replace(/AB|CD/g, '')
    } while(s.length !== lastLen)
    return s.length;
}
