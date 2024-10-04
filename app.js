

// 1-array 
// function getLevel2(n) {
//     let natija = [];  
//     for (let i = 1; i <= n; i++) {
//         natija.push(Math.pow(5, i)); 
//     }

//     return natija;
// }

// console.log(getLevel2(6));  


// 2-array
// function generateSequence(n, A, B) {
//     let arr = []; 
//     arr[0] = A; 
//     arr[1] = B;
//     for (let i = 2; i < n; i++) {
//         arr[i] = 0;  
//         for (let j = 0; j < i; j++) {
//             arr[i] += arr[j];
//         }
//     }

//     return arr;
// }

// console.log(generateSequence(5, 2, 3));  


// 3-array
// function reverseArray(arr) {
//     return arr.reverse();  
// }
// let arr = [7, 4, 9, 2, 3, 1, 5];
// console.log(reverseArray(arr));  


// 4-array
// function extractOdds(arr) {
//     let odds = []; 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {  
//             odds.push(arr[i]); 
//         }
//     }
//     console.log(odds.join(' ')); 
//     console.log(`toq sonlar soni = ${odds.length}`);  
// }
// let arr = [4, 5, 7, 8, 6, 9];
// extractOdds(arr);


// 5-array
// function extractEvensAndOddsCombined(arr) {
//     let evens = [];  
//     let odds = [];   
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {  
//             evens.push(arr[i]); 
//         } else { 
//             odds.push(arr[i]); 
//         }
//     }

//     console.log([...evens, ...odds.reverse()].join(' '));  
// }

// let arr = [4, 5, 7, 8, 6, 9];
// extractEvensAndOddsCombined(arr);


// 6-array
// function number(arr) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     return result;
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(number(arr)); 


// 7-array
// function extractReverseEvenIndexedElements(arr) {
//     let result = []; 

//     for (let i = arr.length - 1; i >= 0; i -= 2) { 
//         result.push(arr[i]); 
//     }

//     return result; 
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80]; 
// console.log(extractReverseEvenIndexedElements(arr)); 


// 8-array
// function number(arr) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     for (let i = 1; i < arr.length; i += 2) { 
//         result.push(arr[i]); 
//     }

//     return result; 
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(number(arr)); 



// 10-array (Chatgpt yordamida ishladim)
// function customOrder(arr) {
//     let result = []; // Natijani saqlash uchun bo'sh massiv
//     let n = arr.length; // Massiv uzunligini oling

//     // Juft va toq indekslarga asoslangan tartibda qo'shamiz
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             // Juft indekslar
//             if (i / 2 < n / 2) {
//                 result.push(arr[i / 2]); // A[0], A[1], A[2], ...
//             } else {
//                 result.push(arr[n - (i / 2 - n / 2) - 1]); // A[n-1], A[n-2], ...
//             }
//         } else {
//             // Toq indekslar
//             result.push(arr[n - Math.floor(i / 2) - 1]); // A[n-1], A[n-2], ...
//         }
//     }

//     return result; // Natijani qaytaramiz
// }

// // Massivni kiritamiz va funksiyani chaqiramiz
// let arr = [10, 20, 30, 40, 50, 60, 70, 80]; // N ta elementdan iborat massiv
// console.log(customOrder(arr)); // [10, 20, 80, 70, 30, 40, 60, 50]


// 11-array
// function rangeSum(arr, K, L) {
//     let sum = 0;  
//     for (let i = K; i <= L; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5)); 



// 12-array
// function separateTrueAndFalse(arr) {
//     let trueValues = []; 
//     let falseValues = []; 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) { 
//             trueValues.push(arr[i]); 
//         } else { 
//             falseValues.push(arr[i]); 
//         }
//     }

//     return {
//         Haqiqat: trueValues, 
//         Notogri: falseValues 
//     };
// }

// let inputArray = [10, false, "", "Abdulaziz", null];
// let result = separateTrueAndFalse(inputArray);

// console.log("Haqiqat:", result.Haqiqat); 
// console.log("Noto'g'ri:", result.Notogri); 



// 13-array
// function getOddMin(arr) {
//     let min = null; 
//     for (let i = 1; i < arr.length; i += 2) { 
//         if (min === null || arr[i] < min) { 
//             min = arr[i]; 
//         }
//     }

//     return min; 
// }

// let arr = [10, 20, 5, 30, 2, 15, 8, 6]; 
// let result = getOddMin(arr); 

// console.log("Juft indeksli elementlar orasidan kichik qiymat:", result);


