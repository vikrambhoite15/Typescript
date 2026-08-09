/* Constructors:
   -Constructors is special type of method.it is used to intialize a class properties.
   -To create constructor we use constructor keyword.constructor does not have any name.
   -Constructor does not have any return type.
   -When we create a object of a class constructor is  being automatically called.  */

  /* class Student{

    studentID:number;
    name:String;
    std:String;

    constructor(studentID:number,name:String,std:string){
        this.studentID=studentID;
        this.name=name;
        this.std=std;

    }
    displayinfo():void{
        console.log("StudentId: "+this.studentID);
        console.log("Name: "+this.name);
        console.log("Std: "+this.std);
        
        
        
    }
   }
   let st=new Student(101,"Jonh",'10th');
   st.displayinfo();
   console.log("=======================");
   
   let st1=new Student(102,"Ajay",'9th');
   st1.displayinfo();
   console.log("=======================");
   
   let st2=new Student(103,"Vijay","5th");
   st2.displayinfo();                          */
//=======================================================================================

/* //Private Constructor:
     -when we define private access modifier with constructor that constructor is called
      private constructor.
     -When we declared any class constructor as private then we can't create an object of that class.
     -When we want to apply restriction for object creation for user that time we are 
      defining our class constructor as private.it is also called singlton design pattern.  */
   
 /*  class Employee{

    private constructor(){

        console.log("This is a private constructor");
        
    }
  }
  let emp=new Employee();  */
   
