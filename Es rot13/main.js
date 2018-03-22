var inputWord = prompt("Inserisci una parola");
var cryptedWord = "";
// MODO FATTO CON DUE ARRAY
// var firstHalf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
// var secondHalf = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// for (var i = 0; i < inputWord.length; i++) {
//   var index = 0;
//   if(firstHalf.includes(inputWord.charAt(i))){
//     index = firstHalf.indexOf(inputWord.charAt(i));
//     var tempLetter = secondHalf[index];
//     cryptedWord += secondHalf[index];
//   }
//   else{
//     index = secondHalf.indexOf(inputWord.charAt(i));
//     var tempLetter = firstHalf[index];
//     cryptedWord += firstHalf[index];
//   }
// }
// console.log(cryptedWord);

//MODO FATTO CON MOD
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//                 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// for (var i = 0; i < inputWord.length; i++) {
//   var index = alphabet.indexOf(inputWord.charAt(i));
//   if((index + 13) > 26){
//     cryptedWord += alphabet[((index + 13) % 26)];
//   }
//   else{
//     cryptedWord += alphabet[(index + 13)];
//   }
// }
// console.log(cryptedWord);

// MODO FATTO CON CHARCODE
var endOfCapitalAlphabet = 90; //corrisponde alla Z
var endOfSmallAlphabet = 122; //corrisponde alla z
for (var i = 0; i < inputWord.length; i++) {
  var index = inputWord.charCodeAt(i);
  console.log(index);
  //verifico se la lettera è maiuscola
  if(index <= endOfCapitalAlphabet){
    if((index + 13) > endOfCapitalAlphabet){
      cryptedWord += String.fromCharCode(64 + ((index + 13) % endOfCapitalAlphabet));
    }
    else{
      cryptedWord += String.fromCharCode(index + 13);
    }
  }
  else{
    if((index + 13) > endOfSmallAlphabet){
      cryptedWord += String.fromCharCode(96 + ((index + 13) % 122));
    }
    else{
      cryptedWord += String.fromCharCode(index + 13);
    }
  }
}
console.log(cryptedWord);
