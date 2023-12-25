//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
let result = 0;

for (let i = 0; i < s.length; i++) {
  const currentNumber = romanNumbers[s[i]];
  const nextNumber = romanNumbers[s[i+1]];
  
  if (nextNumber > currentNumber) {
    result = result + nextNumber - currentNumber;
    i++;
  } else {
    result = result + currentNumber
  }
}
  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);