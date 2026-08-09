/*Synchronous:
-Synchronous means the code runs in a particular sequence of instructions given in the program.
-Each instruction waits for the previous intstruction to complete its execution.
-ex:
    console.log("1");
    console.log("2");
    console.log("2");

Asynchronous:
-Due to synchronous programming,sometimes important instruction get blocked due to
 some previous instructions, which causes a delay in the UI.
-Asynchronous code execution allows to execute next instructions immediately and
 doesn't block the flow.  */

// console.log("start");

// setTimeout(() =>{
//     console.log("Thank You..");   
// },3000);
// console.log("End");

// for(let i=1;i<=5;i++){

//     setTimeout(() => {
//            console.log(i); 
//     },2000);    
    
// }

// function hello() {
//     console.log("Hello");
    
// }
// setTimeout(hello,3000);

// console.log("1");
// console.log("2");
// setTimeout(() =>{
//     console.log("Hello.");
// },3000);
// console.log("4");
// console.log("5");
//================================================================================

//callback: A callback is a function passed as an argument to another function.

//    function sum(a:number,b:number){
//     console.log(a+b);
// }
//    function calculator(sum:(a:number,b:number) => void){

//     sum(20,40); 
//    }
//    calculator(sum);
//==================================================================================
// let count=1;
// let timer=setInterval(() =>{
//   console.log(count++);
//   if(count>5){
//     clearInterval(timer);
//   }  
// },2000);
//=================================================================================



