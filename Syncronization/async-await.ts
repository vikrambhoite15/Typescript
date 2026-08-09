/* Async:
   -The 'async' keyword is used to declare an asynchronous function.
   -An 'async' function always returns a promise,even if you return a normal value.
   -It allows you to use the 'await' keyword inside function, making asynchronous code
    easier to read and write.   
    
   Await:
   - Await keyword is used inside an async function to wait until promise is resolved.
 */

//  async function greet(){
//     return("Hello..TypeScript");
//  }
//  greet().then((message) =>{console.log(message)});

// function getmessage(){
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve("Welcome to typescript")
//         },3000);
//     });
// }
// async function display(){
//     console.log("fetching..");
//   let result= await getmessage();  
//   console.log(result); 
// }
// display();
//================================================================================

