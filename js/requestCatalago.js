
const catalogo = "http://protoweb.zacsoft.com/campomarte/service/get/getProductos.php";
const sliderYOOKO = document.getElementById("sliderYoko");
let respuesta;
let brazos;
let esquinas;
let kids;
let puffino;
let taburetes;



window.addEventListener('load', function () {
  requestModulosJSON(catalogo);
}, false);

function requestModulosJSON(url) {
  fetch(url)
    .then(function (response) {

      return response.json();
    })
    .then(function (myJson) {
      respuesta = myJson;
      return myJson;
    }).then(function () {
      brazos = Object.values(respuesta.brazos);
      esquinas = Object.values(respuesta.esquinas);
      taburetes = Object.values(respuesta.taburetes);
      kids = Object.values(respuesta.kids);
      puffino = Object.values(respuesta.puffino);
      propiedadesArreglo(brazos);
      propiedadesArreglo(esquinas);
      propiedadesArreglo(taburetes);
      propiedadesArreglo(kids);
      propiedadesArreglo(puffino);
      inflarSliderYooko();
      inflarSlider("sliderPuffino", puffino, false);
      inflarSlider("sliderKids", kids, false);
    }).catch(function () {
      /*si hay errores hacer esto */
      console.log("error");
    });
 
}

function inflarSlider(id, arreglo, encadenar) {
  var slider = document.getElementById(id);
  var htmlSlider = '';
  arreglo.forEach(element => {
    htmlSlider = htmlSlider +
      `
      <li>
					<a style="cursor: pointer;" onclick="changeProduct(${parseInt(element.index, 10)})">
						<div class="text-center">
							<div class="product" style="margin-top: 1em;">
								<div class="product-grid"
									style="background-image:url(${element.imagenes[0].imagen}); margin: 0 auto;">
								</div>
								<div class="desc" style="margin-top: 1em;">
									<h3><a class="nomProducto">${element.apodo}</a></h3>
									<span class="priceProducto">$${parseInt(element.precio, 10)}</span>
								</div>
							</div>
						</div>
					</a>
				</li>
    `;
  });
  if (typeof encadenar !== "undefined") {
    if (encadenar) {
      return htmlSlider;
    } else {
      slider.innerHTML = htmlSlider;
    }
  }


}

function propiedadesArreglo(arreglo) {
  arreglo.forEach((item) => {
    //arreglo.dimensiones = Object.values(arreglo.dimensiones);
    item.imagenes = Object.values(item.imagenes);
  });
}

function inflarSliderYooko() {
  var yookoHtml = "";
  yookoHtml = yookoHtml + inflarSlider("sliderYoko", taburetes, true);
  yookoHtml = yookoHtml + inflarSlider("sliderYoko", brazos, true);
  yookoHtml = yookoHtml + inflarSlider("sliderYoko", esquinas, true);
  document.getElementById("sliderYoko").innerHTML = yookoHtml;
}

