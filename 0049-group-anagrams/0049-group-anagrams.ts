function groupAnagrams(strs: string[]): string[][] {
    let map: {[key: string]: string[]} = {}

    for (let str of strs){
        const key = str.split('').sort().join('')

        if(!map[key]){
            map[key] = []
        }
        map[key].push(str)
    }

    return Object.values(map)
};