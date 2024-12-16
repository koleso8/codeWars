function calcPrice(a, b = 10) {
  return a - (a / 100) * b;
}
console.log(calcPrice(50, 2));
