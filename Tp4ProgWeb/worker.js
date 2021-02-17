onmessage = function(e) {
  console.log('Worker: Message received from main script');
	
	var a ;
	var b;
   var intervalID = setInterval(envoyer, 100);

   function envoyer(){
   	a = Math.floor(Math.random() * Math.floor(600));
   	b = Math.floor(Math.random() * Math.floor(600));
	str = JSON.stringify([a,b])
   	postMessage(str ) ;
   }
   
}
