/*callback function:-
  - A function passed as an argument to another function and executed later.
*/

/*//exmaple-1

function showMsg(message:String){

    console.log(message);

}
//function that takes callback function as an parameter.
function greet(name:String, callback:(message:String) => void){

    console.log(name);
    callback("Hello");
    
}
greet("John",showMsg);
*/

//example-2

// function sum(a:number,b:number,callback:(result:number)=>void){

//     let result=a+b;
//     callback(result);

// }

// function displayResult(result:number):void{

//     console.log(result);
    
// }
// sum(10,20,displayResult);
//================================================================================

/* Immediately Invoked Function Expression(IIFE):
   -Runs immediately after creation.
   -IIFE function is define and execute immediately.  */

//example-1

// (function(a:number,b:number){
//     console.log(a+b);
    
// })(10,20);

//example-2

// (function(){
    
//     console.log("Wel-come to TypeScript..");    
// })();

