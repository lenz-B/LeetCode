interface nameAndHeight {
    name: string
    height: number
}
function sortPeople(names: string[], heights: number[]): string[] {
    const newArr: nameAndHeight[] = names.map((el, i) => ({ name: el, height: heights[i] }));
    return newArr.sort((a,b) => b.height - a.height).map(el => el.name)
};
