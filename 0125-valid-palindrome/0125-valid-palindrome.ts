function isPalindrome(s: string): boolean {
    let nonAlphaNumeric = s.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();

    return nonAlphaNumeric === nonAlphaNumeric.split('').reverse().join('');
}