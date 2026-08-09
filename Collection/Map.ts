/* Map:
   - A map is a collection that stores data as key-value pairs.
   - It maintained the insertion order.
   - It does not allow duplicate keys but different keys can have same value. 
*/

//Example:01

    //let student=new Map<number,string>();

//set(): add or updatec the data.
    // student.set(101,"Rahul");
    // student.set(102,"Jonh");
    // student.set(103,"Priya");
    // student.set(104,"Ajay");
    // student.set(105,"Neha");
    // student.set(102,"Suraj"); //duplicate key: override the old value.
    // student.set(106,"Rahul"); //duplicate values are allow
    

    // console.log(student);
    
    //console.log(student.get(101));
    //console.log(student.get(105));
  
//fetching data using for of loop:
    // for(let m of student){
    //     console.log(m);
    // }

    //    for(const[number,string] of student){
    //     console.log(number,string);
    //    }

//fecthing with only keys:
    //for(let k of student.keys()){
    //    console.log(k);
    //}

//fecthing with only values:
    // for(let v of student.values()){
    //     console.log(v);     
    // }

    // for(let e of student.entries()){
    //     console.log(e);
    // }

//size:
    
    //  console.log(student.size);
     

//has(): check whether key is exists.

    //  console.log(student.has(103));
    //  console.log(student.has(108));
    //  console.log(student.has(104));

//delete(): Remove a key-value pairs.

    //    student.delete(105);
    //    student.delete(102);
    //    console.log(student);

// clear: Remove all records.

//    student.clear();
//    console.log(student);

//diff. Map VS Object.
//     Map                               Object
//  1. Stores key-value pairs.           Stores properties.
//  2. Keys can be any data types.       Keys are only strings or symbols.
//  3. Maintain insertion order.         Properties order is not intended as the primary feature.
           
     
     
     