interface Array<T> {
  myConcat(...items: Array<T | Array<T>>): Array<T>;
}

// edge cases
// 1. null or undefined array
// 2. items is not an array
// 3. sparse arrays
// 4. items is an empty array
Array.prototype.myConcat = function (...items) {
   let arr = [...this];

   for(let i = 0 ; i < items.length; i++) {
      // for sparse arrays 
      if(items[i]) {
        if(Array.isArray(items[i])) {
          arr.push(...items[i])
        } else {
          arr.push(items[i]);
        }
      }
   } 
   return arr;
};