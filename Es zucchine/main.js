//Creo un array contenente i nomi degli oggetti
arrayObjNames = ["zucchina1", "zucchina2", "zucchina3",
                "zucchina4", "zucchina5", "zucchina6",
                "zucchina7", "zucchina8", "zucchina9",
                "zucchina10"];
//Creo un array per contenere gli oggetti zucchine
zucchineArray = [];
//Inizializzo una variabile per sommare i vari pesi
pesoTot = 0;
//Faccio un ciclo per riempire l'array degli oggetti
for (var i = 0; i < arrayObjNames.length; i++) {
    arrayObjNames[i] = {
      "varietà" : "varietà1",
      "peso" : 30,
      "lunghezza" : 20
    //La versione commentata sotto l'ho messa solo per vedere se funzionava. Per fare più veloce imposto dati già prestabiliti
    // "varietà" : prompt("Inserisci la varietà della " + (i+1) + " zucchina in elenco:"),
    // "peso" : parseInt(prompt("Inserisci il peso della " + (i+1) + " zucchina in elenco")),
    // "lunghezza" : prompt("Inserisci la lunghezza " + (i+1) + " zucchina in elenco")
  }
  zucchineArray.push(arrayObjNames[i]);
}
console.log(zucchineArray);
//faccio un ciclo nell'array con i nomi degli oggetti per sommare i loro pesi
for (var i = 0; i < zucchineArray.length; i++) {
  pesoTot += zucchineArray[i].peso;
}
console.log(pesoTot);
