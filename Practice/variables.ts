
//var keyword
//var keyword used to declared variable.
//var keyword has function scope.

// function letKeyword(){

// let city:string='Pune';
    
//     if(true){
//         let no:number=200;
//         console.log(no);
//        // let no=6000; cant redeclared
//        no=10000;
//        console.log(no);
       
           
//     }  
//     //console.log(no); let keyword outside block not accessed
//      console.log(city);
     
// //2.redaclaration
//   //let city='Mumbai'; let keyword variable we can't redeclared

//   //re assigned
//   city='chennai';
//   console.log(city);
  
//   console.log(msg);
//   let msg='Welcome to typescript';
  
// };
// letKeyword();

function constKeyword(){

    //const keyword variable has block scope

    if(true){

        const msg='Welcome to typescript';
        console.log( msg);
      //  const msg="Thanks"; can't redeclared
     // msg="Wlecome to playwright"; can't reassigned
        
    }
   // console.log(msg); can't use outside the block
    const no:number=1000;
    console.log(no);

    
};
constKeyword();

