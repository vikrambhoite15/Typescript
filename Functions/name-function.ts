
//function is a reusable block of code that performs a specific task.
//function can not define in a class.

//There are 3 type of functions.
//1.Named function
//2.Anonymous function
//3.Arrow function(lambda function)

//Named function
//1.  with no parameters & no return type
//2.  with parameters & return type
//3.  function with optional paramater
//4.  with rest parameters - same type
//5.  with rest parameters - multiple types
//6.  with default parameters 

// //1.with no parameters & no return type

// function adition() {
//     let no1:number=20;
//     let no2:number=30;

//     console.log(no1+no2);
// }
// //adition();
//==============================================================================
// //2.with parameter and return type

// function multiply(no1:number,no2:number):number {
//     return no1*no2;
    
// }
// let output:number=multiply(20,40);
// console.log(output);
//=================================================================================

// //3.with parameter only

// function student(firstName:String,lastName:String) {
//     console.log(firstName,lastName);
    
// }
// //student('Vikram','Bhoite');
//=======================================================================

//4.function with option parameter

// function displayDetails(id:number, name:string,mailId?:string) {

//     console.log("Id: "+id);
//     console.log("Name: "+name);
//     if(mailId !==undefined){
//     console.log("mailId: "+mailId);
//     }
// }
// displayDetails(123,"william");
//=============================================================================

//5. With rest parameters- same type
    //Rest parameters don't restrict the number of values that you can pass to a function.
    
    // function addNumbers(...num:number[]) {
    //     let sum:number=0;
    //     for(let i=0;i<num.length;i++){

    //         sum=sum+num[i];

    //     }
    //     console.log("Sum of the numbers: "+sum);
        
    // }
    // addNumbers(1,2,3);
    // addNumbers(10,20,30,40);
//===================================================================================

//6.with rest parameter-multiple type

    // function findElements(...elements:(number | string)[]):number {
        
    //     console.log(elements);
    //   return elements.length;
        

        
    // }
    // //findElements(10,'Vikk',30,'abc',59,'willjac');
    // console.log(findElements(34,'abc',454,'efg'));
//================================================================================

//7. function with default parameters.
    
    // function calculateDiscount(rate:number,discount:number=0.50):void {

    //     let finalPrice:number=rate*discount;
    //     console.log("Price with discount: "+finalPrice);
       
    // }
    // calculateDiscount(1000);
    // calculateDiscount(2000,0.30);


    