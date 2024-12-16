function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  customers.forEach(customer => {
    tills[0] += customer;
    tills.sort((a, b) => a - b);
  });

  return Math.max(...tills);
}
