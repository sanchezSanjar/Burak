//  MIT TASK - L

function reverseSentence(str: string): string {
  return str.split(' ').map((word: string) => word.split('').reverse().join('')).join(' ');
}

// Test
console.log(reverseSentence("we like coding!"));  // "ew ekil !gnidoc"