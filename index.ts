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

// 8
enum ModalStatus {
  Opened,
  Closed,
}
const buildModal = (text: string, status: ModalStatus) => {
  return {
    text,
    status,
  };
};
console.log(buildModal("hexlet forever", ModalStatus.Opened));

// 9
type User = {
  name: string;
  age: number;
};
const getOlderUser = (user1: User, user2: User) => {
  if (user1.age === user2.age) return null;
  else if (user1.age > user2.age) return user1;
  else return user2;
};
console.log(getOlderUser({ name: "Petr", age: 8 }, { name: "Ivan", age: 4 }));

// 10
const getParams = (query: string) =>
  query.split("&").reduce((res: any, cur) => {
    const [key, value] = cur.split("=");
    res[key] = value;
    return res;
  }, {});
console.log(getParams("name=hexlet&count=3&order=asc"));

// 11
namespace Company {
  export const isEmployeeEmail = (email: string, domain: string) =>
    email.split("@")[1] === domain;
}
console.log(Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io"));

// 12
const filter = (numbers: number[], predicate: (num: number) => boolean) =>
  numbers.filter((num) => predicate(num));
console.log(filter([1, -5, 2, 3, 4, 133], (n) => n > 3));
