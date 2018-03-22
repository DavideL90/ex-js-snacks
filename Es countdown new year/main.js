var seconds = 10;
var countdown = window.setInterval(happyNewYear, 1000);

function happyNewYear(){
  console.log(seconds);
  seconds--;
  if(seconds == 0){
    alert("Happy new year!!!");
    clearInterval(countdown);
  }
}
