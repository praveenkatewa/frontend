// let a=[10,20,30,40,50];
// let b=[10,'praveen',56.78,true,false,21,23,45,567,5,6];
// console.log(b);
// console.log(a);
// console.log(a[2]);

// for(let i=0;i<b.length;i++){
//      console.log(b[i])
// }


// let a=[10,20,30,40,50,60,70];
// let multi=1;
// for(let i=0;i<a.length;i++){
//      multi *=a[i];
//      console.log(multi,a[i])


// }

// for of loop
// let a=[10,20,30,40,50,60,70];
// let multi=1;
// for(let i of a){
//      multi*=i

// }
// console.log(multi)


// for in loop
// let a=[10,20,30,40,50,60,70];
// for(let i in a){
//      console.log(a[i])
// }

// 
// let a=[10,20,30,40,50,60,70];
// let max = a[0];
// for(let i in a){
//      if(a[i]>max){
//           max=a[i];
//      }
     
// }
// console.log(max)


// let a=[10,20,30,40,50,60,70];
// let max=0;
// let s_max=0;
// for(let i =0;i<a.length;i++ ){
//      if(max<a[i]){
//           max=a[i]
//      }
// }

// for(let i=0;i<a.length;i++){
//      if(s_max<a[i] && max>a[i]){
//           s_max=a[i]
//      }

// }


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