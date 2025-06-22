interface Array<T> {
  myAt(index: number): T | undefined;
}

Array.prototype.myAt = function (index: number) {
   if (index < 0) {
    return this[this.length + (index)];
   } 
   return this[index];
};