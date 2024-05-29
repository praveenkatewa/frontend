const complexData = [
     {
       id: 1,
       name: "John Doe",
       age: 30,
       address: {
         street: "123 Main St",
         city: "Anytown",
         country: "USA",
       },
       orders: [
         { orderId: "A123", amount: 50.75, status: "completed" },
         { orderId: "B456", amount: 30.25, status: "pending" },
       ],
     },
     {
       id: 2,
       name: "Jane Smith",
       age: 25,
       address: {
         street: "456 Oak St",
         city: "Othercity",
         country: "USA",
       },
       orders: [
         { orderId: "C789", amount: 100.5, status: "completed" },
         { orderId: "D012", amount: 75.2, status: "completed" },
       ],
     },
   ]

//    Filter users who are aged 25 or younger.
// const d =complexData.filter(complexData=>complexData.age>25);
// console.log(d);

let d=complexData.filter(complexData=>complexData.age>25);
console.log(d);


// Map the array to get an array of user names.
// const userNames = complexData.map(user => user.name);

// console.log(userNames);

// Filter orders with an amount greater than 50.
// const orders= complexData.map(user =>
//      user.orders.filter(order => order.amount > 50)
//    );
   
//    console.log(orders);



//    Map the array to get an array of order IDs.

// const orderIds = complexData.flatMap(person => person.orders.map(order => order.orderId));

// console.log(orderIds);


// const ids= complexData.map(a =>a.orders.map(b=>b.orderId));
     

// console.log(ids);


// const PendingOrders = complexData.filter(user =>
//      user.orders.some(order => order.status === "pending")
//    );
   
//    console.log(PendingOrders);

// const b= complexData.map((item)=>{
//      return item.orders.filter((item)=>{
//           return item.status==="pending"
//      })
// })
// console.log(b)



// Filter orders with an amount between 30 and 70.

// const b= complexData.map((item)=>{
//       return item.orders.filter((item)=>{
//         return  item.amount>=30 && item.amount<=70
//      })

// })
// console.log(b)


// Map the array to get an array of objects containing user names and their total order amounts

// const sum = complexData.map(person => {
//   const totalAmount = person.orders.reduce((sum, order) => sum + order.amount,0);
//   return {
//     name: person.name,
//     totalOrderAmount: totalAmount
//   };
// });

// console.log(sum);

// Map the array to get an array of objects containing user names and their completed order IDs.

const userNames = complexData.map(user => user.name);

console.log(userNames);