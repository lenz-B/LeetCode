function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (const char of s) {
        if (char in pairs) { // If char is a closing bracket
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char); // If char is an opening bracket
        }
    }

    return stack.length === 0;
}
