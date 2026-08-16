
//var keyword.
// var keyword is used to declared variable.

// 1.var keyword has a function scope.
// it mean var keyword we should use only within function.

// function add() {
//     var n1:number=20;
//    if(true){
//     var n2:number=30;
//     var n2=60;
//     var c:number=n1+n2;

//    }
//    console.log(c);
   
// }
// add();

//2.Redeclaration is allowed. 
// It means we can redeclared variable values.

// var n="Vikram";
// var n="Ajay";
// var n='Suraj';
// console.log(n);

//3. can be reassigned
// var no=70;
// no=100;
// no=486456;
// console.log(no);

//4.Hoisting.
//variable and function declarations are moved to the top of their scope before code execution.
//it mean variable is used bfore being assigned.
// console.log(message);
// var message="Welcome";

/*important points-
                var                         let                  const
  Scope       : inside function only.       inside block only    inside block only
  Redeclared  : Yes                         NO                   No
  Reassigned  : Yes                         Yes                  No
  Hoisted     : Yes(Undefined)             get error             error   */