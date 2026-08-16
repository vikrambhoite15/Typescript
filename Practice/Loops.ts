
//print 1 to 10 no using for loop.

// for(let i=1;i<=10;i++){

//     console.log(i);
    
// }
//=========================================================================
//Print 1 to 10 reverse order.

// for(let i=10;i>=1;i--){
//  console.log(i); 
// };
//============================================================================

//Print 1 to 20 even no.
//1.without if condition

// for(let i=2;i<=20;i+=2){
// console.log(i);

// }
//2.with if condition
// for(let i=1;i<=20;i++){
//     if(i%2!=0){
//         console.log(i);
        
//     }
// }
//=========================================================================
//print 1to 10 no using while loop.

// let i=1;

// while(i<=10){
// console.log(i);
// i++;
// };
//===================================================================
//print 1 to 10 no reverse using while loop.

// let i=10;

// while(i!=0){
// console.log(i);
// i--;
// };
//====================================================================
// print 1 to 10 even no using while loop.

// let i=2;
// while(i<=10){
//     console.log(i);
//     i+=2;
    
// }
//===================================================================
// print 1 to 10 odd no using while loop.

// let i=1;
// while(i<=10){
// console.log(i);
// i+=2;
// }
//==================================================================
//Reverse the digit of following no;
// let no=12345;
// let rem;
// let rev=0;
// while(no!=0){

//     rem=no%10;
//     rev=rev*10+rem;
//     no=Math.floor(no/10);
    
// }
// console.log(rev);
//============================================================================
//write a program to find out count no. of digit of user given number.

let i=12313123232456;
let count=0;
while(i!=0){
i=Math.floor(i/10);
count++;
};
console.log(count);



