
// let no:number=50;
// let no1:number=80;

// //1.Addition
// let add:number=no+no1;
// console.log("Addition- "+add); 

// //2. Substraction
// let sub:number=no1-no;
// console.log("Subtraction- "+sub); 

// //3. Multiply
// let mul:number=no*no1;
// console.log("Multiplication- "+ mul); 

// //4.Division
// let div:number=no1/no;
// console.log("Division- "+div); 

// //5.modulus
// let mod:number=no1%no;
// console.log("Modulus- "+mod);

//6.increment
// let a=10;
// let b=a++;
// console.log(a);  
// console.log(b); 
// console.log(a); 

//7. Decrement
// let x:number=10;
// let y:number=x--;
// console.log(x); //9
// console.log(y); //10
// console.log(x); //9

// //8.exponentiation
// let p:number=4;
// let q:number=4;
// let r:number=p**q;
// console.log(r);

//9.not equal & strict not equal.

// let s1:string="Vikram";
// let s2:string="Vikram";

/*Diffrerence between equal(==) and strict equal(===) operators:

  -equal(==)operator: 
  -It compares only the values.if the operands have different data type
  -typescript performs automatic type conversion before comparison.

  -strict(===)operators:
  -It compares both the values and their data types.
  -No automatic type conversion performed,making it safer and more predictable. */

// console.log(s1 !=s2);
// console.log(s1 !==s2);


//10. Ternary operator

// let no:number=14;
// let even= no%2==0 ? "Given Number is Even no" : "Given number is Odd no";
// console.log(even);

// let n:number=40;
// let n1:number=60;
// let max:string= n>n1 ? "n is greater number" : "n1 is greater number";
// console.log(max);

//Type operator
//1.Typeof - it return datatype of variables.

// let a=500;
// let b="vikram";
// let c;
// let d=null;
// let e=true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// Nullish coalescing operator(??)

// let username=null;
// let result= username ?? 'Guest';
// console.log(result);

// let a;
// let b=a ?? typeof a;
// console.log(b);

// Optional chaining operator(?)

// function student(fname?:string) {
//     console.log(fname);
//     console.log("Welcome");
    
// }
// student();













