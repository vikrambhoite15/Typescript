//1. string concatination

// let fname:string="Vikram";
// let lname:string="Bhoite";

// console.log(fname+" "+lname);
// console.log(`${fname} ${lname}`);

//2.length: it return lenght of string

// let s:string="VikramBhoite";
// let len=s.length;
// console.log(len);

//3.toUpperCase:to convert uppercase string.

// let s:string="vikram Bhoite";
// console.log(s.toUpperCase());

// //4.toLowerCase():
// console.log(s.toLowerCase());

//5.charAt(): return character at specific index.

// let s: string = 'Edso services';
// //console.log(s.charAt(3));

// for (let i = 0; i <= s.length; i++) {

//     console.log(s.charAt(i));
// };


//6.indexOf(): return first occurence position.
 
// let s:string='Edso services';

//  console.log(s.indexOf("s"));
//  console.log(s.indexOf("e"));
//  console.log(s.indexOf("E"));

//7.lastIndexOf(): return the last occurence position.

//  let s:string='Edso servEices';

//  console.log(s.lastIndexOf("e"));
//  console.log(s.lastIndexOf("s"));
//  console.log(s.lastIndexOf("E"));
 
 //8. include():

//  let s:string='Edso servEices';

//  console.log(s.includes("Edso"));
//  console.log(s.includes("ser"));
//  console.log(s.includes("v"));

//9.startwith(): checking begaining of string.

// let s:string='Edso servEices';

// console.log(s.startsWith("E"));
// console.log(s.startsWith("ser"));
// console.log(s.startsWith("Eds"));

//10.endWith(): check ending string

// let s:string='Edso servEices';

// console.log(s.endsWith("s"));
// console.log(s.endsWith("ser"));
// console.log(s.endsWith("ces"));

//11.replace():

// let s:string="Vikram";
// let s1=s.replace('Vikram','Ajay');
// console.log(s1);

// let a:string= "VikramBhoite";
// console.log(a.replace('Vi','xx'));
// console.log(a.replace('Bh','**'));
// console.log(a.replace('Bhoite','@@@'));

//12.replaceAll():

// let s:string='Edso Services';
// console.log(s.replaceAll('e','*'));
// console.log(s.replaceAll('s','-'));
// console.log(s.replaceAll("Edso",'@'));

//13.substring():

// let s:string="Welcome to Playwright";
// console.log(s.substring(2,6));
// console.log(s.substring(0,7));
// console.log(s.substring(-4)); //not support negative index
// console.log(s.substring(7));

//14.slice(): extract the portion of string

//let s:string="Welcome to Playwright";
// console.log(s.slice(2,6));
// console.log(s.slice(8,20));
// console.log(s.slice(8));
// console.log(s.slice(-2)); //negative index support
// console.log(s.slice(-5));
//console.log(s.slice(8,2)); //start index greater than end index. return empty string.


//15.split(): convert string into array.

// let str:string="Java.Python.Typescript.C++.Ruby";
// console.log(str);
// let arr=str.split(".");
// console.log(arr);

//16. trim(): remove spaces both ends
// let s:string="     Vikram       ";
// console.log(s);
// console.log(s.trim());
















 
 
 
 
 
