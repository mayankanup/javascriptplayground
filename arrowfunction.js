console.log("This is in continuation of functionfiltermap to reduce code using arrow function\n");
console.log("If arrow function contains only 1 input then it is not necessary to put in ()\n")
const myexpenses = [
    { type: 'book', value: 250, store: 'amazon'},
    { type: 'meal', value: 2000, place: 'tasty restaurant'},
    { type: 'book', value: 800, store: 'flipkart'},
    { type: 'book', value: 400, store: 'amazon'}
];

const totalAmazonBookExpenses = myexpenses
    .filter(expense => expense.type ==='book')
    .filter((expense) => expense.store ==='amazon')
    .map((expense) =>expense.value)
    .reduce((prevValue, currentValue) =>  (prevValue || 0) + currentValue);

console.log('1. Total book expenditure on amazon is : ', totalAmazonBookExpenses);
