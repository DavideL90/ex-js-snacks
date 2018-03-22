var array1 = ["a", "b", "c", "d", "e", "f", "g"];
var array2 = [1, 2, 3, 4, 5];
var mergedArray = [];
var i = 0;


while((i < array1.length) || (i < array2.length)){
  console.log(array1[i]);
  console.log(array2[i]);

  if(array1[i]){
    mergedArray.push(array1[i]);
  }
  if(array2[i]){
    mergedArray.push(array2[i]);
  }
  i++;
}
console.log(mergedArray);
