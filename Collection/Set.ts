/* Set:
  - A set is an collection that stores only unique values.
  - It does not allow duplicate elements.
  - It maintain the insertion ordered.
  - Fast searching of elements.    */

//Example:1

  // let numbers= new Set<number>();
  
  //add() : adds a value to the set.

  // numbers.add(10);
  // numbers.add(45);
  // numbers.add(678);
  // numbers.add(34);
  // numbers.add(276);
  // numbers.add(45);// duplicate

  //console.log(numbers);

//delete(): Remove the values.

//   numbers.delete(45);
//   console.log(numbers);
//   numbers.delete(678);
//   console.log(numbers);

//has(): checks if values exists.
  // let friuts=new Set<string>();
  // friuts.add('Mango');
  // friuts.add("Apple");
  // friuts.add("Papaya");
  // friuts.add("Banana");
  // friuts.add("Orange");
  // friuts.add(null); //not allow null value
  // console.log(friuts);
  

//  console.log(friuts.has("Papaya"));
//  console.log(friuts.has("Anjir"));
//  console.log(friuts.has("Apple"));

//clear(): remove all values.

//    numbers.clear();
//    console.log(numbers);

//size(): Return the number of elements.

    // console.log(friuts.size);

    // for(let value of friuts){
    //     console.log(value);
        
    // }
    
/*Diff. between Array and Set.

   Array                                  Set  
1. Allows duplicate values.               Does not allows duplicate values.
2. Access elements by index.              No index based access.
3. Use push() to add elements             Uses add() to add elements.
4. Has length property                    Has size property.  
5. Searching is fast.                     Searching is slow.      
*/ 
 
  
  
  