function isValid(s: string): boolean {
    let stack = []
    for (let char of s){
        if (char == '(' || char == '[' || char == '{'){
            stack.push(char)
        } else {
            let last = stack.pop()
            if (char == ')'){
                if (last !== '(') return false
            }
            if (char == ']'){
                if (last !== '[') return false
            }
            if (char == '}'){
                if (last !== '{') return false
            }
        }
    }
    return stack.length ? false: true
};