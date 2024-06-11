function numberToBinary(num) {
  if (num === 0) {
    return "0";
  }
  
  let res = '';
  
  while (num > 0) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  
  return res;
}

console.log(5..toString(2));
console.log(numberToBinary(5));  
console.log(numberToBinary(0));