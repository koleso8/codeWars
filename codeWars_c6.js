function countZeros(n) {
  let count = 0;
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  arr.map(a => {
    if (a > 9) {
      if (
        a
          .toString()
          .split('')
          .map(c => {
            if (c == 0) {
              count += 1;
            }
          })
      );
    }
  });
  return count;
}
console.log(countZeros(200));
