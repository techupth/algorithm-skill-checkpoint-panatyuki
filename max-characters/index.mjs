// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {

    // 0) ถ้าไม่ใช่ string ให้ return ค่าเป็น null
    if (!str) {
        return null;
    }

    let charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    let max_count = Math.max(...Object.values(charCounts));
    return Object.keys(charCounts).find(char => charCounts[char] === max_count);

};

const string1 = "abcccccccd";
const string2 = "apple 1231111"

console.log(getMaxCharacters(string1));
console.log(getMaxCharacters(string2));
