/* Interfaces:
   - Interface is blue print of class, can contains only abstract method.
   - When we have to achieve 100% abstraction then we have to use interface.
   - We can't declared concreate method in interfece.
   - We can't create an oject of interface.
   - We can't create a constructor of interface.
   - We can declared properties in interface.  */

// interface Test{

//     m1():void;
//     m2():void;
//     m3():void;
// }

// class implementClass implements Test{
//     m1(): void {
//         console.log("m1 method runned");    
//     }
//     m2(): void {
//         console.log("m2 method runned");   
//     }
//     m3(): void {
//         console.log("m3 method runned");   
//     }
// }
// let im=new implementClass();
// im.m1();
// im.m2();
// im.m3();
//=====================================================================================
// We can declared properties in interface.

// interface Test1{

//     name:string;
//     id:number;

//      empinfo():void;
// }

// let t:Test1={
//     name: 'David',
//     id: 101,
//     empinfo(): void {
//         console.log(this.name,this.id);
        
//     }
// }
// t.empinfo();
// console.log(t.name);
// console.log(t.id);
//====================================================================================

//- We can achieve multiple inheritance with help of interface.
//- Implementing class implements more one interface at a time.

// interface demo{

//     add(a:number,b:number):void;
// }
// interface demo1{
//     multiply(a:number,b:number):void;
    
// }

// class operation implements demo,demo1{
    
//     multiply(a: number, b: number): void {
//         console.log("Multiplication:",a*b);
        
//     }
//     add(a: number, b: number): void {
//         console.log("Sum: ",a+b);       
//     }

// }
// let op=new operation();
// op.add(10,20);
// op.multiply(10,20);
//====================================================================================

// interface Employee{
//    id:number;
//    name:string;

//    display():void;
// }
// class developer implements Employee{
//    id: number;
//    name: string;

//    constructor(id:number,name:string){
//       this.id=id;
//       this.name=name;
//    }
//    display(): void {
//       console.log("Id: ",this.id);
//       console.log("Name: ",this.name);     
//    }
// }
// let d=new developer(101,"Rahul");
// d.display();
//===================================================================================
// iterface with function:

// interface Add{
//    (a:number, b:number):number;
// }

// let sum:Add= (a,b):number => a+b;

// console.log(sum(10,20));
//=====================================================================================

// interface Greet{
//    (name:string):void;
// }

// let greet:Greet=(name) => console.log("Hello "+name);

// greet("Rahul");
//==================================================================================
//If both interfaces have the same property name and the same type, the class needs only one property.

   // interface Student{
   //    id:number;
   // }
   // interface Employee{
   //    id:number;
   // }
   // class person implements Student,Employee{
      
   //    id:number=101;
   // }
   // let p=new person();
   // console.log(p.id);
   //===============================================================================
   

