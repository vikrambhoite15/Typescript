// class Employees {

//     EmpName: string;
//     EmpId: number;
//     location: string;

//     constructor(EmpName: string, EmpId: number, location: string) {
//         this.EmpName = EmpName;
//         this.EmpId = EmpId;
//         this.location = location;

//     };
//     displayInfo() {
//         console.log("Employee Name:", this.EmpName);
//         console.log("Employee Id:", this.EmpId);
//         console.log("Location:", this.location);
//     };
// };
// let e= new Employees("David",1234,"Mumbai");
// e.displayInfo();
// console.log("===================================");


// let e1=new Employees("Vikram Bhoite",34567,"Pune");
// e1.displayInfo();
// console.log("===================================");

// let e2=new Employees("Viraj Jagtap",34567,"Chennai");
// e2.displayInfo();
//============================================================================

// class Info{


//     constructor(){
//         console.log("Welcome to TypeScript>>");
//         this.greet();
//     }
//     greet(){
//         console.log("Thanks");
        
//     }
// }
// let i= new Info();
//==============================================================================
//static keywords:
//static keyword used for memory managment.
//static keyword belongs to class not instances.
//we can accessed static members through class name.

// class Demo{

//     static Pi=3.14;

//     static square(no:number):number{
//         return no*no;

//     }
   
// }
// console.log(Demo.Pi);
// console.log(Demo.square(12));
//============================================================

// class test{

//     static a:number;
//     static b:number;

//     static add(){
//         console.log(test.a+this.b);
        
//     };
//     static{
//         test.a=30;
//         test.b=40;
//     }
// }
// test.add();
//======================================================================

// class Demo{
//     name:string="Vikram";
//     print(){
//         let name:string="Rahul";
//         console.log(name);
//         console.log(this.name);
        
        
//     }
// }
// let d= new Demo();
// d.print();


