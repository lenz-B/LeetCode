function sortSentence(s: string): string {
    let words = s.split(' ')
    let result= new Array(words.length)
    for (let word of words){
        let index = parseInt(word[word.length - 1], 10) - 1
        result[index] = word.slice(0, -1)
    }
    return result.join(' ')
};