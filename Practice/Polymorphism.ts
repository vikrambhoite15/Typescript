//1.Complie-Time Polymorphism:

// class Demo{

//     add(a:number,b:number):void;
//     add(a:number,b:string):void;

//     add(a:any,b:any):any{
//         console.log(a+b);
        
//     }
// }
// let d= new Demo();
// d.add(30,50);
// d.add(50," VIkram")
//=============================================================================
//example-2

// class Demo{

//     add(a:number,b:number):void;
//     add(a:number,b:number,c:number):void;

//     add(a:number,b:number,c?:number):number{
//        return c!=undefined ? a+b+c : a+b;
//     };
// };
// let d= new Demo();
// console.log(d.add(20,50));
// console.log(d.add(20,30,40));
//===========================================================================
//example-3

// class Demo{

//     input(value:string):string;
//     input(value:number):number;

//     input(value: string |number): string | number{

//         return typeof value==="string" ? value.toUpperCase() : value*2;
//     };

// };
// let d= new Demo();
// console.log(d.input("VIKRam"));
// console.log(d.input(34));
//============================================================================
//example-4

// class Test{

//     m1(a:number,b:string):void;
//     m1(a:number,b:number):void;
//     m1(a:string,b:string):void;

//     m1(a:any, b:any){

//         if(typeof a==="number" && typeof b==="string"){
//             console.log("a:",a);
//             console.log("b:",b); 
//         };
//         if(typeof a==="number" && typeof b==="number"){
//             console.log("Addition:", a+b);
            
//         };
//         if(typeof a==="string" && typeof b==="string"){

//             console.log(a,b);
            
//         }
//     }
// }

// const t= new Test();
// t.m1(20,"Welcome");
// t.m1(30,50);
// t.m1("Vikram", "Bhoite");
//===============================================================================

//Run-Time Polymorphism:
//we achieve run-time ploymorphism using method overriding.
//Rules:
//1.To achieve method overriding, IS-A relationship between classes is requried.
//2.method name must be same.
//3. Parameter and return type should be match.

// class Test{

//     constructor(){
//         console.log("Parent constructor");
        
//     };

//     show(){
//         console.log("Welcome to TypeScript");
        
//     };
//     m1(a:number){
//         console.log("Parent M1 method runned");
//     };    
// };

// class Test1 extends Test{

//     constructor(){
//         super();
//         console.log("Child constructor");
        
//     };

//     show(){
//         console.log("Welcome to PlayWright");
        
//     };

//     m1(a:number){
//         console.log("Child m1 method");
        
//     }  
// };

// const t= new Test1();
// t.show();
// t.m1(20);

// // const t1= new Test();
// // t1.show();
//============================================================================
//super();
// class employee{
//     company:string="TCS";
//     EmpId:number=1234;
//     roll:string="QA"

//     m1(){
//         console.log("M1 method runned");
        
//     }
// };

// class display extends employee{
    
//     show(){
//         super.m1();
        
//         console.log("Company:",this.company);
//         console.log("Emp Id:",this.EmpId);
//         console.log("Designation:",this.roll);  
//     }
// }

// let e= new display();
// e.show();
//=========================================================================

