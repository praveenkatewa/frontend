
let myarray =[
     {
          id:1,
       name:"rohit",
       age:18,
       phone_name:"lg"
         },
         {
          id:2,
       name:"mohit",
       age:14,
       phone_name:"nokia"
       
         },
         {
          id:3,
       name:"anuj",
       age:19,
       phone_name:"mi"
      
         },
         {
          id:4,
       name:"vinit",
       age:20,
       phone_name:"moto"
       
         },
         {
          id:5,
       name:"raj",
       age:21,
       phone_name:"i-phone"
       
         },
         {
          id:6,
       name:"tej",
       age:11,
       phone_name:"nokia"
       
         },
         {
           id:7,
        name:"prem",
        age:19,
        phone_name:"i-phone-15pro"
          },
          {
           id:8,
        name:"anuj",
        age:20,
        phone_name:"i-phone-14pro"
        
          },
          {
           id:9,
        name:"yash",
        age:21,
        phone_name:"lg"
        
          },
          {
           id:10,
        name:"rajkumar",
        age:45,
        phone_name:"nokia"
        
          },

     ]

//      let name = myarray
//   .filter(person => person.name.startsWith('m'))
//   .map(person => person.name);

// console.log(name);


let iPhone = myarray
  .filter(person => person.phone_name.includes('i-phone'))
  .map(person => person.phone_name)

console.log(iPhone);

     // jinka name m se start hota h usko fillter kro
// phone ka name ..10object..take output iphone ,arrayof object fillter use

// let a = myarray.map(person => person.phone_name)
// .filter(b => b.phone_name.includes('i-phone'))
// console.log(a);
