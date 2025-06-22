interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any,
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
    let temp: any = []; 

    if(this === null || this === undefined) {
      throw new Error('Array provided is null or undefined')
    }

    if(typeof callbackFn !== 'function') {
      throw new Error(callbackFn + 'is not a function')
    }

    const arr = Object(this);
    const len = this.length >>> 0;
  
    for(let i = 0; i < len; i ++) {
       if (arr[i]) {
          const val = arr[i];
          if(callbackFn.apply(thisArg, [val, i, arr])) {
             temp.push(val);
          }
       }
    }

    return temp;
};

[1, 2, 3, 4].myFilter((value) => value % 2 == 0);

// check out the mdn docs = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// greatfrontend link = https://www.greatfrontend.com/interviews/study/three-months/questions/javascript/array-filter
