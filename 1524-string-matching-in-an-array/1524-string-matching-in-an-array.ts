function stringMatching(words: string[]): string[] {
    let result = new Set<string>();
    for (let i = 0; i < words.length; i++){
        for (let j = i + 1; j < words.length; j++){
            if(words[i].includes(words[j])){
                result.add(words[j]) 
            } else if (words[j].includes(words[i])){
                result.add(words[i])
            }
        }
    }
    return Array.from(result)
};