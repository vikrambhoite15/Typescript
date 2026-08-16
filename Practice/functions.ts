//function is a reusable block of code that perform specific task.
//there are 3 types of functions:
//1. Named function
//2.Anonymous function
//3.Arrow function

//1.Named function

//1.with no parameter & no return type

// function add(){
//     let a=10;
//     let b=20;
//     console.log("add:",a+b);

// }
// add();

//2.with parameter & with reurn type

// function operation(a:number,b:number):number {

//     return(a+b);

// }
// const add=operation(30,50);
// console.log("Addition:", add);

// function info(a:string,b:string):string{

//     return(a+b);
// }
// console.log(info("Vikram ","Bhoite"));

//3.function with optional parameter

// function displayinfo(name:string, id:number,mailId?:string){

//     console.log("Name:",name);
//     console.log("Id:",id);
//     console.log("mailId:",mailId);   
// };
// //displayinfo("Vikram Bhoite",1111,"vikram@gmail.com");
// displayinfo("Vijay Chavan", 2222);

//4.with rest parameters
//rest parameter dont restrict the no of values you can pass to a function

// function addnumbers(...no:number[]){
//     let sum=0;
//     for(let i=0;i<no.length;i++){
//         sum=sum+no[i];
//     };
//     console.log("Sum of numbers:",sum);


// }
// addnumbers(10,20,40,50,70)
//==================================================================
//5.rest parameter with-multiple type

// function findElements(...elements: (number | string)[]):number{

//     for (const values of elements) {
//         console.log(values);

//     };
//     return elements.length;
// };
// const len=findElements("vikram", 34, "welcome", 1232, "Typescript", "Playwright");
// console.log("no. of elements:",len);
//=================================================================================
//6.function with default parameters

// function empDetails(name:string,id:number,Company="XYZ Pvt Ltd"){

//     console.log("Name:",name);
//     console.log("EmpID:",id);
//     console.log("Company Name:",Company);
// }
// //empDetails("David Marcs",1234);
// empDetails("Viraj B.",34343,"ABC Pvt Ltd")
//================================================================================

//2. Anonymous function:
//Anonymous function does not have a name.
//It usually assigned to a variable.

//without parameter and return type

// const msg=function(){
//     console.log("Welcome to Typescript");
//     console.log("Thanks..");  
// };
// msg();
//===========================================================================
//with parameter & return type

// const add=function(x:number,y:number):number{

//     return(x+y);
// };
// console.log(add(49,59));
//==============================================================================

//3.Arrow Functions:
//Arrow function provide a shorter syntax for writing a function.

//without parameter and return type

//    let greet=()=>{console.log("Wlecome to TypeScript")};
//   greet();

//with parameter and return type
//  const show=(name:string):string=>{
//     return`Hello.. ${name}`;
//  };
//  console.log(show("Vikram"));
 //====================================================================
 //Arrow function with implicit return.

//  const multiply=(a:number,b:number):number=> a*b;
//  console.log(multiply(30,40));
 
//  const add=(x:number,y:number):number=>x+y;
//  console.log(add(45,69));
//===========================================================================

//Callback function:
//Callback function is a function that passed as an argument to another function and gets executed later.
//this useful you want function to excute only after another function completes.

// function greet(name:string,callback:(message:string)=>void){
//     console.log(name);
//     callback("Hello")   
// };
// function showmsg(message:string){

//     console.log(message);
    
// }
// greet("Vikram",showmsg);
//=====================================================================

// function add(a:number,b:number,display:(result:number)=>void){

//     display(a+b);
// }
// function display(result:number){

//     console.log(result);
    
// }
// add(12,34,display);
//=========================================================================

// function add(a:number,b:number, callback:(x:number,y:number)=>void){

//     console.log("Addition:",a+b);
//     callback(20,40);
// };
// function multiply(x:number,y:number){
// console.log("Multiplication:",x*y);

// }
// add(10,30,multiply);
//==========================================================================
//Immediately invoked function expression.

// (function(a:number,b:number){
//     console.log(a+b);
    
// })(10,29);

// (function(x:number,y:number){
   
//     console.log(x*y);
    
// })(20,60)




