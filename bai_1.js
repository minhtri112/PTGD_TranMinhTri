const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.88;
const weightJohn = 95;

BMIMark = weightMark / heightMark ** 2;
BMIJohn = heightJohn / weightJohn ** 2;

markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);