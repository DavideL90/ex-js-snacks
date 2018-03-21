var userNumber = parseInt(prompt("Inserisci un numero"));
if(userNumber % 2 == 0){
  alert("Il numero inserito è pari: " + userNumber);
}
else{
  alert("Il numero era dispari quindi è stato aumentato di 1: " + (userNumber + 1));
}
