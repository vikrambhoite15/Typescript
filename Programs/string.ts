// //1.Write a program to reverse string.

//let name12:string="Vikram";
// let rev:string="";
// let len:number=name12.length;
// for(let i=len-1;i>=0;i--){

//     rev=rev+name12.charAt(i);
// }
// console.log("Reverse String: "+rev);

  //using function:
//   function reverseString(str:string):string{
     
//     return str.split("").reverse().join("");

//   }
//   console.log(reverseString("Vikram"));
  
//================================================================================

//2. count a digits in string.

// let str:string="Davi123djac45ks56";
// let count:number=0;

// for(let ch of str){

//   if(ch>='0' && ch<='9'){
//     count++;
// }
// }
// console.log("Digits:",count);
//================================================================================

//3. Count consonants in a string
// let s:string="VikramBhoite";
// let count:number=0;
// const vowels='aeiouAEIOU';

// for(let ch of s){

//     if(vowels.includes(ch)){
               
//     }  
//     else{
//         count++
//     }
// }
// console.log(count);
//================================================================================
//4.Count spaces in a string.
 
// let s:string="ada scs asds  sdfsd";
// let count:number=0;
// for(let i=0;i<s.length-1;i++){
//     if((s.charAt(i)==' ')){
//         count++;
//     }
// }
// console.log("count of spaces:",count);
//================================================================================
//5.Count uppercase and lowercase letters.

// let s:string="VikAsCHavan";
// let upperCount:number=0;
// let lowerCount:number=0;

// for(let i=0;i<s.length-1;i++){
//     let c:string=s.charAt(i);
//     if(c>='A' && c<='Z'){

//         upperCount++;
//     }
//     if(c>='a' && c<='z'){

//         lowerCount++;
//     }       
// }
// console.log("Upper Case count:",upperCount);
// console.log("Lower Case count:",lowerCount);
//================================================================================
//6.count a vowel in a string.

// let s:string="VikramBhoite";
// let count:number=0;

// for(let ch of s.toLowerCase()){
//     if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//         count++;
//     }   
// }
// console.log("Count of vowel in String:",count);
//=================================================================================
//7.WAP to remove empty spaces in String using methods in String class.

// let s:string="Vikra m Bhoi te";
// let s1:string=s.replaceAll(" ","");
// console.log(s1);
//=================================================================================
//8.WAP to check if String is palindrome or not

// let name12:string="madam";
// let rev:string="";

// for(let i=name12.length-1;i>=0;i--){

//    rev=rev+name12.charAt(i);
// }
// if(name12===rev){

//     console.log("String is a Palindrome");   
// }
// else{
//     console.log("String is not Palindrome");    
// }
//===============================================================================
//9.WAP to print character in a string.

// let s:string="Vikram@123";

// for(let i=0;i<s.length-1;i++){
//     console.log(s.charAt(i));   
// }
//================================================================================
//10.Replace all digits with '#'.

//let s:string="VikraM@1234$BHOite";
// let s1:string=s.replace(/[0-9]/g,"#");
//console.log(s.replace(/\d/g,'#'));
// console.log(s1);

//replace upperCase with '#';
//console.log(s.replace(/[A-Z]/g,"#"));

//replace lowerCase with '#';
//console.log(s.replace(/[a-z]/g,"#"));

//replace special characters with 'x'
//console.log(s.replace(/[^a-zA-z0-9]/g,"x"));
//==============================================================================
//11.Replace all vowels with '*'.

// let s:string="Vikram Bhoite";
// //console.log(s.replace(/[aeiouAEIOU]/g,"*"));

// //replace all consonant with "*"
// console.log(s.replace(/[^aeiouAEIOU]/g,"*"));
//==============================================================================
//12.print reverse statment.

// let s:string="Welcome to Typescript";
// let srr:string[]=s.split(" ");
// let reverse:string="";
// console.log(srr);

// for(let value of srr.reverse()){
//       reverse=reverse+" "+value;
// }
// console.log(reverse);
//================================================================================
//13. Count special characters.
// let str:string="Vikr@m12#^*";
// let count:number=0;
// for(let ch of str){
//   if(!(ch>='A' && ch<='Z')&&
//      !(ch>='a' && ch<='z')&&
//      !(ch>='0' && ch<='9')){

//       count++;

//   }

// }
// console.log("Special Characters:",count);
//==================================================================================
//14.count words.
// let str:string="TypeScript is easy language";

// let words:string[]=str.split(" ");

// console.log(words.length);
//===============================================================================
//15.Remove Duplicate characters.

// let str:string="Programming";
// let result:string="";

// for(let ch of str){
//   if(!result.includes(ch)){

//     result+=ch;
//   }
// }
// console.log(result);
//=================================================================================


















