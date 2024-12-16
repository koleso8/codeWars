const calcPrice = km => {
  const start = 30;
  if (km > 10) {
    return start + 80 + (km - 10) * 5;
  } else {
    return start + km * 8;
  }
};

console.log(calcPrice(2));
//function tripCost(distance) {
//return 30 + Math.min(10, distance) * 8 + Math.max(0, distance-10) * 5;
//}
