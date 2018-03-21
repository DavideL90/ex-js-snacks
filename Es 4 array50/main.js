var array = [];
var totale = 0;
do{
  var userInput = parseInt(prompt("Inserisci un numero:"));
  array.push(userInput);
  totale += userInput;
}while(totale < 50);

document.write(array);
document.write("La somma degli elementi dell'array è: " + totale);
