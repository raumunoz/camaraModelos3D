const yokosBrazosURL='https://puffino-324d7.firebaseio.com/0/brazos.json';
const yokosEsquinasURL='https://puffino-324d7.firebaseio.com/0/esquinas.json';
const yokosTaburetesURL='https://puffino-324d7.firebaseio.com/0/taburetes.json';
const catalogo="http://protoweb.zacsoft.com/campomarte/service/get/getProductos.php";
const sliderYOOKO=document.getElementById("sliderYoko");
var respuesta;
  function requestModulosJSON(url){
    fetch(url)
    .then(function(response) {
      
      return response.json();
    })
    .then(function(myJson) {
      respuesta =myJson;
        return myJson;
    }).catch(function() {
        /*si hay errores hacer esto */
        console.log("error");
    });
  }