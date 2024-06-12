
// synchronous   --- print line by line,, complete loop print then next line to run
// it take time 
/*
let a=10;
console.log(a)
let b=20;
console.log(b)
let c=30;
console.log(c)

for(let i=0;i<10;i++){
     console.log("i am running.....")

}
let d=50;
console.log(50)
let e=60;
console.log(e)
*/


//**** */ asynchronous*********

//  here first complete print all a,,b then loop print,, which take more time that print in last
/*
let a=10;
console.log(a)
let b=20;
console.log(b)
let c=30;
console.log(c)

setTimeout(()=>{
     for(let i=0;i<10;i++){
          console.log("i am running.....")
     
     }

},1000)

let d=50;
console.log(50)
let e=60;
console.log(e)
*/




// function output(a,b,add){
     

// }
// function sum(a,b)
// {
//      a+b
// }
// output(10,20,sum)




// function output(sum){
//      sum()
// }
// function sum(){
//      console.log("i am callback")
// }
// output(sum)
//******************************/********* */ */

// function food(dish,order){
//      setTimeout(()=>{
//           console.log(dish)
//           order()
//      },3000)
// }
// food("pizza",()=>{
// food("burger")

// })

//******************************* */
// function Food(dish,order){
       
//         setTimeout(()=>{
  
//             console.log(dish)
//             order()

//         },3000)
//     }

//     Food("Pizza",()=>{

//         Food("Burger",()=>{

//             Food("Patties",()=>{

//                 Food("Cold Drink")
//             })
//         })
//     })

//****************************/* */

