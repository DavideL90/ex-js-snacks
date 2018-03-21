//Creo un array contenente i nomi degli oggetti
arrayObjNames = ["zucchina1", "zucchina2", "zucchina3",
                "zucchina4", "zucchina5", "zucchina6",
                "zucchina7", "zucchina8", "zucchina9",
                "zucchina10"];
//Creo un array per contenere gli oggetti zucchine
zucchineArray = [];
//Faccio un ciclo per riempire l'array degli oggetti
for (var i = 0; i < arrayObjNames.length; i++) {
    arrayObjNames[i] = {
    "varietà" : prompt("Inserisci la varietà:"),
    "peso" : 200,
    "lunghezza" : 20
  }
  zucchineArray.push(arrayObjNames[i]);
}
console.log(zucchineArray);
