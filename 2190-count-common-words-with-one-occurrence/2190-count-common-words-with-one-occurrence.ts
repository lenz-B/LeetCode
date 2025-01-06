function countWords(words1: string[], words2: string[]): number {
    let map = new Map<string, number | boolean>();
    for (let word of words1) {
        if (map.has(word)) {
            let i = (map.get(word) as number)+ 1
            map.set(word, i);
        } else {
            map.set(word, 1)
        }
    }

    for (let word of words2) {
        if (map.get(word) === 1) {
            map.set(word, true)
        } else {
            map.set(word, false)
        }
    }

    return [...map].filter(([key, value]) => value === true).length;
};