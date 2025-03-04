function closestTarget(words: string[], target: string, startIndex: number): number {
    let r = Infinity
    let n = words.length

    for(let i = 0; i < n; i++){
        if(words[i] === target){
            let linDist = Math.abs(startIndex - i)
            let cirDist = n - linDist
            r = Math.min(r, Math.min(linDist, cirDist))
        }
    }
    return r === Infinity ? -1 : r
};