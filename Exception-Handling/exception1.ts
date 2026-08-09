/* Exception Handling:

   - Exception handling is a mechanism to handle the exception(or runtime error) so that
     normal flow of program not disrupted.
   - In typescript has only runtime exception(unchecked exception).
   - Typescript does not support complie-time (checked) exceptions like (IOException, SQLException, etc.).
   - The TypeScript compiler does not force you to handle them.
   - Exception are handled using try,catch,finally and throw.
   - We can use throw keyword to define exception.   

   
   1.try-catch-finally:
    
   >try:
     - try block contains the code that may throw an exception.

    >catch(error):
     - catch block handle the exception.
     - The main purpose of variable in catch block is to recive and access exception object that was thrown.
     - throw new Error("error message") create an error object.
     - The catch(error) variable stores that error object.we can use it to get information about the exception.
     - We can also use catch block without the variable if you don't need any information about the exception.
    
     >finally:
     - finally block contains code that is always executed after the try and catch blocks.
     - Main purpose of finally block is to cleanup code and closing files, database connections,network connections etc.
     -finally block is optional.
     -We can't use a finally block without a try block.

   2.Throw:
     -throw keyword is used to manually create and raise an exception.
     -It immediately stops the normal flow of execution & transfers control to 
      the nearest matching catch block.
      
     -Purpose of throw:
      1.To genrate a custom exception.
      2.To indicate that an error or invalid condition has occured.
      3.To stop normal program execution when something wrong.

  Rules of try-catch-finally:
   
  -try block must follow with catch block.
  -We can't use catch block without try block.
  -We can't declared multiple try block subsequently.
  -only one catch block is allowed in typescript.
  -Nested try block are allowed.
  -try block can be followed by either catch, finally.  */

 //===================================================================================

