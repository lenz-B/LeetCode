const clearDigits = (str: string): string => {
    const chars = []

    for (const char of str) {
        if (/\d/.test(char)) {
            chars.pop()
        } else {
            chars.push(char)
        }
    }

    return chars.join("")
}