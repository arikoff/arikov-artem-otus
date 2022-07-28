export function promiseReduce(asyncFunctions, reduce, initialValue) {
  let memo = initialValue;

  return asyncFunctions
    .reduce(
      (prev, curr) =>
        prev.then(curr).then((result) => {
          memo = reduce(memo, result);
        }),
      Promise.resolve()
    ).then(() => memo);
}