function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Example usage:
var age = parseInt(prompt("Enter your age:"));
var ticketPrice = calculateTicketPrice(age);
console.log("The price of the ticket for your age is $" + ticketPrice);
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2024)); // Output: true
