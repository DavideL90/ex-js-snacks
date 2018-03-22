// var inputString = prompt("Inserire una parola");
// inputString = reverseString(inputString);
// var invertedWord = "";
// for (var i = 0; i < inputString.length; i++) {
//   invertedWord += inputString[i];
// }
// console.log(invertedWord);
// function reverseString(inputWord){
//    inputWord = inputWord.split("").reverse();
//   return inputWord;
// }
var inputString = prompt("Inserire una parola");
inputString = reverseString(inputString);
console.log(inputString);


function reverseString(inputWord){
   return inputWord.split("").reverse().join("");
}
