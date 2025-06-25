// Problem statement 
// Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

// Additionally, the debounce-ed function comes with two extra methods:

// cancel() method to cancel pending invocations
// flush() method to immediately invoke any delayed invocations

interface DebouncedFunction extends Function {
  cancel: () => void;
  flush: () => void;
}

export default function debounce(
  func: Function,
  wait: number,
): DebouncedFunction {
  let timeoutID: any;
  let context: any; 
  let argsToInvoke: any; 

  function cancelTimer() {
      clearTimeout(timeoutID); 
      timeoutID =  null
  }; 


  function invoke() {
      // call this if there are no pending invocations 
      // check if there are pending invocations by checking
      // whether timeoutID is null 
      if(timeoutID == null) {
         return 
      }
      cancelTimer(); 
      func.apply(context, argsToInvoke);
  }

  function fn(...args: any) {
     cancelTimer();
     context = this; 
     argsToInvoke = args;
     
     timeoutID = setTimeout(() => {
       invoke();
     }, wait);
  }

  fn.cancel = cancelTimer;
  fn.flush = invoke

  return fn; 
}