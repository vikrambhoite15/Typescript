/*Promises: 
  -A Promise in TypeScript is an object that represents the eventual result of an asynchronous operation. 
  -It can be in one of three states: Pending, Fulfilled, or Rejected. 
  -Promises are used to handle asynchronous tasks in a clean and readable 
   way using then(), catch(), finally(), or async/await.
  
   -syntax:
  let promise= new Promise((resolve,reject) =>{..})
  -resolve & reject are callbacks provided by TS.

 Promise States:
   -A Promise can be in one of three states:

   1. Pending – operation is still running.
   2. Fulfilled (Resolved) – operation completed successfully.
   3. Rejected – operation failed. 
 
   Promise Methods:
    1. then()  -  Executes when the promise is fulfilled.
    2. catch() -  Executes when the promise is rejected.
    3. finally -  Executes whether the promise is fulfilled or rejected. */


    // let promise= new Promise((resolve) => {
//     console.log("I am promise");
//     setTimeout(() =>{
//       resolve("success");
//     },3000);      
// });
// promise.then((message) => {console.log(message)});
//================================================================================
// function getmessage():Promise<string> {
//   return new Promise((resolve) =>{
//     setTimeout(() => {
//       resolve("Hello Everyone..");
//     },3000);
//   });
// }
// getmessage().then((message) => console.log(message));
//===============================================================================

//Promise Success and failed.
// let promise= new Promise<string>((resolve,reject) => {
//     let success=false;

//     if(success){
//         resolve("Data loaded successfully");
//     }
//     else{
//         reject("Failed to load data");
//     }
// });
// promise.then((result) =>{console.log(result)}).
//         catch((error) =>{console.log(error)});
//=================================================================================

//Asynchronous Promise using setTimeout:

// let promise=new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Task complete after 3 sec");    
//     },3000);
// });
// console.log("Waiting..");

// promise.then((result) =>{console.log(result);
// });
//====================================================================================

//Chaining with Asynchronous Operations:

// function getNumber():Promise<number>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve(5);
//         },2000);
//     });
// }
// getNumber().then((num) =>{console.log("Number:",num);
//     return num*2;
// }).
// then((result)=>{console.log("Double:",result);
//     return result+10;
// }).
// then((finalResult) =>{console.log("Final Result:",finalResult);
// });
//==============================================================================

//Chaining with Asynchronous function:
// function getdata1(){
//   return new Promise((resolve,reject) =>{
// setTimeout(() =>{
  
//   resolve("suceess");
  
// },3000)
//   })
// }
// function getdata2(){
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       resolve("success");
//     },3000)
       
//   });
// }
// console.log("Data 1 feching..");
// getdata1().then((result) =>{console.log(result);
//   console.log("Data 2 fetching.."); 
//   getdata2().then((res) =>{console.log(res)});
// });