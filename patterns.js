const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateSpaces(left, right, total) {
  const leftLength = left.toString().length;
  const rightLength = right.toString().length;
  const spaces = total - (leftLength + rightLength);
  return " ".repeat(spaces);
}

function generateNumberPattern(n) {
  let topRow = "";
  for (let i = 1; i <= n; i++) {
    topRow += i;
  }
  console.log(topRow);

  for (let i = 2; i < n; i++) {
    console.log(i + calculateSpaces(i, n - i + 1, topRow.length) + (n - i + 1));
  }

  let bottomRow = "";
  for (let i = n; i >= 1; i--) {
    bottomRow += i;
  }
  console.log(bottomRow);
}

function generateAlphabeticPattern(n) {
  let startChar = "a".charCodeAt(0);
  let endChar = startChar + n - 1;

  let topRow = "";
  for (let i = startChar; i <= endChar; i++) {
    topRow += String.fromCharCode(i);
  }
  console.log(topRow);

  for (let i = startChar + 1; i < endChar; i++) {
    console.log(
      String.fromCharCode(i) +
        " ".repeat(n - 2) +
        String.fromCharCode(endChar - (i - startChar))
    );
  }

  let bottomRow = "";
  for (let i = endChar; i >= startChar; i--) {
    bottomRow += String.fromCharCode(i);
  }
  console.log(bottomRow);
}

function generatePattern(n, t) {
  if (t !== "1" && t !== "a") {
    console.log(
      'Invalid pattern type. Use "1" for numbers or "a" for alphabets.'
    );
    return;
  }
  n = parseInt(n);
  if (!(1 <= n && n <= 26)) {
    console.log(
      "Invalid pattern size. Please enter a number between 1 and 26."
    );
    return;
  }

  if (t === "1") {
    generateNumberPattern(n);
  } else if (t === "a") {
    generateAlphabeticPattern(n);
  }
}

rl.question(
  'Enter pattern type ("1" for numbers, "a" for alphabets): ',
  (t) => {
    rl.question("Enter pattern size (between 1 and 26): ", (n) => {
      generatePattern(n, t);
      rl.close();
    });
  }
);
