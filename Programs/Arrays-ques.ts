//1.Print all Array Elements.

//let n:number[]=[10,20,30,40,50,60];

// for(const a of n){
//     console.log(a);
 
// }
//==============================================================

//2.Find the sum of array elements.

//    let n:number[]=[10,20,30,40,50,60];
//    let sum:number=0;
//    for(let a of n){

//     sum+=a;

//    }
//    console.log("Sum of array elements:"+sum);
//===================================================================================

//3.find largest no in array.

// let n:number[]=[12,45,7,89,23];

// let largest:number=n[0];
// for(const num of n){

//     if(num> largest){

//         largest=num;

//     }
// }
// console.log("Largest Element:"+largest);   
//==================================================================================

//4. find smallest no in array.

// let n:number[]=[12,45,7,89,23];
// let smallest:number=n[0];

// for(const num of n){
//     if(num< smallest){
//         smallest=num;
//     }
// }
// console.log(n);
// console.log("Smallest number:"+smallest);
//============================================================================

//5.Count Total Elements in Array.

// let no:number[]=[1,2,3,4,5,6];
// console.log(no.length);
//=============================================================================

//6.Find Average of Array Elements.

// let no:number[]=[10,20,30,40];
// let sum:number=0;
// let avg:number=0;
// for(const num of no){
//     sum+=num;
    
// }
// avg=sum/no.length;
// console.log("Average of Array elements: "+avg);
//=============================================================================

//7.Print Array in Reverse Order.

   //let no:number[]=[1,2,3,4,5];
//1st way
//    for(let i=no.length-1;i>=0;i--){
//     console.log(no[i]);
    
// }

//2nd by using reverse method.
//console.log(no.reverse());

//3rd print in same line.
// let result="";
// for(let i=no.length-1;i>=0;i--){

//     result+=no[i]+" ";

// }
// console.log(result);
//============================================================================

//8.Find Even Numbers in Array.

// let no:number[]=[11,22,33,44,55,66];

// for(const num of no){
//     if(num%2==0){
//         console.log(num);
    
//     }
// }
//===============================================================================

//9.Find Odd Numbers in Array.

//   let no:number[]=[11,22,33,44,55,66];

//   for(const num of no){
//     if(num%2!=0){
//         console.log(num);
        
//     }
// }
//==========================================================================

//10.Count Even and Odd Numbers.

// let no:number[]=[10,15,20,25,30];
// let countEven:number=0;
// let countOdd:number=0;

// for(const num of no){
//     if(num%2==0){
//         countEven++;

//     }
//     else{
//         countOdd++;
//     }

// }
// console.log("Even Count: "+ countEven);
// console.log("Odd Count: "+ countOdd);
//===============================================================================

//11.Search an Element in Array.

// let no:number[]=[5,10,15,20,25];
// let search:boolean=no.includes(15);

// if(search){
//     console.log("Element Found");
// }
// else{
//     console.log("Element not found");
// }
//=================================================================================

//12.Copy One Array into Another.

   //let no:number[]=[1,2,3,4,5];
   
   //1st way- using for..of method

//    let no1:number[]=[];
//    console.log("Before coppied array: ",no1);
   
//    for(const num of no){
//     no1.push(num);

//    }
//    console.log("Coppied array: ",no1);

//2nd way- using slice method

// let no3:number[]=no.slice();
// console.log(no3);

//3rd way- using array.form() method

//    let no4:number[]= Array.from(no);
//    console.log(no4);
//===============================================================================

//13.Merge Two Arrays.

// let no1:number[]=[1,2,3];
// let no2:number[]=[4,5,6];

//1st way- using concat
//console.log(no1.concat(no2));



//2nd- using for..of loop
// let murgeArray:number[]=[];

// for(let value of no1){
//     murgeArray.push(value);

// }
// for(let value of no2){
//     murgeArray.push(value);

// }
// console.log("Murged Arrays: ", murgeArray);
//==============================================================================

//14.Find Duplicate Elements.
 
   //  let no:number[]=[1,2,3,2,5,1,5];

   //  console.log("Duplicate Elements:");
    
   //  for(let i=0;i<no.length;i++){
   //    for(let j=i+1;j<no.length;j++){
   //       if(no[i]==no[j]){

   //          console.log(no[i]);
            
   //       }

   //    }

   //  }

//15.Remove Duplicate Elements.

   // let no:number[]=[1,2,2,3,4,4,5];

   // let unique:number[]=[...new Set(no)];

   // console.log(unique);
//===================================================================================

  //16.Sort Array in Ascending Order.

   // let no:number[]=[50,10,40,20,30,60];

   // no.sort();
   //   console.log(no);
     
   // for(let num of no){

   //    console.log(num);
   // }

//====================================================================================

//17.Sort Array in Descending Order.

// let no:number[]=[50,10,40,20,30,60];

// no.sort().reverse();
// console.log(no);

// for(let num of no){
   
//    console.log(num);
// }
//===================================================================================




 



  







   


