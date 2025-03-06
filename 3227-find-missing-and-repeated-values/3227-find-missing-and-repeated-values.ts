function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let n = grid.length
    let count = new Array(n*n +1).fill(0)
    let a = -1, b = -1

    for (let row of grid){
        for (let num of row){
            count[num]++
        }
    }
    
    for (let i = 1; i <= n*n; i++){
        if (count[i] === 2) a = i
        if (count[i] === 0) b = i
        if (a !== -1 && b !== -1) break
    }

    return [a, b]    
};