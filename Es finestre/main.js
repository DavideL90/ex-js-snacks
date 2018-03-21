var openWindow = {
  "tab" : ["Facebook", "Hubspot", "hubspot", "Instagram"],
  "active_tab" : 2
};
var avoidSocial = ["Facebook", "Twitter", "Instagram", "Google+", "Tumblr"];
console.log(openWindow.tab);
// Ho creato questo ciclo senza incremento nelle parentesi perché con splice mi dava problemi.
for (var i = 0; i < openWindow.tab.length; i) {
  //Controllo che la parola sia inclusa nell'elenco social network se è cosi la rimuovo
  if(avoidSocial.includes(openWindow.tab[i])){
    openWindow.tab.splice(i, 1);
    //Decremento la finestra attiva se la finestra cancellata viene prima della finestra attiva
    if(i <= openWindow.active_tab){
      openWindow.active_tab--;
      console.log(openWindow.active_tab);
    }
  }
  else{
    i++;
  }
}

console.log(openWindow);
console.log(openWindow.tab);
