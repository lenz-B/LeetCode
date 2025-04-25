function commonFactors(a: number, b: number): number {
    let factors = []

    let j = Math.min(a, b)

    for (let i = 1; i <= j; i++){
        if ( a%i === 0 && b%i === 0){
            factors.push(i)
        }
    }
    console.log(factors)
    return factors.length
};