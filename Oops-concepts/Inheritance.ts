// class Cars {
    
//     start(){
//         console.log("car starting");
//     }
//     stop(){
//         console.log("car stopped");
        
//     }
// }

// class Tata extends Cars{
    
//     name(){
//         console.log("TATA PUNCH");
//     }
//     avg(){
//         console.log("30 kmph");
        
//     }
// }
// let t=new Tata();
// //  t.start();
// //  t.stop();
// //  t.name();
// //  t.avg();

// class Honda extends Cars{
//     name(){
//         console.log("HONDA-CITY");    
//     }
// }
// let h=new Honda();
// h.start();
// h.stop();
// h.name();
//===========================================================================================

// class values{

//    protected a:number;
//    protected b:number;
//    protected c:number;

//     constructor(a:number,b:number,c:number){

//         this.a=a;
//         this.b=b;
//         this.c=c;

//     }
// }

// class Operation extends values{

//     protected add(){
//         let add=this.a + this.b + this.c;
//         console.log("Addition: "+add);
        
//     }

//     substract(){
//         let sub=this.a- this.b -this.c;
//         console.log("Substraction: "+sub);
        
//     }
//     multiply(){
//         let mul=this.a*this.b*this.c;
//         console.log("Multiplication: "+mul);
        
//     }
// }

// class Print extends Operation{

//     printAddition(){
//         super.add();
//     }
//     printSubstraction(){
//         super.substract();
//     }
//     printMultiply(){
//         super.multiply();
//     }

// }
// let p=new Print(20,30,40);
// p.printAddition();
// p.printSubstraction();
// p.printMultiply();
