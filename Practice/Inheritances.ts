//Inheritance is nothing but child class inherit all properties and methods of parent class.
//Inheritance is achieved by using extends keywords.
//Types of Inheritance:
//1.single  inheritance
//2.multi-level inheritance
//3.multiple inheritance
//4.Hybrid Inheritance
//Hierarchical inheritance

// class Test{
//      a:number=30;
//      city:string="Pune";

//      m1(){
//         console.log("m1 method runned");
        
//      };
//      m2(){
//         console.log("m2 method runned");
        
//      };
// };
// class Test1 extends Test{

//     m3(){
//              super.m1();
//             console.log("m3 method runned");
//             console.log(this.a);
            
            
//     }
//     m4(){
        
//         console.log("m4 method runned");
//         console.log(this.city);
//         super.m2();
        
        
//     };
// };

// let t= new Test1();
// t.m3();
// t.m4();

//==============================================================================

//Multi-level Inheritance:

// class Demo1{

//     m1(){
//         console.log("Demo1 class - m1 method");
        
//     };
//     m2(){
//         console.log("Demo1 class - m2 method");
        
//     };
// };

// class Demo2 extends Demo1{

//     m3(){
//         console.log("Demo2 class - m3 method");
        
//     };
//     m4(){
//         console.log("Demo2 class - m4 method");
        
//     };
// };

// class Demo3 extends Demo2 {
//     m5(){
//         console.log("Demo3 class - m5 method");
        
//     };
// };

// let d= new Demo3();
// d.m1();
// d.m2();
// d.m3();
// d.m4();
// d.m5();
//========================================================================

//Hierarchical inheritance:

// class Animal{

//     Run(){
//         console.log("They are runned");
        
//     };
//     Eat(){
//         console.log("They are eats");
        
//     };
// };

// class Dog extends Animal{

//     action(){
//         console.log("Dogs are brakes");
        
//     };
// };

// class Cat extends Animal{

//     action(){
//         console.log("Cat are mauu..");
        
//     }
// }

// let d= new Dog();
// d.Eat();
// d.Run();
// d.action();

// let c= new Cat();
// c.action();
// c.Eat();
// c.Run();
//=========================================================================

// class Test{

//     constructor(a:number){
//         console.log("Parent constructor runned");
        
//     };
// };

// class Test1 extends Test{
//     constructor(){
        
//         console.log("Child constructor runned");
//         super(30);
        
//     }
// }

// let t= new Test1();


