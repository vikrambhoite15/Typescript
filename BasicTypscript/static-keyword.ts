/* Static Keyword:
   -static keyword mainly used for memory management.
   -static keyword is always belong to the class.
   -static properties/methods are common/shared across all the objects.
   -static properties/methods can be accessed through class name directly.
   -static properties/methods can be modified using class.
   -whenever we are declaring any static properties value then we should not delcared inside the constrctor
    so when we have to declared static properties value,we have to use static block. 
    
    Static block:
    -static block doesn't have any return type and any name
    -main purpose of static block is to initialized static properties value.   */

class staticKeyword{

    //static keyword with properties
    static a:String="mango";
    static b:String="Apple";
    static c:number;
    static d:number;


    static add(x:number, y:number){

        console.log("Addition: "+(x+y));
        console.log(staticKeyword.a);
        console.log(this.b);
        
        
    }
    static call(){
        
        staticKeyword.add(40,90);
    }
    static{
        staticKeyword.c=20;
        staticKeyword.d=40;
    }
    static multiply(){
        console.log("Multiply: "+(staticKeyword.c*staticKeyword.d));
        
    }
    
}
//staticKeyword.add(30,50);

staticKeyword.call();

staticKeyword.multiply();
console.log(staticKeyword.a);

