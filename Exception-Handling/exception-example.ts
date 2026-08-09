//  //example:1

//   class demo{

//     show(){
       
//      let a=10;
//      let b=0;

//      console.log("start");
//      if(b==0){

//         throw new Error("can't divided by zero");   
//      }
//      let c=a/b;
     
//      console.log("stop"); 
//     }
// }
// let t=new demo();
// try{
// t.show();
// }
// catch(error){
//     console.log(Error.name);
    
//     console.log("Exception handled");   
// }
// finally{
//     console.log("Cleanup code");   
// }
//====================================================================================

//example:2

// class Test{

//   disply(){

//     let fname:any= null;
    
//     console.log("Start");
//     try{
//     console.log(fname.toUpperCase());
//     }
//     catch(error){
//       console.log("first name is null..."); 
//     }
//     console.log("End");
//     }
// }
// let d=new Test();
// d.disply();
//=======================================================================================
//example:3

// function checkAge(age:number):void{
//     if(age<18){

//         throw new Error("You are not eligible for vote");

//     }
//     console.log("You are eligible for vote.");
// }
// try{
// checkAge(19);
// }
// catch(error:any){

//     console.log("Error: ",error.message);
// }
// finally{
//     console.log("Thank You..");    
// }
//===================================================================================
//example:04

// function login(userName:string,password:string):void{

//     if(userName !=='admin' || password !== '1234'){
//         throw new Error("Invalid username or password");
// }
// console.log("Login Successful");
// }
// try{
// login("admin","12");
// }
// catch(error:any){
//     console.log("Error:",error.message);
    
// }
// finally{
//     console.log("Thank You..");
    
// }