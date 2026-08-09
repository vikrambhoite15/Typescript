/* Polymorphism:

- Types of polymorphism:
  1. Compile-Time polymorphism.
  2. Run-Time polymorphism.

1.Compile-Time Polymorphism:
-Compil-Time polymorphism achieve by using method overloading.
-In method overloading having same method name with different parameters.
Rules of method overloading:-
  1.Only one implementation allowed.
  2.The implementation must be follow the signatures.
  3.Implementation method must handle all cases. */

//1.Constructor overloading:

// class calculator{

//     constructor();
//     constructor(a:number,b:number);

//     constructor(a?:number,b?:number){

//         if(a!==undefined && b!==undefined){

//             console.log("Sum of a & b:"+(a+b));
//         }
//         else{
//             console.log("Default constructor called..");
//             }
//     }
// }
// let cal=new calculator();
// let cal2=new calculator(10,20);
//=====================================================================================

//2.Method overloading.
// class Operation{

//     add(a:number,b:number):number;
//     add(a:number,b:number,c:number):number;

//     add(a:number,b:number,c?:number):number{

//         if(c!==undefined){

//             return a+b+c;
//         }
//        return a+b;
//     }
// }
// let op=new Operation();

// console.log(op.add(10,20));
// console.log(op.add(10,20,30));
//====================================================================================

// class Test{

//     m1(a:number,b:string):void;
//     m1(a:number,b:number):void;
//     m1(a:String,b:string):void;

//     m1(a:any,b:any):void{
         
//         if(typeof a=="number" && typeof b=="string"){

//             console.log("a: "+a);
//             console.log("b: "+b);        

//             }
//             if(typeof a=="number" && typeof b=="number"){

//                 console.log("Sum of 2 number: "+(a+b));
//             }
//             if(typeof a=="string" && typeof b=="string"){

//                 console.log(a);
//                 console.log(b);
                
                

//             }    
//         }
// }
// let t=new Test();
// //t.m1(10,"Vikram");
// //t.m1(20,30);
// t.m1("Vikram","bhoite");
//======================================================================================

//3.Function Overloading:

// function show(value: string): void;
// function show(value: number): void;

// function show(value: any): void {
//     console.log(value);
// }
// show("Vikram bhoite");
// show(30);
//===================================================================================

// function add(a:number,b:number):number;
// function add(a:string,b:string):string;

// function add(a:any,b:any):any
// {
//     if(typeof a=="number" && typeof b=="number"){

//         console.log("Sum of 2 number: ",(a+b));   
//     }
//     if(typeof a=="string" && typeof b=="string"){

//         console.log(a,b);
        

//     }


// }
// add(20,40);
// add("Vikram","bhoite");