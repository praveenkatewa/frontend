// let myarray =[
//      {
//           id:1,
//        name:"rohit",
//        age:18,
//        email:"rohit@gmail.com",
//        city:"jaipur",
       
       
//          },
//          {
//           id:2,
//        name:"mohit",
//        age:14,
//        email:"mohit@gmail.com",
//        city:"jaipur"
       
//          }


//      ]
// console.log(a.name,a.age,a.email,a.city)
// console.log(a["name"])


// for(let i of myarray)
//      {
//           console.log(i.id,i.name,i.age,i.email,i.city)
//      }




// let myarray =[
//      {
//           id:1,
//        name:"rohit",
//        age:18,
//        email:"rohit@gmail.com",
//        city:"jaipur",
       
       
//          },
//          {
//           id:2,
//        name:"mohit",
//        age:14,
//        email:"mohit@gmail.com",
//        city:"delhi"
       
//          },
//          {
//           id:3,
//        name:"anuj",
//        age:19,
//        email:"anuj@gmail.com",
//        city:"sikar"
       
//          },
//          {
//           id:4,
//        name:"vinit",
//        age:20,
//        email:"vinit@gmail.com",
//        city:"delhi"
       
//          },
//          {
//           id:5,
//        name:"raj",
//        age:21,
//        email:"raj@gmail.com",
//        city:"jammu"
       
//          }


//      ]

//      myarray.forEach((item)=>(
//           console.log(item.id,item.name,item.city)
//      ))

     // for(let i of myarray)
     //           {
     //                console.log(i.id,i.name,i.age,i.email,i.city)
     //           }
               // console.log(myarray[0])








               //  for in loop

               // let a ={
                         
               //                id:1,
               //             name:"rohit",
               //             age:18,
               //             email:"rohit@gmail.com",
               //             city:"jaipur",
                           
                           
                             
               //           } 
               //           // for(let i in a){
               //           //      console.log(i)    // for key
               //           // }
               //           for(let i in a){
               //                console.log(a[i])     // for value
               //           }


// let myarray =[
//      {
//           id:1,
//        name:"rohit",
//        age:18,
//        email:"rohit@gmail.com",
//        city:"jaipur",

       
       
//          },
//          {
//           id:2,
//        name:"mohit",
//        age:14,
//        email:"mohit@gmail.com",
//        city:"delhi"
       
//          },
//          {
//           id:3,
//        name:"anuj",
//        age:19,
//        email:"anuj@gmail.com",
//        city:"sikar"
       
//          },
//          {
//           id:4,
//        name:"vinit",
//        age:20,
//        email:"vinit@gmail.com",
//        city:"delhi"
       
//          },
//          {
//           id:5,
//        name:"raj",
//        age:21,
//        email:"raj@gmail.com",
//        city:"jammu"
       
//          },
//          {
//           id:6,
//        name:"tej",
//        age:11,
//        email:"tej@gmail.com",
//        city:"agra"
       
//          }


//      ]


//      const d =myarray.filter(myarray=>myarray.age>18);
     
//      // const givencity="jammu";
//      // const d =myarray.filter(myarray=>myarray.age>18 && myarray.city===givencity);
//      console.log(d);


let myarray =[
  {
       id:1,
    name:"rohit",
    age:18,
    email:"rohit@gmail.com",
    city:"jaipur",
    marks:{
      p:85,
      m:75,
      c:92,
    }
    
    
    
      },
      {
       id:2,
    name:"mohit",
    age:14,
    email:"mohit@gmail.com",
    city:"delhi",
    marks:{
      p:85,
      m:75,
      c:92,
    }
    
      },
      {
       id:3,
    name:"anuj",
    age:19,
    email:"anuj@gmail.com",
    city:"sikar",
    marks:{
      p:85,
      m:75,
      c:92,
    }
    
      },
      {
       id:4,
    name:"vinit",
    age:20,
    email:"vinit@gmail.com",
    city:"delhi",
    marks:{
      p:85,
      m:75,
      c:92,
    }
    
      },
      {
       id:5,
    name:"raj",
    age:21,
    email:"raj@gmail.com",
    city:"jammu",
    marks:{
      p:55,
      m:25,
      c:62,
    }
    
      },
      {
       id:6,
    name:"tej",
    age:11,
    email:"tej@gmail.com",
    city:"agra",
    marks:{
      p:56,
      m:45,
      c:54,
    }
    
      },
      {
        id:7,
     name:"prem",
     age:19,
     email:"prem@gmail.com",
     city:"kota",
     marks:{
       p:67,
       m:87,
       c:98,
     }
     
       },
       {
        id:8,
     name:"anuj",
     age:20,
     email:"anuj@gmail.com",
     city:"bhopal",
     marks:{
       p:66,
       m:77,
       c:44,
     }
     
       },
       {
        id:9,
     name:"yash",
     age:21,
     email:"yash@gmail.com",
     city:"chumu",
     marks:{
       p:45,
       m:75,
       c:56,
     }
     
       },
       {
        id:10,
     name:"rajkumar",
     age:45,
     email:"rajkumar@gmail.com",
     city:"ajmer",
     marks:{
       p:67,
       m:76,
       c:89,
     }
     
       }



  ]


  let data=myarray.filter((item,index)=>{
  return((item.marks.p + item.marks.c + item.marks.m)/3)>75
 })

 console.log(data)