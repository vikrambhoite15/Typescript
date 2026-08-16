
// abstract class Test{

//     fname:string;
//     lname:string;

//     abstract m1():void;
//     abstract m2(a:number):void;
//     abstract m3():void;

//     constructor(fname:string,lname:string){

//         this.fname=fname;
//         this.lname=lname;
//     }
//     show(){
//         console.log(this.fname,this.lname);
        
//     };
// };

// class Test1 extends Test{
//     m3(): void {
//         console.log("m3 method runned");
        
//     }
//     m1(): void {
//         console.log("m1 method-");
        
//     }

//     m2(a: number): void {
//         console.log(a);
//         console.log("m2 method runned");   
//     }

// }
// const t= new Test1("Vikram","Bhoite");
// t.m1();
// t.m2(30);
// t.show();
// t.m3();
//===========================================================================================

//Interface:

// interface person{
//     name:string;
//     age:number;

//     empInfo():void;
// };

// const student:person={
//     name:"Vikram Bhoite",
//     age:34,

//     empInfo():void{
//         console.log(this.name);
//         console.log(this.age); 
//     }
// }
// student.empInfo();
// console.log(student.name);
//=========================================================================================
//Example-2 Optional Properties.

// interface employee{
//     id:number;
//     name:string;
//     department?:string;
// };

// const e:employee={
//     id:1212,
//     name:"David Marcs",
// };
// console.log(e.id);
// console.log(e.name);
//==================================================================================

// interface demo{

//      m1():void;
//      m2():void;
//      m3():void;
// };

// class Test implements demo{
//     m1(): void {
//         console.log("M1 method runned");
        
//     }
//     m2(): void {
//         console.log("M2 method runned");
        
//     }
//     m3(): void {
//         console.log("M3 method runned");
        
//     }
// };

// const t= new Test();
// t.m1();
// t.m2();
// t.m3();
//===============================================================================================

// interface test{
//     m1():void;

// };

// interface test1{
//     m2():void;
// };

// class Test2 implements test,test1{
//     m1(): void {
//         console.log("M1 method");        
//     };
//     m2(): void {
//         console.log("M2 method"); 
//     };
//     m3():void{
//        console.log("M3 method"); 
//     }
// };

// let t1= new Test2();
// t1.m1();
// t1.m2();
// t1.m3();
//=========================================================================================

//Interface with function

// interface add{
//     (a:number,b:number):number;
// };

// const sum:add=function(x,y){
//     return x+y;
// };
// console.log(sum(20,50));
//===================================================================================

// interface multiply{

//     (x:number,y:number):number;
// };

// const mul:multiply= (x,y)=> x*y;
// console.log(mul(20,39));



