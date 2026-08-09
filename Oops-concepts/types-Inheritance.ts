//1.single Inheritance

// class Test{
//     a:String="Vikram";
    

//     m1(){
//         console.log("m1 method running");
        
//     }
//     m2(){
//         console.log("m2 method running");
        
//     }
// }

// class Test1 extends Test{

// }
// let t=new Test1();
// t.m1();
// t.m2();
// console.log(t.a);
//=======================================================================================
//2.MultiLevel inheritance

// class Test5{
//     constructor(){
//         console.log("Parent class constructor");
        
//     }

    
//     m1(){
//         console.log("M1 method");
        
//     }
// }
// class Test6 extends Test5{

//     constructor(a:number){
        
//         console.log("Test6 class "+a);
//         super();
        
//     }

//     m2(){
//         console.log("m2 method");
        
//     }
// }
// class Test7 extends Test6{
    
//     m3(){
//         console.log("m3 method");
            
//     }
    
// }
// // let t1=new Test7(20);
// // t1.m1();
// // t1.m2();
// // t1.m3();

// let t6=new Test6(60);
// t6.m1();
// t6.m2();
//======================================================================================
//3. Multiple Inheritance
//  - one class inherits properties and methods from more than one parent class.it is called multiple inheritance.
//  - TypeScript does not support multiple inheritance using classes.
//  - It creates ambiguity problems that is why multiple inheritance isn't supported.

// class Test1{

//     m1(){
//         console.log("M1 method");
        
//     }
    
// }
// class Test2{
//     m2(){
//         console.log("M2 method");
        
//     }
    
// }
// class Test3 extends Test2,Test1{

// }
