function differenceOfSums(n: number, m: number): number {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        i % m === 0 ? res -= i : res += i;
    }

    return res;
};