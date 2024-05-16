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




let myarray =[
     {
          id:1,
       name:"rohit",
       age:18,
       email:"rohit@gmail.com",
       city:"jaipur",
       
       
         },
         {
          id:2,
       name:"mohit",
       age:14,
       email:"mohit@gmail.com",
       city:"delhi"
       
         },
         {
          id:3,
       name:"anuj",
       age:19,
       email:"anuj@gmail.com",
       city:"sikar"
       
         },
         {
          id:4,
       name:"vinit",
       age:20,
       email:"vinit@gmail.com",
       city:"delhi"
       
         },
         {
          id:5,
       name:"raj",
       age:21,
       email:"raj@gmail.com",
       city:"jammu"
       
         }


     ]

     myarray.forEach((item)=>(
          console.log(item.id,item.name,item.city)
     ))

     // for(let i of myarray)
     //           {
     //                console.log(i.id,i.name,i.age,i.email,i.city)
     //           }
               // console.log(myarray[0])








                for in loop

               let a ={
                         
                              id:1,
                           name:"rohit",
                           age:18,
                           email:"rohit@gmail.com",
                           city:"jaipur",
                           
                           
                             
                         } 
                         // for(let i in a){
                         //      console.log(i)    // for key
                         // }
                         for(let i in a){
                              console.log(a[i])     // for value
                         }