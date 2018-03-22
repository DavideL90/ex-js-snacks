var MemorizeNumbers = []; //per memorizzare i numeri usciti
alert("Ricordati i seguenti numeri: ");
var casualNumber = Math.floor((Math.random() * 100) + 1);
MemorizeNumbers.push(casualNumber);
var seconds = 30; //per fare il countdown dei secondi
//Creo un array e una variabile per salvare i risultati dell'utente
var numberGuessed = [];
var howManyNumb = 0;
//genero i numeri casuali da 1 a 100
for (var i = 0; i < 4; i++) {
  casualNumber = Math.floor((Math.random() * 100) + 1);
  console.log(casualNumber);
  if(isDifferentNumber(MemorizeNumbers, casualNumber)){
    MemorizeNumbers.push(casualNumber);
    alert(casualNumber);
  }
}
console.log(MemorizeNumbers);
//Faccio un ciclo per fare il timer fino a 30 secondi
for (var i = 1; i <= 30; i++) {
  window.setTimeout(showTimer, 1000 * (i + 1));
}
//Faccio inserire all'utente i 5 numeri
for (var i = 0; i < 5; i++) {
  var guessNumber = parseInt(prompt("Quale numero era uscito?"));
  if(MemorizeNumbers.includes(guessNumber)){
    numberGuessed.push(guessNumber);
    howManyNumb++;
  }
}
//Dichiaro i risultati
if(howManyNumb > 0){
  document.write("Complimenti hai indovinato " + howManyNumb + " numero/i e sono: " + numberGuessed);
}
else{
  document.write("Mi dispiace ma non hai indovinato nemmeno un numero. La tua memoria fa schifo!")
}
function isDifferentNumber(arrNumbers, randomNum){
  for (var i = 0; i < arrNumbers.length; i++) {
    if(randomNum == arrNumbers[i]){
      return false;
    }
    else{
      return true;
    }
  }
}

function showTimer(){
  console.log(seconds);
  seconds--;
}
