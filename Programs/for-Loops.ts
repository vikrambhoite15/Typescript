//1. Print 1 to 10 number using for loop.

// for(let i=1;i<=10;i++){

//     console.log(i);
// }
"********************************************************************"
//2. Print 1 to 10 in reverse order.
// for(let i=10;i>=1;i--){

//     console.log(i);

// }
"********************************************************************"
//3.Print 1 to 20 even number.

//1.withuot if condition
//  for(let i=2;i<=20;i+=2){

//      console.log(i);
//     }

//2.with if condition

//  for(let i=1;i<=20;i++){
//      if(i%2==0){
//          console.log(i);
      
//      }
// }
"********************************************************************"
//4.print 5th number table.

// let n:number=5;

// for(let i=1;i<=10;i++){

//     let mul=n*i;
//     console.log(n+"x"+i+"= "+mul);
    
// }
"*********************************************************************"
//5. Print 1 to 10 number squares.

//  for(let i=1;i<=10;i++){

//      let sq=i**2;
//      console.log(i+"^2= "+sq);
//      }
"*******************************************************************"
//6.Write a program to find the factorial value of any number.

// let no:number=5;
// let fact:number=1;
// for(let i=1;i<=no;i++){
    
//     fact=fact*i;

// }
// console.log("Factorial value-"+fact);
"**********************************************************************"

//7.write a Program to Print Fibonacci Series.

//  let a:number=0;
//  let b:number=1;
//  let c:number;

//  for(let i:number=1;i<=10;i++){
//      c=a+b;
//       console.log(c);
 
//      a=b;
//      b=c;

//  }

"====================================================================================="

//8.Write a program to print all odd numbers between 1 to 20.
//1.using if condition.

//  for(let i=1;i<=20;i++){
//      if(i%2!=0){
//          console.log(i);
        
//      }

//  }
//2.without if condition.

//  for(let i=1;i<=20;i+=2){

//      console.log(i);
 
//  }
"===================================================================================="
//9. write a program to print sum of number 1 to 5.

//  let sum:number=0;
//  for(let i=1;i<=5;i++){
//      sum=sum+i;

//  }
//  console.log("Sum of 1 to 5 no : "+sum);

"========================================================================"
//10. print prime no between 1  to 20.
//prime no:- A number greater than 1 and is divisible only 1 and itself.

//   for(let i=2;i<=20;i++){
//       let isprime=true;
//       for(let j=2;j<i;j++){
//           if(i%j==0){
//              isprime=false;
//             break;
//         }
//      }
//     if(isprime){        
//          console.log(i);
//              }
// }
"================================================================================"
 //11.Write a program to print reverse tables of 5.

//  let no=5;
//  let mul;
//  for(let i=10;i>=1;i--){
//     mul=no*i;
//     console.log(no+"x"+i+"= "+mul);
    

//  }
"======================================================================================="
//12.Write a program to find sum of all even numbers between 1 to 10.

//  let Even:number=0;
//  let Odd:number=0;
//  for(let i=1;i<=10;i++){
//      if(i%2==0){
        
//          Even=Even+i;

//      }
//      else{
//         Odd=Odd+i;

//      }
// }
//  console.log("Sum of Even numbers: "+Even);
//  console.log("Sum of Odd numbers: "+Odd);
"======================================================================================="
//13.write a program to swap the given two numbers.

// let a:number=20;
// let b:number=30;
// console.log("a="+a+" b="+b);
// console.log("===swap===");


// let c:number=a+b;
// a=c-a;//30
// b=c-b;//20
// console.log("a="+a+" b="+b);
"======================================================================================"
// //13.Swap two numbers without using third variable

// let a:number=10; //20
// let b:number=20; //10

// b=b-a; 
// a=b+a 
// console.log("a: "+a,"b: "+b) ;
//=======================================================================================

//14. To check if a number is even or odd using function.

//    function checkEvenOdd(num:number):string{

//     return num%2==0 ? "Even" : "Odd"

//    }
//    console.log(checkEvenOdd(94));
//=====================================================================================
//15. Program to find the largest of three numbers.
    
    //  function largestNo(a:number,b:number,c:number):number{

    //     if(a> b && a>c) return a;
    //     else if(b>a && b>c) return b;
    //     else return c;

    //  }
    //  console.log(largestNo(50,90,10));
//===================================================================================
//16.program to count vowels in string.
    
    // function countVowel(str:string):number{

    //     const vowel="aeiouAEIOU";
    //     let count=0;
    //      for(let ch of str){
    //         if(vowel.includes(ch))
    //             count++;
    //     }
    //         return count;

    // }
    // console.log(countVowel("Vikram"));
//===================================================================================
//
    
     
   
