/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  const words = input.split(" ");
  const cases = Array.isArray(caze) ? caze : [caze];
  let res = input;
  for (let i = 0; i < cases.length; i++) {
    const target = cases[i];

    if (target === "camel") {
      res = camel(words);
    }
    if (target === "pascal") {
      res = pascal(words);
    }
    if (target === "snake") {
      res = snake(words);
    }
    if (target === "kebab") {
      res = kebab(words);
    }
    if (target === "title") {
      res = title(words);
    }
    if (target === "vowel") {
      res = vowel(res);
    }
    if (target === "consonant") {
      res = consonant(res);
    }
    if (target === "upper") {
      res = upper(res);
    }
    if (target === "lower") {
      res = lower(res);
    }
  }

  return res;
};

const camel = (input) => {
  return input.reduce(
    (res, cur, index) =>
      index === 0
        ? (res += cur.toLowerCase())
        : (res += cur[0].toUpperCase() + cur.slice(1).toLowerCase()),
    ""
  );
};

const pascal = (input) => {
  return input.reduce(
    (res, cur) => (res += cur[0].toUpperCase() + cur.slice(1).toLowerCase()),
    ""
  );
};

const snake = (input) => {
  return input.reduce(
    (res, cur, index) =>
      res + cur.toLowerCase() + (index < input.length - 1 ? "_" : ""),
    ""
  );
};

const kebab = (input) => {
  return input.reduce(
    (res, cur, index) =>
      res + cur.toLowerCase() + (index < input.length - 1 ? "-" : ""),
    ""
  );
};

const title = (input) => {
  return input.reduce(
    (res, cur, index) =>
      res +
      cur[0].toUpperCase() +
      cur.slice(1).toLowerCase() +
      (index < input.length - 1 ? " " : ""),
    ""
  );
};

const vowelArr = ["a", "i", "u", "e", "o"];

const vowel = (input) => {
  return input
    .split("")
    .reduce(
      (res, curr) =>
        res +
        (vowelArr.includes(curr.toLowerCase()) ? curr.toUpperCase() : curr),
      ""
    );
};

const consonant = (input) => {
  return input
    .split("")
    .reduce(
      (res, curr) =>
        res +
        (vowelArr.includes(curr.toLowerCase())
          ? curr.toLowerCase()
          : curr.toUpperCase()),
      ""
    );
};

const upper = (input) => {
  return input.toUpperCase();
};

const lower = (input) => {
  return input.toLowerCase();
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
