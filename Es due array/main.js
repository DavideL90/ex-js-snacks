var array1 = [1];
var array2 = [1, 2, 3, 4, 5];
var countFirst = array1.length;
var countSecond = array2.length;
if(countFirst > countSecond){
  for (var i = 0; i < (countFirst - countSecond); i++) {
    array2.push(0);
  }
}
else if(countFirst < countSecond){
  for (var i = 0; i < (countSecond - countFirst); i++) {
    array1.push(0);
  }
}
console.log(array1);
console.log(array2);
