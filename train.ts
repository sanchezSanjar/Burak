//  MIT TASK - L

// function reverseSentence(str: string): string {
//   return str.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
// }

// // Test
// console.log(reverseSentence("we like coding!"));  // "ew ekil !gnidoc"

// // MIT TASK - M
// interface SquareNumber {
//   number: number;
//   square: number;
// }

// function getSquareNumbers(arr: number[]): SquareNumber[] {
//   return arr.map((num: number): SquareNumber => ({ number: num, square: num * num }));
// }

// // Test
// console.log(getSquareNumbers([1, 2, 3]));


// // MIT TASK - N

// function palindromCheck(str: string): boolean {
//   const reversed: string = str.split('').reverse().join('');
//   return str === reversed;
// }
// console.log(palindromCheck("dad"));  

/* >>>>> Project Standards <<<<<<<:
  - Logging standards
  - Naming standards:
    function, method, variable => CAMEL  goHome
    class => PASCAL                      MemberService
    folder => KEBAB
    css => SNAKE                         botton_style
  - Error handling

*/ 

/* 
  Traditional API
  Rest API
  GraphQL API
  ...
*/

/*
  Traditional FD   =>   BSSR   =>   EJS 
  Modern FD        =>   SPA    =>   REACT
*/


// // MIT TASK - O

// function sumOfNumbers(arr: unknown[]): number {
//   return arr
//     .filter((item): item is number => typeof item === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45

// // MIT TASK - P

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 })); // [["a", 10], ["b", 20]]


// // MIT TASK - Q

// function hasProperty(
//   obj: Record<string, unknown>,
//   property: string
// ): boolean {
//   return property in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// // MIT TASK - R

// function calculate(str: string): number {
//   const numbers = str.split("+");
//   return Number(numbers[0]) + Number(numbers[1]);
// }

// console.log(calculate("1+3")); // 4

// // MIT TASK - S

// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((acc, num) => acc + num, 0);
//     return expectedSum - actualSum;
// }

// // Test
// console.log(missingNumber([3, 0, 1])); // 2


// // MIT TASK - T

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const merged = [...arr1, ...arr2];
//     return merged.sort((a, b) => a - b);
// }

// // Test
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 
// // [0, 3, 4, 4, 6, 30, 31]

// // MIT TASK - U

function sumOdds(number: number): number {
    let count: number = 0;
    for (let i = 1; i < number; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(sumOdds(9));  // 4  (1, 3, 5, 7)
console.log(sumOdds(11)); // 5  (1, 3, 5, 7, 9)