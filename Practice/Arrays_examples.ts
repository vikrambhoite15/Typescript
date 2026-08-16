// let languages:string[]=[];
// languages[0]="Java";
// languages[1]="Python";
// languages[2]="TypeScript";
// languages[3]="C++";
// console.log(languages);

// let a:number[]=[10,20,30,40,50];
// console.log(a);
// console.log(a[1]);
// console.log(a[2]);

//for in loop- used to itrate object keys or array indexes.

// let lan:string[]=['Java','Python','TypeScript','C++','Ruby'];

// for(const s in lan){
// console.log(s);

// }

//for Each():

// let lan:string[]=['Java','Python','TypeScript','C++','Ruby'];

// lan.forEach((s)=>{console.log(s)});

// let no:number[]=[10,20,30,40,50,60];

// no.forEach((s)=>{console.log(s)});
//================================================================================================

//Array Methods:

//1.push(): add element at the end

// let no:number[]=[23,45,23,6,75];
// no.push(60);
// console.log(no);
// no.push(96);
// no.push(500);
// console.log(no);


//pop(): remove the last element.

// let no:number[]=[10,20,30,40,50,60];
// console.log(no);
// no.pop();
// console.log(no);
// no.pop();
// console.log(no);

//shift(): Remove the first element.

// let no:number[]=[10,20,30,40,50,60];
// no.shift();
// no.shift();
// console.log(no);

//unshift(): Add the element to the begaining of array.

// let no:number[]=[10,20,30,40,50,60];
// no.unshift(102);
// console.log(no);
// no.unshift(101);
// console.log(no);

//indexOf(): return the index of first occurence.

// let no:number[]=[10,20,30,40,50,60,30,50];
// console.log(no);

// console.log(no.indexOf(30));
// console.log(no.indexOf(50));

//lastindexOf: return index of last occurence

// let no:number[]=[10,20,30,40,50,60,30,50];
// console.log(no.lastIndexOf(30));
// console.log(no.lastIndexOf(50));

//includes():

// let no:number[]=[10,20,30,40,50,60,30,50];
// console.log(no.includes(30));
// console.log(no.includes(24));
// console.log(no.includes(50));

//concat: it combine the array.
// let a:number[]=[10,20,30];
// let b:number[]=[40,50,60,20];
// console.log(a.concat(b));

//join(): convert array into string

// let s:string[]=['java','python','Typescript'];
// console.log(s.join(","));

//slice:

//let no:number[]=[10,20,30,40,50,60];

//copy one array into another.
// let b:number[]=no.slice();
// console.log(b);

// console.log(no.slice(0,3));
// console.log(no.slice(4,6));
// console.log(no.slice(-3));

//splice:

// let no:number[]=[10,20,30,50,50,60,70];

// console.log(no.splice(1,2));
// //console.log(no);

// no.splice(1,0,20,30);
// console.log(no);

// no.splice(3,3,60,70,80);
// console.log(no);

//reverse(): Print reverse array.

// let no=[10,20,30,40,50];
// console.log(no.reverse());

//================================================================================================
//Programs:

//1.Print all Array Elements.

// let value=["Java", "Python","Typescript","C++","Ruby"];

// for(const n of value){

//     console.log(n);
    
// }
//======================================================================================
//2.Find the sum of array elements.

// let no=[10,20,30,40];
// let sum=0;

// for(const n of no){

//     sum+=n;
// };
// console.log("Sum of array Elements:",sum);
//===================================================================================
//3.find largest no in array.

// let n:number[]=[34,56,77,43,21,3,100];
// let largest:number=n[0];

// for(const no of n){

//     if(no> largest){

//     largest=no;
//     }
// }
// console.log("Largest no in array:",largest);
//========================================================================================
//find smallest no in array.

// let n:number[]=[34,56,77,43,21,3,100];
// let smallest=n[0];

// for(const no of n){

//     if(no < smallest){

//         smallest=no;
//     };
// };
// console.log("Smallest no in array:",smallest);
//====================================================================================
//Count Total Elements in Array.

// let n:number[]=[34,56,77,43,21,3,100];
// let count=0;

// for(const no of n){
//     count++;
// }
// console.log("Count of element in Array",count);
//======================================================================================
//Find Average of Array Elements.

// let no:number[]=[10,20,30,40];

// let sum=0;
// let avg=0;
// for(const num of no){
// sum+=num;
// }
// avg=sum/no.length;
// console.log("Avg of Array element:",avg);
//=====================================================================================
//Print Array in Reverse Order.

//  let n:number[]=[34,56,77,43,21,3,100];
// let rev:string="";
// for(const no of n.reverse()){
//    console.log(no);
//    rev+=no+" "
   
// }
// console.log(rev);

//==================================================================================
//Find even no in array.

// let n:number[]=[34,56,77,43,21,3,100,23];

// for(const no of n){

//     if(no%2==0){

//         console.log(no);   
//     };
// }
//=======================================================================================
