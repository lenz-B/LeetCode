function commonChars(words: string[]): string[] {
    let result = []
    let fWord = words[0].split('')

    for (let char of fWord){
        if (words.every(word => word.includes(char))) {
            result.push(char)
            words = words.map(word => word.replace(char, ''))
        }    
    }    
    return result
};