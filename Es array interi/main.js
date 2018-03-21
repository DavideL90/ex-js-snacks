var numberOfElements = parseInt(prompt("Indica quanti elementi vuoi che il tuo array abbia:"));
var arrayNumbers = [];
for (var i = 0; i < numberOfElements; i++) {
  var numberInput = parseInt(prompt("Inserisci un numero"));
  arrayNumbers.push(numberInput);
}
var totalSum = 0;
for (var i = 0; i < arrayNumbers.length; i++) {
  if(i % 2 != 0){
    totalSum += arrayNumbers[i];
  }
}
document.writeln(arrayNumbers);
document.writeln(totalSum);
