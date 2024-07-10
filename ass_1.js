// 1
function calculateTheSumOfTwo(n1, n2) {
  return n1 + n2;
}
// 2
function checkPalindrome(str) {
  return (
    str.toLocaleLowerCase() ===
    str.toLocaleLowerCase().split("").reverse().join("")
  );
}
// 3
function reverseStr(str) {
  return str.split("").reverse().join("");
}

// 4
function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// 5
function deepClone(value) {
  if (value === null || typeof value !== "object") return value;

  const copy = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = deepClone(value[key]);
    }
  }

  return copy;
}

// 6
function withoutReverse(str) {
  if (str === "") return str;
  return withoutReverse(str.substr(1)) + str.charAt(0);
}
// 7
function sumOfAll(arr = []) {
  return arr.reduce((prev, current) => prev + current, 0);
}

// 8
function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
}

// 9
function avgOfArr(arr) {
  return sumOfAll(arr) / arr.length;
}

// 10
function findIndex(arr, target) {
  return arr.indexOf(target);
}

// 11
function checkInt(num) {
  return Number.isInteger(num);
}

// 12
function daysOfAge(age) {
  return age * 365.25;
}
// 13
function Example(name, CB) {
  console.log("why your name is" + name + " -_- ");
  CB();
}
