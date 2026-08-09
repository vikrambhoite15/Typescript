/*Generics:
  -Generics in TypeScript allow us to write reusable, type-safe functions, classes, interfaces, and type by using type parameters.
  -They help create flexible code that works with different data types while preserving compile-time type checking 
   and avoiding the use of 'any'.
  -In Genrics we use type parameter(placeholder) instead of specific data type.
  -Type parameter is usually represented by letter like 'T,U,K, or V'.

> Why do we use Generics:
 1. Code reusability -  One function or class works with multiple data types.
 2. Type safety - TypeScript checks types at compile time.
 3. Better readability - Eliminates the need for any.
 */

 //without Generics:
   
    // function display(value:any):any{

    //     return value;
    // }
    // console.log(display(10));
    // console.log(display("Hello"));

    //here is problem, using any disables type checking.

//With Generics:
  
//    function display<T>(value:T):T{

//     return value;
//    }
//    console.log(display<number>(100));
//    console.log(display<string>("hello"));

   //T is a Type parameter.
   //If T is 'number', the function accepts and returns a number.
   //If T is 'string', the function accepts and returns a string.

//Ex:2

//    function getdata<T>(data:T):T{
//     return data;
//    }
//    let num=getdata<number>(100);
//    let str=getdata<string>("Welcome");

//    console.log(num);
//    console.log(str);

//Generics with class:

// class Box<T>{
//     value:T;

//     constructor(value:T){
//         this.value=value;
//     }
//     diplay():void{
//         console.log(this.value);
//     }
// }
// let box1=new Box<number>(200);
// box1.diplay();

// let box2=new Box<string>("Hello");
// box2.diplay();

// let box3=new Box<boolean>(true);
// box3.diplay();
   
//Generics with interface

//   interface Student<T>{
//     id:number;
//     data:T;
//   }

// let s1:Student<string> ={
//     id:1,
//     data:"Vikram"
// };
   
// console.log(s1);

//Generics with multiple types

//    function pair<K,V>(key:K,value:V):void{

//     console.log(key,value);   

//    }
//    pair<number,string>(101,"Laptop");
//    pair<string,boolean>("Available",true);

//Generic Constraints:

//    function multiply<T extends number>(a:T,b:T){
//     console.log(a*b);   
//    }
//    multiply<number>(20,40);



    