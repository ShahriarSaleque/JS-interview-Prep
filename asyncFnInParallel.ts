// 2721. Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

type Func<T> = () => Promise<T>

function promiseAl<T>(functions: Func<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const result: T[] = []
        let collected = 0; 

        if(functions.length === 0) {
            return resolve([])
        }; 

        functions.forEach((fn, index) => {
            fn().then((val) => {
                result[index] = val;
                collected++; 

                if(collected === functions.length) {
                    // all promises are resolved 
                    resolve(result);
                }
            }).catch((err) => {
                reject(err)
            })
        }); 

    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

