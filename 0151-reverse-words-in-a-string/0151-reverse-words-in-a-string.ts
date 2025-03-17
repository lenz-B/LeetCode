function reverseWords(s: string): string {
    let arr = s.split(' ')
    .reverse()
    .filter(word => word !== '')    
    .join(' ')
    console.log(arr)
    return arr    
};