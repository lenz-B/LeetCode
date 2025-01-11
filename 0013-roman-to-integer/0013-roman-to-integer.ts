function romanToInt(s: string): number {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    return symbols.reduceRight((acc, symbol, index) => {
        while (s.endsWith(symbol)) {
            s = s.slice(0, -symbol.length);
            acc += values[index];
        }
        return acc;
    }, 0)
};