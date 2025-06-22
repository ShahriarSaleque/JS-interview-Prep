interface Array<T> {
  myMap<U>(
    callbackFn: (value: T, index: number, array: Array<T>) => U,
    thisArg?: any,
  ): Array<U>;
}

// The myMap function is a custom implementation of the Array.prototype.map method.
// edge cases 
// 1. null or undefined array
// 2. callbackFn is not a function
// 3. sparse arrays
// 4. empty array
// 5. thisArg is not provided
// 6. thisArg is provided
Array.prototype.myMap = function (callbackFn, thisArg) {
  let res: any = [];

  if (this === null || this === undefined) {
    throw new TypeError("Array provided is null or undefined");
  }

  if(this.length === 0) {
    return []
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + "is not a function");
  }

  let arr = Object(this)
  const len = this.length >>> 0; 

  for(let i = 0 ; i < len ; i ++) {
    if(arr[i]) {
      res.push(callbackFn.call(thisArg, arr[i], i , this))
    } else {
        res.push(arr[i])
    }
  } 

  return res;
};