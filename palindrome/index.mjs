// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
    // .toLowerCase() สำหรับแปลงอักษรให้เป็นพิมพ์เล็ก
    // .replace() เพื่อลบตัวอักษรที่ไม่เกี่ยวข้องออกจากสตริง
    // Regular experssion ที่ใช้ใน Palindrome บ่อย ๆ คือ [^0-9a-zก-ฮ] และเพิ่ม あーん มาเพื่อตรวจสอบ string แบบภาษาญี่ปุ่นด้วย
    str = str.toLowerCase().replace(/[^0-9a-zก-ฮあーん]/g, "");

    // ใช้ for loop วนในตัวอักษร
    // เปรียบเทียบตัวอักษรที่ i กับตัวอักษรที่ str.length - 1 - i
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str.length - 1 - i) {
            return false;
        }
    }
    return true;
};

// Test section
const text1 = "abba"
const text2 = "abcdefg"
const text3 = "สาส"
const text4 = "นคร"
const text5 = "101"
const text6 = "110022"
const text7 = "きさき"
const text8 = "あんなに"

// Execute function
console.log(`${text1} is a Palindrome: ${palindrome(text1)}`); // true
console.log(`${text2} is a Palindrome: ${palindrome(text2)}`); // false
console.log(`${text3} is a Palindrome: ${palindrome(text3)}`); // true
console.log(`${text4} is a Palindrome: ${palindrome(text4)}`); // false
console.log(`${text5} is a Palindrome: ${palindrome(text5)}`); // true
console.log(`${text6} is a Palindrome: ${palindrome(text6)}`); // false
console.log(`${text7} is a Palindrome: ${palindrome(text7)}`); // true
console.log(`${text8} is a Palindrome: ${palindrome(text8)}`); // false
