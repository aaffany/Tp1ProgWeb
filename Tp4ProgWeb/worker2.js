onmessage = function(e) {
  console.log('Worker: Message received from main script');
	
	var a ;
	var b;
  var color;
  var intervalID = setInterval(envoyer, 100);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }









   function envoyer(){
     	a = Math.floor(Math.random() * Math.floor(600));
     	b = Math.floor(Math.random() * Math.floor(600));
      color = getRandomColor();
      str = JSON.stringify([a,b,color])
     	postMessage(str ) ;
   }
   
}
