function findWordsContaining(words: string[], x: string): number[] {
    let output = []
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            output.push(i)
        }
    }
    return output
};