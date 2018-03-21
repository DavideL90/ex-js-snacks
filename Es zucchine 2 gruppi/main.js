arrayObjNames = ["zucchina1", "zucchina2", "zucchina3",
                "zucchina4", "zucchina5", "zucchina6",
                "zucchina7", "zucchina8", "zucchina9",
                "zucchina10"];
//Creo due array per contenere gli oggetti zucchine
zucchineBigArray = []; //conterrà le zucchine > 15cm
zucchineSmallArray = []
//Inizializzo due variabile per sommare i vari pesi
pesoTotZucchineBig = 0;
pesoTotZucchineSmall = 0;
//Faccio un ciclo per riempire l'array degli oggetti
for (var i = 0; i < arrayObjNames.length; i++) {
    arrayObjNames[i] = {
      "varietà" : "varietà1",
      "peso" : parseInt(prompt("Inserisci un peso:")),
      "lunghezza" : 20
    //La versione commentata sotto l'ho messa solo per vedere se funzionava. Per fare più veloce imposto dati già prestabiliti
    // "varietà" : prompt("Inserisci la varietà della " + (i+1) + " zucchina in elenco:"),
    // "peso" : parseInt(prompt("Inserisci il peso della " + (i+1) + " zucchina in elenco")),
    // "lunghezza" : prompt("Inserisci la lunghezza " + (i+1) + " zucchina in elenco")
  }
  if(arrayObjNames[i].peso >= 15){
    zucchineBigArray.push(arrayObjNames[i]);
  }
  else{
    zucchineSmallArray.push(arrayObjNames[i]);
  }
}
console.log(zucchineBigArray);
console.log(zucchineSmallArray);

for (var i = 0; i < zucchineBigArray.length; i++) {
  pesoTotZucchineBig += zucchineBigArray[i].peso;
}
for (var i = 0; i < zucchineSmallArray.length; i++) {
  pesoTotZucchineSmall += zucchineSmallArray[i].peso;
}

console.log(pesoTotZucchineBig);
console.log(pesoTotZucchineSmall);
