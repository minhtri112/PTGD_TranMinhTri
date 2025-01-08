const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.88;
const weightJohn = 95;

BMIMark = weightMark / heightMark ** 2;
BMIJohn = weightJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);