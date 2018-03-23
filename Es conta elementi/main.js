var arrayNumbers = [11, 12, 13, 100, -2, 25];
var firstNumber = -2;
var secondNumber = 100;
var totValori = 0;
//Verifico che i numeri inseriti siano nel range dei valori
console.log(arrayNumbers);
totValori = countElements(arrayNumbers, firstNumber, secondNumber);
if(totValori == 0){
  document.write("Mi spiace ma non esiste nessun numero compreso tra i tuoi due numeri");
}
else if(totValori == 1){
  //Ho messo questa condizione solo per cambiare la frase al singolare in caso di un elemento solo
  document.write("C'è " + totValori + " elemento incluso tra i tuoi numeri");
}
else{
  document.write("Ci sono " + totValori + " elementi inclusi tra i tuoi numeri");
}
console.log(totValori);


function countElements(arrNumbs, num1, num2){
  var count = 0;
  for (var i = 0; i < arrNumbs.length; i++) {
    if((num1 <= arrNumbs[i]) && (num2 >= arrNumbs[i])){
      count++;
    }
    else if((num1 >= arrNumbs[i]) && (num2 <= arrNumbs[i])){
      count++;
    }
  }
  return count;
}
