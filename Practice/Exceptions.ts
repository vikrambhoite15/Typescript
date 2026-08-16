
// class Test {

//     opration() {
//         let a = 23;
//         let b = 0;

//         console.log("Start..");
        
//         if (b == 0) {
//             throw new Error("Can't divided by zero");
//         }
//         let c=a/b;
//         console.log("Stop");
        
//     };
// };
// const t= new Test();
// try{
// t.opration();
// }
// catch(error:any){
//    console.log(error.message);
// }
// finally{
//     console.log("Clean Up");
    
// }
//=============================================================================================
//Ex-2

// class Demo{

//    display(){
//     let name:any=null;

//     console.log("Start..");
    
//     try{
//     console.log(name.toUpperCase());
//     }
//     catch(error){

//         console.log("Name is null..");
        
//     }
//     finally{
//         console.log("Stop..");
        
//     }
    
//    }
// }
// const d= new Demo();
// d.display();
//==============================================================================================
//ex-3

function checkAge(age:number){

    if(age<18){

        throw new Error("You are not eligible for vote.");
    }
    else{
        console.log("You are eligible for vote");
        
    }
}
try{
checkAge(17);
}
catch(error:any){
    console.log(error.message);
    
}
finally{
    console.log("Clean up code");
    
}