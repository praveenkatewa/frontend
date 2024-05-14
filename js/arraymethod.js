// console.log(s_max)

// let x=[100,200,300,400,500,600]
//  let last=x.pop();
//  let first=x.shift();
//   x.unshift(last)
// x.push(first)
// console.log(x)
// console.log(x.slice(-4))


// let x=[100,200,300,400,500,600,700,800,900]
// console.log(x.slice(2,7))
// console.log(x.slice(2))
// console.log(x.slice(7,3))
// console.log(x.slice(-9,-7))
// console.log(x.slice(4,9))
// console.log(x.slice(0,5))


let x=[100,200,300,400,500,600,700,800,900]
// let y=x.map((item)=>{
//      return item*2;
// })
// console.log("original array :",x)
// console.log("new array: ",y)

// let y=x.map((item)=>item*2)
// console.log(y)

let b=x.filter((item)=>{
     return item > 300;
});
console.log(b);