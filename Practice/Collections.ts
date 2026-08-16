//Set:
//set is a collection that store only unique values.
//it does not allow duplicate value.
//it maintain insertion order
//fast searching element.

//let no= new Set<number>();

//add():
// no.add(10);
// no.add(20);
// no.add(30);
// no.add(10); //duplicate not allowed
// no.add(40);
// console.log(no);

// //delete();
// no.delete(10);
// no.delete(40);
// console.log(no);

//has():

// let days= new Set<string>();
// days.add("Sun");
// days.add("Mon");
// days.add("Tue");
// days.add("THu");
// days.add("Fri");
//days.add("Sat");
//days.add(null); null value not allowed
//console.log(days);

// console.log(days.has('Fri'));
// console.log(days.has('Sat'));

// days.delete('Mon');
// console.log(days);

//size(): return the no of element

//console.log(days.size);

//clear(): remove all values
// days.clear();
// console.log(days);
//======================================================================================

//Map:

//let employee= new Map<number,string>();

//set(): to add & update data.
// employee.set(101,'David');
// employee.set(102,'Jonh');
// employee.set(103,'Neha');
// employee.set(104,'vijay');
//console.log(employee);
//employee.set(101,'Suraj');
//console.log(employee);
// employee.set(105,'David');
// console.log(employee);

//fetching data using for of loop.

// for(const value of employee){

//     console.log(value);
    
// }

//fetching with only keys

// for(const value of employee.keys()){

//     console.log(value);   
// }

//fecthing with only values

// for(const value of employee.values()){

//     console.log(value);  
// };

//size():
//console.log(employee.size);


//has():
// console.log(employee.has(102));
// console.log(employee.has(105));

//delete():
//employee.delete(102);
//console.log(employee);
//employee.delete(105);
//console.log(employee);

//clear():
// employee.clear();
// console.log(employee);
//============================================================================
//object():

// let employee={
//     id:102,
//     name:'David',
//     Roll:'QA'
// };
// console.log(employee);
// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.Roll);

//update properties

// employee.name='Rahul';
// employee.id=103;
// employee.Roll="DEV"
// console.log(employee);
//======================================================================================

//Generics:
//Ex-1
// function show<T>(value:T):T{

//     return value;
// }
// console.log(show<number>(15));
// console.log(show<string>('Welcome'));
// console.log(show(true));

//ex-2

// class Demo<T>{
//     value:T;

//     constructor(value:T){
//         this.value=value;
//     };
//     disply(){
//         console.log(this.value);   
//     };
// };
// const d= new Demo<number>(100);
// d.disply();
// const d1= new Demo<string>('Welcome to typescript..');
// d1.disply();

//Ex-3

// interface employee<T>{
//     empId:number;
//     empName:T;
// }

// const e:employee<string>={
//     empId:101,
//     empName:'David'

// }
// console.log(e);



