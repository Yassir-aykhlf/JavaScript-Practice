const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightMark);

console.log("Mark's BMI: ", BMIMark);
console.log("John's BMI: ", BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log("the statement: Mark has a higher BMI than John is ", markHigherBMI);