//  14-array
// function getEvenMax(arr) {
//     let max = null; 
//     for (let i = 0; i < arr.length; i += 2) { 
//         if (max === null || arr[i] > max) { 
//             max = arr[i]; 
//         }
//     }

//     return max; 
// }

// let arr = [10, 20, 5, 30, 2, 15, 8, 6]; 
// let result = getEvenMax(arr);

// console.log("Toq indeksli elementlar orasidan katta qiymat:", result);


// 17-array (Chat gpt yordamida ishsladim)
// function findMaxSumPair(arr) {
//     if (arr.length < 2) {
//         return -1; 
//     }

//     let maxSum = arr[0] + arr[1]; 
//     let pair = [arr[0], arr[1]]; 

//     for (let i = 1; i < arr.length - 1; i++) { 
//         let currentSum = arr[i] + arr[i + 1]; 
//         if (currentSum > maxSum) {
//             maxSum = currentSum; 
//             pair = [arr[i], arr[i + 1]]; 
//         }
//     }

//     return pair; 
// }

// let arr = [10, 20, 5, 30, 15, 25]; 
// let result = findMaxSumPair(arr); 

// console.log("Yig'indisi eng katta bo'lgan 2 ta qo'shni elementlar:", result);


// 18-array
// function findDuplicateIndices(arr) {
//     let seen = {}; 
//     for (let i = 0; i < arr.length; i++) {
//         if (seen[arr[i]] !== undefined) { 
//             return [seen[arr[i]], i]; 
//         }
//         seen[arr[i]] = i; 
//     }
//     return null; 
// }

// let arr = [5, 3, 6, 9, 5];
// let result = findDuplicateIndices(arr);

// console.log("Bir xil elementlar indekslari:", result);

// 20-array
// function createEvenArray(a) {
//     let b = []; 
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) { 
//             b.push(a[i]); 
//         }
//     }

//     console.log("Juft elementlar soni:", b.length); 
//     console.log("Juft elementlar:", b); 

//     return b; 
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = createEvenArray(a); 


// 21-array
// function numberArray(a, k) {
//     let result = []; 
//     for (let i = 0; i < a.length; i++) {
//         result.push(a[i] + k);
//     }

//     return result; 
// }

// let a = [1, 2, 3, 4, 5]; 
// let k = 3; 
// let updatedArray = numberArray(a, k); 
// console.log("Yangilangan massiv:", updatedArray); 


// 23-array
// function reverseArray(arr) {
//     const n = arr.length; 
//     for (let i = 0; i < n / 2; i++) {
    
//         const temp = arr[i]; 
//         arr[i] = arr[n - 1 - i]; 
//         arr[n - 1 - i] = temp; 
//     }

//     return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6]; 
// let reversedArray = reverseArray(arr); 

// console.log("Teskari tartibda joylashtirilgan massiv:", reversedArray); 


// 24-array (Chatgpt yordamida ishladim)
// function replaceBetweenMinMax(arr) {
//     const n = arr.length; // Massiv uzunligini aniqlaymiz

//     // Eng kichik va eng katta elementlarni aniqlash
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     // Min va Max indekslarini topamiz
//     const minIndex = arr.indexOf(min);
//     const maxIndex = arr.indexOf(max);

//     // Min va Max indekslari orasidagi elementlarni nolga almashtirish
//     const startIndex = Math.min(minIndex, maxIndex) + 1; // Min dan keyin
//     const endIndex = Math.max(minIndex, maxIndex); // Max gacha

//     for (let i = startIndex; i < endIndex; i++) {
//         arr[i] = 0; // Elementlarni nolga almashtirish
//     }

//     return arr; // O'zgartirilgan massivni qaytaramiz
// }

// // Misol uchun massivni kiritamiz
// let arr = [4, 2, 7, 3, 9, 1, 5]; // Massiv
// let modifiedArray = replaceBetweenMinMax(arr); // Funksiyani chaqiramiz

// console.log("O'zgartirilgan massiv:", modifiedArray); // Natijani chiqaramiz



// 25-array
// function rotateLeft(arr) {
//     const n = arr.length;

//     if (n === 0) return arr; 

//     const firstElement = arr[0]; 
//     for (let i = 0; i < n - 1; i++) {
//         arr[i] = arr[i + 1]; 
//     }

//     arr[n - 1] = firstElement; 

//     return arr; 
// }

// let arr = [1, 2, 3, 4, 5]; 
// let rotatedArray = rotateLeft(arr); 

// console.log("Siklik siljitilgan massiv:", rotatedArray); 


