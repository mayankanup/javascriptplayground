const myexpenses = [
    { type: 'book', value: 250, store: 'amazon'},
    { type: 'meal', value: 2000, place: 'tasty restaurant'},
    { type: 'book', value: 800, store: 'flipkart'},
    { type: 'book', value: 400, store: 'amazon'}
]
const bookexpenses = myexpenses.
    filter(function(expense) {
        return expense.type === 'book';
    });
console.log('book expenses are \n', bookexpenses)

const amazonbookexpenses = bookexpenses.filter(
    function(expense){
        return expense.store === 'amazon';
    }
);

console.log('amazon book expenses are \n', amazonbookexpenses)

/* Example of map reduce below to calculate expense values */
const totalAmazonBookExpenses = 
    amazonbookexpenses.map(function(expense){
        return expense.value;
    }).reduce(function(prevValue, currentValue){
        return (prevValue || 0) + currentValue;
    });

console.log('1. Total book expenditure on amazon is : ', totalAmazonBookExpenses);

/*same thing by combining all filters and map reduce in one go */

const totalAmazonBookExpenses2 = myexpenses
    .filter(function(expense){
        return expense.type ==='book';
    })
    .filter(function(expense){
        return expense.store ==='amazon';
    })
    .map(function(expense){
        return expense.value;
    }).reduce(function(prevValue, currentValue){
        return (prevValue || 0) + currentValue;
    });

    console.log('2. Total book expenditure on amazon is : ', totalAmazonBookExpenses2);