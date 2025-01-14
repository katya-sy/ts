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
console.log([1, 2, 3, 4, 5, 6, 7, 8].filter((num) => num % 2 == 0));

// 6
const filterAnagrams = (word: string, anagramList: string[]) => {
  const sortedWord = word.split("").sort().join("");

  return anagramList.filter(
    (item) => item.split("").sort().join("") === sortedWord
  );
};
console.log(filterAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// 7
const isComplete = (course: { name: string; lessons: string[] }) =>
  course.lessons.length >= 4;
const course = {
  name: "Java",
  lessons: ["variables", "functions", "conditions"],
};
console.log(isComplete(course));
