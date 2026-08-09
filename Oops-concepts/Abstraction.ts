/*Abstraction:
  - Abstraction is a process of hiding internal implementation and showing only essential
    features to user.

  - We achieve abstraction:
    1. Using abstract class.(0 to 100%)
    2. Using Interface. (100%)  
  
1. Abstract class:
   - When we declared any class with abstract keyword that class known as abstract class.
   - We can achieve 0 to 100% abstraction using abstract class.
   - We achieve the abstraction with the help of abstract method.
   - When we declared any method with abstract keyword that method known as abstract method.
   - Absrtact method mean those method doesn't have implemantation body.
   - Absract class can also contain concreate method, static method & constructor.
   - We can't create object of absract class.    */

// abstract class Test{

//     name:string="David Jonh";
//     a:number;
//     b:number;


//     constructor(a:number,b:number){
//         this.a=a;
//         this.b=b;
//         console.log(a);
//         console.log(b);   
//     }
//      //abstract method
//     abstract m1():void;
//     abstract m2(a:number):void;

//     public greet():void{
//         console.log("Welcome to Typescript");
//         console.log(this.name);    
//     }
// }
// class main extends Test{
//     m1(): void {
//         console.log("m1-absract method runned",this.name);
        
//     }
//     m2(a: number): void {
//        console.log("m2-abstract method runned");
       
//     }    
// }
// let im=new main(40,50);
// im.m1();
// im.m2(30);
// im.greet();
