//1.string concatnation:

//let fname:string="Rahul";
//let lname:string="Chavan";
// console.log(fname+lname);
//console.log(`${fname} ${lname}`);

//2.length: it return length of string.
// let name12:string="Vijay Patil";
// console.log(name12.length);

//3.toUpperCase(): to convert into upper Case.
// let fname="Vikram";
// console.log(fname.toUpperCase());

//4.toLowerCase: to convert into lower case.
// let fname:string='ViKRAm';
// console.log(fname.toLowerCase());

//5.charAt(): return the character at specified index.
//index start with 0.
// let lname:string="Bhoite";
// console.log(lname.charAt(3));
// console.log(lname.charAt(5));

//6.indexOf():return first occurrence position.
// it is case sensitive
// let city:string="Mumbai";
// console.log(city.indexOf('b'));

//7.lastIndexOf(): return last occurrence position.
// let city:string="mumbai";
// console.log(city.lastIndexOf('i'));

//8.includes(): check whether string contain a value.
//  let name2:string="Vikram bhoite";
//  console.log(name2.includes('bhoite'));
//  console.log(name2.includes("kr"));
//  console.log(name2.includes("k"));

//9.startWith(): Check begining of string.
 //let lname:string="chavan";
//  console.log(lname.startsWith("c"));
//  console.log(lname.startsWith("n"));
//  console.log(lname.startsWith("ch"));
//  console.log(lname.startsWith("ca"));
 
 //10.endWith: Check ending of string.
//  console.log(lname.endsWith("n"));
//  console.log(lname.endsWith("N"));
//  console.log(lname.endsWith("an"));
//  console.log(lname.endsWith("vn"));

//11.replace():
// let fname:string="Suraj";
// console.log(fname.replace("Suraj","Ajay"));
// console.log(fname.replace("aj","##"));
// console.log(fname.replace("S","$"));

//12.replaceAll(): Replace all matching values.
// let str:string="Java Typescript c++ Java";
// console.log(str.replaceAll("Java","x"));
// console.log(str.replaceAll("a","@"));

//13.substring: extract part of string.
// let greet:string="welcome to Typescript.";
// console.log(greet.substring(0,7));
// console.log(greet.substring(8));
// console.log(greet.substring(6,17));
//console.log(greet.substring(-2)); // not support negative index.


//14.slice(): Extract the portion of string.
// let st:string="VisualStudio";
// console.log(st.slice(4,8));
// console.log(st.slice(0,6));
// console.log(st.slice(-2));  //support negative index.

// let st1:string=st.slice();  //copy one string into another string.
// console.log(st1);

//The main differences are that slice() supports negative indexes, while substring() does not.
//Also, if the start index is greater than the end index, slice() returns an empty string, 
//whereas substring() automatically swaps the indexes and returns the extracted substring.

//15.split(): converts string into array.

//  let str:string="vijay,vikram,ajay,Mohan";
//  console.log(str);
//  let arr=str.split(",");
//  console.log(arr);

//16.trim(): Remove spaces from both ends
// let a:string=" Vikram  ";
// console.log(a.trim());

 

 









 
 
 
 
 
 
 
 
 
 









