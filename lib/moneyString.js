function StringToMoney(number) {
  let moneyArr = [];
  let strArr = number.toString().split("");
  let storedDecimal
  const decimalIndex = strArr.findIndex(i=>i === '.')

  if (decimalIndex !== -1  ){
    console.log(decimalIndex)
    storedDecimal = strArr.slice(decimalIndex, strArr.length)
    strArr = strArr.slice(0,decimalIndex)
  }
  if (strArr.length < 4) {
    return number.toString();
  }
  for (let i =  1; i <= strArr.length  ; i++) {
    if (i % 3 === 0 && i !== strArr.length && i!== 0) {
      moneyArr.unshift("," + strArr[strArr.length - i]);
    } 
    else {
      moneyArr.unshift(strArr[strArr.length - i]);
    }
  }
  if (decimalIndex !== -1){
    moneyArr = moneyArr.concat(storedDecimal)
  }
  return moneyArr.join("");
}

export default StringToMoney


