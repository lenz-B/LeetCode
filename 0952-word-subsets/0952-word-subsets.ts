function wordSubsets(words1: string[], words2: string[]): string[] {
    const queryChars = new Map<string, number>();
    const result: string[] = [];

    // Prepare query chars max count map from words2 (char => max_count);
    for(const word of words2) {
        const letters = new Map<string, number>();
        for(const letter of word) {
            const count = letters.get(letter) ?? 0;
            letters.set(letter, count + 1);
        }
        for(const [letter, count] of letters) {
            const current = queryChars.get(letter) ?? 0;
            if(count > current) {
                queryChars.set(letter, count);
            }
        }
    }

    // Check if word is universal, add to result
    for(const word of words1) {
        const letters = new Map<string, number>();
        for(const letter of word) {
            const count = letters.get(letter) ?? 0;
            letters.set(letter, count + 1);
        }

        let isUniversal = true;
        for(const [letter, queryCount] of queryChars) {
            const targetCount = letters.get(letter) ?? 0;
            if(queryCount > targetCount) {
                isUniversal = false;
                break;
            }
        }

        if(isUniversal) {
            result.push(word);
        }
    }

    return result;
};