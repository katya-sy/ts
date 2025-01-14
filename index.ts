// 1
console.log("Hello World!");

// 2
const multiply = (a: number, b: number) => a * b;
console.log(multiply(2, 3));

// 3
const repeat = (str: string, count: number) => {
  let res = "";
  for (let i = 0; i < count; i++) {
    res += str;
  }
  return res;
};
console.log(repeat("sometext", 2));

// 4
function getHiddenCard(cardNumber: string, starCount = 4) {
  if (cardNumber.length !== 16) return "Длина номера не соответствует";
  return repeat("*", starCount) + cardNumber.slice(12);
}
console.log(getHiddenCard("1234567890123456", 3));

// 5
const evenNumbers = (num: number) => num % 2 == 0;
console.log([1, 2, 3, 4, 5, 6, 7, 8].filter(evenNumbers));
