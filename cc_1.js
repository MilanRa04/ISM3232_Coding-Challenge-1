// Task 1: Variables and Data Types

// Declare variable employeeName using let and assign it the employee's name as a string
let employeeName = 'Bob Henry';

// Declare variable employeeID using const and assing it the employee's ID as a number
const employeeID = 49857;

// Declare variable isActive using var and assign it a boolean value true to indicate the employee is currently active
var isActive = true;

// Log each variable's value and its type to the console.

console.log('employeeName:', employeeName);
console.log('employeeName type:', typeof employeeName);

console.log('employeeID:', employeeID);
console.log('employeeID type:', typeof employeeID);

console.log('is Active:', isActive);
console.log('isActive type:', typeof isActive);

// Task 2: Compound Data Types

// Declare an array to store a list of available products
let products = ['Apple', 'Banana', 'Grapes'];

// Declare an object productDetails using const with properties name, price, and inStock
const productDetails = {
    name: 'Apple',
    price: 0.99,
    instock: true
};

// Log the array and the object to the console
console.log('Products:', products);
console.log('Product Details:', productDetails);

// Task 3: Assignment Operators

// Declare variable accountBalance with a number to represent an intial balance and log intial balance
let accountBalance = 10000;
console.log('Inital Balance:', accountBalance);

// Deposit $5000 into the account and log the new total balance
accountBalance += 5000;
console.log('Balance after $5000 deposit:', accountBalance);

// Withdraw $7500 and log the new total balance
accountBalance -= 7500;
console.log('Balance after $7500 withdrawl:', accountBalance);

// Apply 3 percent interest rate to the total account balance and log the new total balance
accountBalance *= 1.03;
console.log('Balance after earning 3 percent interest:', accountBalance);

// Buy out Co-owners shares at half the total account balance and log the new total balance
accountBalance /= 2;
console.log('Balance after buying out Co-owner:', accountBalance);

// Determine how much money would be left if dividends were evenly paid out the 10 shareholders and log the remaining balance
accountBalance %= 10;
console.log('Balance after paying out dividends to 10 shareholders:', accountBalance);


// Task 4: Comparison Operators

// Declare variables with numerical values to represent employees' scores
let employeeScore1 = 97;
let employeeScore2 = 85;

// Check if employeeScore 1 is greater than employeeScore 2
console.log('employeeScore1 > employeeScore2:', employeeScore1 > employeeScore2);

// Check if employeeScore 1 is less than employeeScore 2
console.log('employeeScore1 < employeeScore2:', employeeScore1 < employeeScore2);

// Check if employeeScore 1 is greater than or equal to employeeScore 2
console.log('employeeScore1 >= employeeScore2:', employeeScore1 >= employeeScore2);

// Check if employeeScore 1 is less than or equal to employeeScore 2
console.log('employeeScore1 <= employeeScore2:', employeeScore1 <= employeeScore2);

// Check if employeeScore 1 is equal to employeeScore 2
console.log('employeeScore1 === employeeScore2:', employeeScore1 === employeeScore2);

// Check if employeeScore 1 is not equal to employeeScore 2
console.log('employeeScore1 !== employeeScore2:', employeeScore1 !== employeeScore2);