function mostrarDetalles(val) {
  console.log("pantalla dettalsses");
  var opc = val.toString(10);
  var brazoMatch = brazos.find((x) => x.index == opc);
  var esquinaMatch = esquinas.find((x) => x.index == opc);
  var tabureteMatch = taburetes.find((x) => x.index == opc);
  var kidMatch = kids.find((x) => x.index == opc);
  var puffinoMatch = puffino.find((x) => x.index == opc);
  if (typeof brazoMatch !== "undefined") {
    console.log("encontrado en brazos");
    showDesc();

				document.getElementById('nombreP').innerHTML = brazoMatch.apodo;
				document.getElementById('medidasP').innerHTML = `Mide ${brazoMatch.dimensiones[0].largo} cm de largo x 90 cm de ${brazoMatch.dimensiones[0].ancho} y ${brazoMatch.dimensiones[0].alto} cm de alto.`;
				document.getElementById('descriptionP').innerHTML = brazoMatch.descripcion;
				document.getElementById('precioP').innerHTML = `$${brazoMatch.precio}`;

				//Galeria
				$("#sliderDetail").empty();
				document.getElementById('sliderDetail').innerHTML = ''
					+ `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${brazoMatch.imagenes[0].imagen}"></li>`;

				setTimeout(loadDetailSlider, 500);

				//Agregar acción de agregar al carrito
				document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${brazoMatch.apodo}',${brazoMatch.precio},'${brazoMatch.imagenes[0].imagen}')`);

				$("#detailP").show(500);
  }

  if (typeof esquinaMatch !== "undefined") {
    showDesc();

				document.getElementById('nombreP').innerHTML = esquinaMatch.apodo;
				document.getElementById('medidasP').innerHTML = `Mide ${esquinaMatch.dimensiones[0].largo} cm de largo x 90 cm de ${esquinaMatch.dimensiones[0].ancho} y ${esquinaMatch.dimensiones[0].alto} cm de alto.`;
				document.getElementById('descriptionP').innerHTML = esquinaMatch.descripcion;
				document.getElementById('precioP').innerHTML = `$${esquinaMatch.precio}`;

				//Galeria
				$("#sliderDetail").empty();
				document.getElementById('sliderDetail').innerHTML = ''
					+ `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${esquinaMatch.imagenes[0].imagen}"></li>`;

				setTimeout(loadDetailSlider, 500);

				//Agregar acción de agregar al carrito
				document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${esquinaMatch.apodo}',${esquinaMatch.precio},'${esquinaMatch.imagenes[0].imagen}')`);

				$("#detailP").show(500);
  }

  if (typeof tabureteMatch !== "undefined") {
    showDesc();

				document.getElementById('nombreP').innerHTML = tabureteMatch.apodo;
				document.getElementById('medidasP').innerHTML = `Mide ${tabureteMatch.dimensiones[0].largo} cm de largo x 90 cm de ${tabureteMatch.dimensiones[0].ancho} y ${tabureteMatch.dimensiones[0].alto} cm de alto.`;
				document.getElementById('descriptionP').innerHTML = tabureteMatch.descripcion;
				document.getElementById('precioP').innerHTML = `$${tabureteMatch.precio}`;

				//Galeria
				$("#sliderDetail").empty();
				document.getElementById('sliderDetail').innerHTML = ''
					+ `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${tabureteMatch.imagenes[0].imagen}"></li>`;

				setTimeout(loadDetailSlider, 500);

				//Agregar acción de agregar al carrito
				document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${tabureteMatch.apodo}',${tabureteMatch.precio},'${tabureteMatch.imagenes[0].imagen}')`);

				$("#detailP").show(500);
  }

  if (typeof kidMatch !== "undefined") {
    showDesc();

    document.getElementById('nombreP').innerHTML = kidMatch.apodo;
    document.getElementById('medidasP').innerHTML = `Mide ${kidMatch.dimensiones[0].largo} cm de largo x 90 cm de ${kidMatch.dimensiones[0].ancho} y ${kidMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = kidMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${kidMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    document.getElementById('sliderDetail').innerHTML = ''
      + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${kidMatch.imagenes[0].imagen}"></li>`;

    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${kidMatch.apodo}',${kidMatch.precio},'${kidMatch.imagenes[0].imagen}')`);

    $("#detailP").show(500);
  }

  if (typeof puffinoMatch !== "undefined") {
    showDesc();

				document.getElementById('nombreP').innerHTML = puffinoMatch.apodo;
				document.getElementById('medidasP').innerHTML = `Mide ${puffinoMatch.dimensiones[0].largo} cm de largo x 90 cm de ${puffinoMatch.dimensiones[0].ancho} y ${puffinoMatch.dimensiones[0].alto} cm de alto.`;
				document.getElementById('descriptionP').innerHTML = puffinoMatch.descripcion;
				document.getElementById('precioP').innerHTML = `$${puffinoMatch.precio}`;

				//Galeria
				$("#sliderDetail").empty();
				document.getElementById('sliderDetail').innerHTML = ''
					+ `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${puffinoMatch.imagenes[0].imagen}"></li>`;

				setTimeout(loadDetailSlider, 500);

				//Agregar acción de agregar al carrito
				document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${puffinoMatch.apodo}',${puffinoMatch.precio},'${puffinoMatch.imagenes[0].imagen}')`);

				$("#detailP").show(500);
  }




}