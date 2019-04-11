const yokosBrazosURL='https://puffino-324d7.firebaseio.com/0/brazos.json';
const yokosEsquinasURL='https://puffino-324d7.firebaseio.com/0/esquinas.json';
const yokosTaburetesURL='https://puffino-324d7.firebaseio.com/0/taburetes.json';
const sliderYOOKO=document.getElementById("sliderYoko");

  function requestModulosJSON(url){
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
        return myJson;
    }).catch(function() {
        /*si hay errores hacer esto */
        console.log("error");
    });
  }