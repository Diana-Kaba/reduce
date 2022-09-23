let m = prompt("Enter numerator:");
let n = prompt("Enter the denominator:");
if (n === 0) {
  alert("Do not divide by 0!");
} else if (m === 0) {
  if (isNaN(n) && isNaN(m)) {
    alert("Not a Number!");
  }
} else {
  let m1 = m;
  let n1 = n;
  while (m1 !== n1) {
    if (m1 > n1) {
      m1 -= n1;
    } else {
      n1 -= m1;
    }
  }
  m /= m1;
  n /= n1;
}

alert(m + "/" + n);
