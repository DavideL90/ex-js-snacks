var num1 = 0;
var num2 = 1;
console.log(num2);
for (var i = 0; i <99; i++) {
  var totale = num1 + num2;
  console.log(totale);
  num1 = num2;
  num2 = totale;
}
