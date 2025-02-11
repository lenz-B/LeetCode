function removeOccurrences(s: string, part: string): string {
    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== part[0]) {
            stack.push(s[i])
            continue
        }

        if (s.slice(i, i + part.length) === part) {
            s = s.slice(0, i) + s.slice(i + part.length)
            stack.length = 0
            i = -1
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};