
//let no:number[]=[23,45,67,10,59,30,67,30];

//1.length method
//console.log(no.length);

// for(let i=0;i<=no.length-1;i++){
//     console.log(no[i]);
// }
//======================================================================================
//2.push()- Add element at the end.
//   no.push(90);
//   console.log(no);
//=====================================================================================
//3.pop() method- Remove the last element.
//    no.pop();
//    console.log(no);
 //===================================================================================
//4.shift() - Remove the first element.
//   no.shift();
//   console.log(no);
 //=================================================================================== 
//5.unshift() - Add elements to the beginning of array.
//    no.unshift(89);
//    no.unshift(92);
//    console.log(no);
//=====================================================================================
//6.indexof - It return the index of first occurence
//   console.log(no.indexOf(30));
//====================================================================================
//7.lastIndexOf() - It return the index of last occurence.
// console.log(a.lastIndexOf(67));
//====================================================================================
//8.includes() - It check the element exist or not.it always return boolean result.
//   console.log(no.includes(103));
 //================================================================================== 
//9.concat - it combines array.
//    let n1:number[]=[10,20,30,40];
//    let n2:number[]=[50,60,70];
//    console.log(n1.concat(n2));
//====================================================================================
//10.join() - Convert an array to a string.
// let no2:number[]=[23,45,67,10,59,30,67,30];
// console.log(no2.join(","));
//====================================================================================
/* 11.slice() method:
   -Extract a section of an array.
   -Starting index starts from zero.
   -Ending index will be exclussive.means if 3 is ending index it will consider 2.(3-1=2)
   -syntax: array.slice(start,end)    */

// let a:number[]=[10,20,30,40,50,60,70];

// let b:number[]=a.slice(); //copy one array into another array.
// console.log(b);

// console.log(a.slice(1,2));
// console.log(a.slice(2,6));
// console.log(a.slice(-1));
//===================================================================================

//12. splice()- add/removes elements from an array(from everywhere).
//    syntax: array.splice(start,deleteCount,addItem1...itemN).

//ex-1
// let days:String[]=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
     
// console.log(days.splice(1,2)); // here 1 is starting index, 2 is represent to many elements to be removed and they print removed elements.
// console.log(days);

// //ex-2
// days.splice(1,0,'Tue','wed'); //not removed but added
// console.log(days);

// //ex-3
// days.splice(2,2,'wednsday','Thursday'); // both remove and add.
//console.log(days);
//=====================================================================================

/* -Diff between slice and splice:
    
        slice                        |             splice
   -Does not modify original array.  |    -Modifies original array.
   -Used to extract elements.        |    -Used to add/remove elements.
   -Returns new array.               |    -Returns remove elements            */
//=======================================================================================

//13.reverse(): Print reverse array.
//  let a:number[]=[10,20,30,40,50,60];
//  a.reverse();
//  console.log(a);
//======================================================================================= 
  
