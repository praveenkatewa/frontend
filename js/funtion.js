/*

function add(a,b) {
     console.log(a+b)
}
function minus(a,b) {
     console.log(a-b)
}
function mul(a,b) {
     console.log(a*b)
}
function divide(a,b) {
     console.log(a/b)
}
function add(a,b) {
     console.log(a+b)
}



add(10,20)
minus(10,20)
mul(10,20)
divide(10,20)
minus(4,2)
*/

// function add(a,b){
//      return a+b
// }
// console.log(add(10,20))
// let ans =add(10,20)
// console.log(ans)



// case1
// function add(a,b=50){
//      return a+b
// }
// let ans =add(10,20)
// console.log(ans)


// case2
// function add(a,b=50){
//      return a+b
// }
// let ans =add(10)
// console.log(ans)

// case 3
// function add(a=100,b=50){
//      return a+b
// }
// let ans =add()
// console.log(ans)

// check no is prime no or not
//  function primeNotprime(n){
//      for(let i=2;i<n;i++){
//           // if(n%i==0){
//           //      return 1;
//           // }
//           if(n%i==0) return 1
//      }
//      return 0;

//  }
//   let ans=primeNotprime(7);

//  if(ans==0){
//      console.log("prime number")
//  }
//  else{
//      console.log("not prime number")
//  }


//  check prime no to n
// function primeNotprime(n){
//      for(let i=1;i<n;i++){
//           let flag=0;
//           for(let j=2;j<i;j++){
//                if(i%j==0){
//                     flag=1;
//                }

//           }
//           if(flag==0){
//                console.log(i);
//           }
          
//      }

//  }
//   primeNotprime(100);


// Armstrong numbers 

// function ArmstrongNumber(n){
//      let temp=n;
//      let freq=0;
//      while(temp!=0){
//           temp=parseInt(temp/10);
//           freq++;

//      }
// let sum=0;
// while(n!=0){
//      let rem=n%10;
//      sum=sum + rem**freq;
//      n= parseInt(n/10);
// }
// return sum;
// }
// let ans =ArmstrongNumber(153);
// console.log(ans)
     
 

// fibonacci
// let n = 10; 
// let n1 = 0, n2= 1, n3;
// console.log(n1);
// console.log(n2);

// for (let i = 2; i < n; i++) {
//     n3 = n1 + n2;
//     console.log(n3);
//     n1 = n2;
//     n2 = n3;
// }


// function fibonacci(num) {
//      let num1 = 0;
//      let num2 = 1;
//      let sum;
//      if (num === 1) {
//          return num1;
//      } else if (num === 2) {
//          return num2;
//      } else {
//          for (let i = 3; i <= num; i++) {
//              sum = num1 + num2;
//              num1 = num2;
//              num2 = sum;
//          }
//          return num2;
//      }
//  }
 
//  console.log("Fibonacci(5): " + fibonacci(5));
 
// type of funtion
// naming funtion

// named functions, anonymous functions, and arrow functions.
 
// anonymous
/*
let a =function(a,b){
     return a+b
}
console.log(a(10,20))

 let b=function(){
     console.log("hii")
 }
 b()  // call funtion b
*/

// arrow function

// (() =>{
//      console.log("hello arrow funtion")
// }) 
// () // call funtion


// let a=(x,y)=>x+y
// console.log(a(10,20))


// storng number

// let storng =(n)=>{
//      let sum=0;
//      while(n!=0){
//           let fact=1;
//           let rem=n%10;
//           for(let i=rem;i>=1;i--){
//                fact*=i;
//           }
//           sum+=fact;
//           n=parseInt(n/10);
//      }
//      return sum;
// }
// let ans = storng(145)
// console.log(ans)

// let number = 748; 
// let firstDigit, lastDigit;


// lastDigit = number % 10;


// while (number >= 10) {
//     number = parseInt(number / 10);
// }
// firstDigit = number;

// console.log("First digit: " + firstDigit);
// console.log("Last digit: " + lastDigit);

// let name="mohit sharma";
// console.log(name.slice(7,1))
