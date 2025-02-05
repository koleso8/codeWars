const array = [-100, 5, 1, 7, 8, 9, 4, 5, 6, 20, -10];

const func = arr => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max > arr[i]) max = arr[i];
  }
  return max;
};

console.log(func(array));
