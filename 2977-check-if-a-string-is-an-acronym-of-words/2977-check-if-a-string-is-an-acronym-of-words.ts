const isAcronym = (words, s) =>
    words.length === s.length && words.every((w, i) => w[0] === s[i]);