type Fn = (...params: any[]) => Promise<any>;



function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        const p1 = fn(...args); 
        const p2 = new Promise((res, rej) => {
            setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t);
        })
        return await Promise.race([p1,p2])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */