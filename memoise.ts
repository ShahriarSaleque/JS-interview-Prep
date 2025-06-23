type Fn = (...params: number[]) => number

// The memoize function takes a function as an argument and returns a new function that caches the results of the original function.
// If the new function is called with the same arguments as a previous call, it returns the
function memoize(fn: Fn): Fn {
    const cache = new Map<String, number>(); 
    return function(...args) {
        // create a key 
        const key = args.join(',')

        if(cache.has(key)) {
            // cache.get(key) is possibly undefined, but we know it must be present here
            return cache.get(key)!;
        } 

        const res = fn(...args); 
        cache.set(key, res);
        return res; 
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */