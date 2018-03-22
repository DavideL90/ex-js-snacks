var arrayNumbers = [1, 2, 3, 4, 5, 6];
var firstNumber = 2;
var secondNumber = 0;
var totValori = 0;
if((firstNumber < arrayNumbers.length) && (secondNumber < arrayNumbers.length)){
  totValori = countElements(arrayNumbers, firstNumber, secondNumber);
}
else{
  alert("Hai inserito uno o più valori errati.");
}
console.log(totValori);


function countElements(arrNumbs, num1, num2){
  var count = 0;
  if(num1 > num2){
    for (var i = num2; i <= num1; i++) {
      count++;
    }
  }
  else{
      for (var i = num1; i <= num2; i++) {
        count++;
      }
    }
  return count;
}
