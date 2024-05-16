// array method
// push
// pop
// shift
// unshift
// slice
// splice
// Map
// filter
// reduce
// split
// join
// flat




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


// let x=[100,200,300,400,500,600,700,800,900]
// let y=x.map((item)=>{
//      return item*2;
// })
// console.log("original array :",x)
// console.log("new array: ",y)

// let y=x.map((item)=>item*2)
// console.log(y)

// let b=x.filter((item)=>{
//      return item > 300;
// });
// console.log(b);


// reduce
// let a= [10,20,30,40,50];
// let b=a.reduce((x,y)=>{
//      return x+y
// })
// console.log(b)

// let a=[111,12,55,889,266,336,889,226,996,774,22];
// let b=a.reduce((x,y)=>Math.max(x,y),a[0]);
     
// console.log(b);

// let a=[111,12,55,889,266,336,889,226,996,774,22];
//  let b=a.reduce((x,y)=>{
//      if(x>y){
//           return x
//      } else{
//           return y
//      }
//  })
//  console.log(b)



// let a='10,20,30,40,50,60';
// let b=a.split(",") //to string to array
// console.log(b)
// console.log(b.join(" "));   // to array to string

let a= [10,20,[1,2,[4,5,6],3],30,40,[4,['m','o','h',],5,6]];
console.log(a.flat(3))
