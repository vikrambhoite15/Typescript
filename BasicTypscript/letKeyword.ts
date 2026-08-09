
/*let Keyword
let variables are block-scoped.

//1. Variables declared- with the 'let' keyword can be changed during the program.*/

// let a:number=30;
// a=60;
// a=900;
// console.log(a);

//2. let keyword has block scope.
// function demo() {
    
//     if(true){
//         let s:String="WELCOME TO VISUAL STUDIO";
//         console.log(s);
//     }
// }
// demo();

//3. let keyword variable we can't redeclared.

// let name2="VIkram";
// let name2="Bhoite";

//4. Hoisting -Hoisting is possible we will get error.
// console.log(msg);
// let msg:string="WELCOME";

//const keyword
// const keyword is used to declared a variable value whose value can't reassigned after intialization.
//1.scope is block only
// function display() {  
//     if (true) {
//         const message = "Hello";
//         console.log(message);
//     }

// }
// display();


//2. can't Redeclared
// const pincode : number = 411222;
// pincode = 123456;

// console.log(pincode);

//3. can't reassigned
// const name5 : string = "Shanta";
// const name5 : string = "Kamini";

//4. Hoised
// console.log(college);
// const college : string = "MIT";