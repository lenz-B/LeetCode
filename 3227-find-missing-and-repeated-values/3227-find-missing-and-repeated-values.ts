function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let n = grid.length
    let obj: {[key: number]:number} = {}
    
    for(let i = 1; i <= n**2; i++){
        obj[i] = 0
    }

    for (let e of grid){
        for (let j of e){
            obj[j] = (obj[j] || 0) +1
        }
    }

    let a = Object.keys(obj).filter(key => obj[key] === 2)
    let b = Object.keys(obj).filter(key => obj[key] === 0)

    return [Number(a), Number(b)]    
};