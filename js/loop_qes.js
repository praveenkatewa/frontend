/*
Write a Java Script Program to print all natural numbers from 1 to n. – using while loop

let n=10;
let i=1;
while(i<=n){
     console.log(i);
     i++
}

Write a Java Script Program to print all natural numbers in reverse (from n to 1). – using while loop

let n=1;
let i=10;
while(i>=n){
     console.log(i);
     i--
}
Write a Java Script Program to print all alphabets from a to z. – using while loop
let alphabet = 'a';
while (alphabet <= 'z') {
     
    console.log(alphabet);
   
    alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);

}
Write a Java Script Program to print all even numbers between 1 to 100. – using while loop
let i=1;
while(i<=100){
     if(i%2==0)
     console.log(i);
     i++
}

let i=2;
while(i<=100){
     console.log(i);
     i =i+2
}
Write a Java Script Program to print all odd number between 1 to 100.

let i=1;
while(i<=100){
     console.log(i);
     i =i+2
}
let i=1;
while(i<=100){
     if(i%2!=0)
     console.log(i);
     i++
}
Write a Java Script Program to find sum of all natural numbers between 1 to n.

let i=1;
let n=10;
let sum=0;
for(i=0;i<=n;i++){
     sum=sum+i;
}
console.log(sum)

Write a Java Script Program to find sum of all even numbers between 1 to n.
let i=1;
let n=10;
let sum=0;
for(i=1;i<=n;i++){
     if(i%2==0){
          sum=sum+i;
     }
}
console.log(sum)

Write a Java Script Program to find sum of all odd numbers between 1 to n.
let i=1;
let n=10;
let sum=0;
for(i=1;i<=n;i++){
     if(i%2!=0){
          sum=sum+i;
     }
}
console.log(sum)
Write a Java Script Program to print multiplication table of any number.
let number = 5; 
let i = 1;
while (i <= 10) {
    console.log(number + " * " + i + " = " + (number * i));
    i++;
}



let number = 5; 
let i = 1;
while (i <= 10) {
    console.log(number + " * " + i + " = " + (number * i));
    i++;
}

let number = 1678875; 
let count = 0;


while(number != 0) {
    
    number = Math.floor(number / 10);
   
    count++;
}

console.log("Number of digits: " + count);

let number = 748395738975; 
let firstDigit, lastDigit;


lastDigit = number % 10;


while (number >= 10) {
    number = Math.floor(number / 10);
}
firstDigit = number;

sum= lastDigit +firstDigit;

console.log(sum)



let number = 435;
let product = 1;

while (number > 0) {
    product =product *( number % 10);
    number = Math.floor(number / 10);
}

console.log("Product of digits:", product);

let number = 34576; 
let reverse = 0;

while (number > 0) {
    reverse = reverse * 10 + number % 10;
    number = Math.floor(number / 10);
}
console.log("Reverse of the number:", reverse);


let num = 12321; 
let originalNum = num;
let reverse = 0;

while (num> 0) {
    reverse = reverse * 10 + num % 10;
    num = Math.floor(num/ 10);
}

if (originalNum === reverse) {
    console.log(" is a palindrome");
} else {
    console.log(" not a palindrome");
}


for (let i = 0; i <= 127; i++) {
     console.log("ASCII Value:", i, " Character:", String.fromCharCode(i));
 }
 
 let number = 12;
 for (let i = 1; i <= number; i++) {
     if (number % i === 0) {
         console.log(i);
     }
 }
 

 let number = 5; 
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log( factorial); 


let number1 = 45; 
let number2 = 50; 
let hcf;

let smallerNumber = (number1 < number2) ? number1 : number2;

for (let i = 1; i <= smallerNumber; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        hcf = i;
    }
}

console.log("HCF of", number1, "and", number2, ":", hcf); 
*/

let number1 = 12;
let number2 = 18; 
let lcm;

let greaterNumber = (number1 > number2) ? number1 : number2;

for (let i = 1; i <= greaterNumber; i++){
    if (i % number1 === 0 && i % number2 === 0) {
        lcm = i; 
        break;
    }
}

console.log("LCM of", number1, "and", number2, ":", lcm);

