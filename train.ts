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


//  MIT TASK - N
function palindromCheck(str: string): boolean {
  const reversed: string = str.split('').reverse().join('');
  return str === reversed;
}
console.log(palindromCheck("dad"));  