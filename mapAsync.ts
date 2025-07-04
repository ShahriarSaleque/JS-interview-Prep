export default function mapAsync<T, U>(
  iterable: Array<T>,
  callbackFn: (value: T) => Promise<U>,
): Promise<Array<U>> {
  return new Promise((resolve, reject) => {
      const len = iterable.length; 
      let count = len;
      const res: any[] = []; 

      if(iterable.length === 0) {
        resolve([])
      }

      iterable.forEach((item, index) => {
          callbackFn(item).then((val) => {
              res[index] = val;
              count--;

              if(count === 0) {
                 resolve(res);
              }
          }).catch(reject)
      });
  })

}