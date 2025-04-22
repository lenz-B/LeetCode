function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: {[key: string] : string} = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let char of s){
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false
        } else stack.push(char)
    }
    return stack.length === 0
}