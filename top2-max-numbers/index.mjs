// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {

    // 1) ถ้าหาก array มี length = 0 ให้ คืนค่าเป็น [] (อาร์เรย์เปล่า)
    if (numbers.length == 0) return [];

    // 2) หากไม่ได้เป็น [] แล้ว ให้สร้างค่าใหม่ใน variable uniqueNumber
    // Set เป็น data structure ที่เก็บค่า unique เอาไว้โดยอัตโนมัติ
    const uniqueNumber = new Set(numbers);

    // 3.1) แปลง uniqueNumber กลับไปเป็น Array
    // 3.2) 
    const sortedNumbers = Array.from(uniqueNumber).sort((a,b) => b-a);

    // 4) ให้ sortedNumber ใช้ .slice แสดงค่าออกมาแค่ 2 ตัว
    return sortedNumbers.slice(0,2);
};

// Test section
const num1 = [10, 40, 20, 2, 9, 19];
const num2 = [-10, -40, -20, -2, -9, -19];
const num3 = [10, 40, 20, 2, 40, 9, 19];

// Execute function
console.log(getTop2MaxNumbers(num1));
console.log(getTop2MaxNumbers(num2));
console.log(getTop2MaxNumbers(num3));
