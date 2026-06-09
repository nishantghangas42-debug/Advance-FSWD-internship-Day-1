// 1.
const college = "Geeta University"
console.log(college)

// 2.
let number = 10;
console.log(number);

number = 20;
console.log(number);

number = 30;
console.log(number);

number = 40;
console.log(number);


// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
    let message = "Inside Block";
    console.log(message);
}

// 4.
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);


// 5.
const cube = num => num ** 3;

console.log(cube(3)); 


// 6. 
const checkEvenOdd = num => (num % 2 === 0 ? "Even" : "Odd");

console.log(checkEvenOdd(8)); 
console.log(checkEvenOdd(7)); 


// 7. 
const findMax = (x, y, z) => Math.max(x, y, z);

console.log(findMax(10, 25, 15)); 

// 8. 
const nums = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = nums;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);


// 9.
function greetUser(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greetUser("Ram", 25));


// 10. 
const userId = 101;
const url = `/api/users/${userId}`;

console.log(url);


// 11. 
const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);


// 12.
const { course: technology } = student;

console.log("Technology:", technology);


// 13.
function createUser(name, role = "Student") {
    return `Name: ${name}, Role: ${role}`;
}

console.log(createUser("Ram"));
console.log(createUser("Shyam", "Admin"));


// 14. 
function calculator(a, b, operation = "add") {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid Operation";
    }
}

console.log(calculator(10, 5));              
console.log(calculator(10, 5, "multiply"));


// 15. 
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(10, 20, 30, 40));


// 16. 
function findLargest(...numbers) {
    return Math.max(...numbers);
}

console.log(findLargest(10, 45, 22, 78, 35));


// 17. 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);