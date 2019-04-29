
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
  cargarJsonTexturas();
  cambiarVistaTexturas(1)
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
    document.getElementById('medidasP').innerHTML = `Mide ${brazoMatch.dimensiones[0].largo} cm de largo x ${brazoMatch.dimensiones[0].ancho} cm de y ${brazoMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = brazoMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${brazoMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    if (brazoMatch.imagenes.length > 1) {
      var imgenesHtml = "";
      brazoMatch.imagenes.forEach((imagen) => {
        imgenesHtml = imgenesHtml + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
      })
      document.getElementById('sliderDetail').innerHTML = imgenesHtml;
    } else {
      document.getElementById('sliderDetail').innerHTML = ''
        + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${brazoMatch.imagenes[0].imagen}"></li>`;
    }
    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito                                  agregarAlCarrito('Yumil MEDIANO',2499,'images/productos/puffino/atlixco_chico.jpg',this)"
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${brazoMatch.apodo}',${brazoMatch.precio},'${brazoMatch.imagenes[0].imagen}',this)`);

    $("#detailP").show(500);
  }

  if (typeof esquinaMatch !== "undefined") {
    showDesc();

    document.getElementById('nombreP').innerHTML = esquinaMatch.apodo;
    document.getElementById('medidasP').innerHTML = `Mide ${esquinaMatch.dimensiones[0].largo} cm de largo x ${esquinaMatch.dimensiones[0].ancho} cm de  y ${esquinaMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = esquinaMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${esquinaMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    if (esquinaMatch.imagenes.length > 1) {
      var imgenesHtml = "";
      esquinaMatch.imagenes.forEach((imagen) => {
        imgenesHtml = imgenesHtml + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
      })
      document.getElementById('sliderDetail').innerHTML = imgenesHtml;
    } else {
      document.getElementById('sliderDetail').innerHTML = ''
        + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${esquinaMatch.imagenes[0].imagen}"></li>`;
    }
    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${esquinaMatch.apodo}',${esquinaMatch.precio},'${esquinaMatch.imagenes[0].imagen}',this)`);

    $("#detailP").show(500);
  }

  if (typeof tabureteMatch !== "undefined") {
    showDesc();

    document.getElementById('nombreP').innerHTML = tabureteMatch.apodo;
    document.getElementById('medidasP').innerHTML = `Mide ${tabureteMatch.dimensiones[0].largo} cm de largo x ${tabureteMatch.dimensiones[0].ancho} cm de  y ${tabureteMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = tabureteMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${tabureteMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    if (tabureteMatch.imagenes.length > 1) {
      var imgenesHtml = "";
      tabureteMatch.imagenes.forEach((imagen) => {
        imgenesHtml = imgenesHtml + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
      })
      document.getElementById('sliderDetail').innerHTML = imgenesHtml;
    } else {
      document.getElementById('sliderDetail').innerHTML = ''
        + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${tabureteMatch.imagenes[0].imagen}"></li>`;
    }
    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${tabureteMatch.apodo}',${tabureteMatch.precio},'${tabureteMatch.imagenes[0].imagen}',this)`);

    $("#detailP").show(500);
  }

  if (typeof kidMatch !== "undefined") {
    showDesc();

    document.getElementById('nombreP').innerHTML = kidMatch.apodo;
    document.getElementById('medidasP').innerHTML = `Mide ${kidMatch.dimensiones[0].largo} cm de largo x ${kidMatch.dimensiones[0].ancho} cm de  y ${kidMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = kidMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${kidMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    if (kidMatch.imagenes.length > 1) {
      var imgenesHtml = "";
      kidMatch.imagenes.forEach((imagen) => {
        imgenesHtml = imgenesHtml + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
      })
      document.getElementById('sliderDetail').innerHTML = imgenesHtml;
    } else {
      document.getElementById('sliderDetail').innerHTML = ''
        + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${kidMatch.imagenes[0].imagen}"></li>`;
    }
    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${kidMatch.apodo}',${kidMatch.precio},'${kidMatch.imagenes[0].imagen}',this)`);

    $("#detailP").show(500);
  }

  if (typeof puffinoMatch !== "undefined") {
    showDesc();

    document.getElementById('nombreP').innerHTML = puffinoMatch.apodo;
    document.getElementById('medidasP').innerHTML = `Mide ${puffinoMatch.dimensiones[0].largo} cm de largo x ${puffinoMatch.dimensiones[0].ancho} cm de y ${puffinoMatch.dimensiones[0].alto} cm de alto.`;
    document.getElementById('descriptionP').innerHTML = puffinoMatch.descripcion;
    document.getElementById('precioP').innerHTML = `$${puffinoMatch.precio}`;

    //Galeria
    $("#sliderDetail").empty();
    if (puffinoMatch.imagenes.length > 1) {
      var imgenesHtml = "";
      puffinoMatch.imagenes.forEach((imagen) => {
        imgenesHtml = imgenesHtml + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
      })
      document.getElementById('sliderDetail').innerHTML = imgenesHtml;
    } else {
      document.getElementById('sliderDetail').innerHTML = ''
        + `<li><img style="max-width: 80%; margin-bottom: 0px;" src="${puffinoMatch.imagenes[0].imagen}"></li>`;
    }

    setTimeout(loadDetailSlider, 500);

    //Agregar acción de agregar al carrito
    document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${puffinoMatch.apodo}',${puffinoMatch.precio},'${puffinoMatch.imagenes[0].imagen}',this)`);

    $("#detailP").show(500);
  }




}

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/texturas.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function cargarJsonTexturas() {
  loadJSON(function (response) {
    // Parse JSON string into object
    archivosTexturas = JSON.parse(response);
    console.log("archivoTextura", archivosTexturas)
    generarBotonesTextura();
  });
}

function generarBotonesTextura() {
  var bandera = false;
  var gridTexturas = document.getElementById("btn-grid");
  var gridTexturas1 = document.getElementById("btn-grid1");
  var gridTexturas2 = document.getElementById("btn-grid2");
  var gridTexturas3 = document.getElementById("btn-grid3");
  var texturasHTML = "";
  var texturasHTML1 = "";
  var texturasHTML2 = "";
  var texturasHTML3 = "";
  /*archivosTexturas.forEach((x) => {
      texturasHTML = texturasHTML + generarBotonImagen(x.chico, x.medio);
      if (bandera == false) {
          texturasHTML1 = texturasHTML1 + generarBotonImagen(x.chico, x.medio);
          bandera = true;
      } else {
          bandera = false;
          texturasHTML2 = texturasHTML2 + generarBotonImagen(x.chico, x.medio);
      }
  });*/
  archivosTexturas[0].lonas.forEach((x) => {
    texturasHTML = texturasHTML + generarBotonImagen(x.chico, x.medio);
  });
  archivosTexturas[0].gamuzas.forEach((x) => {
    texturasHTML1 = texturasHTML1 + generarBotonImagen(x.chico, x.medio);
  });
  archivosTexturas[0].tactoPiel.forEach((x) => {
    texturasHTML2 = texturasHTML2 + generarBotonImagen(x.chico, x.medio);
  });
  archivosTexturas[0].gamuzaClon.forEach((x) => {
    texturasHTML3 = texturasHTML3 + generarBotonImagen(x.chico, x.medio);
  });

  //console.log(texturasHTML);
  gridTexturas.innerHTML = texturasHTML;
  gridTexturas1.innerHTML = texturasHTML1;
  gridTexturas2.innerHTML = texturasHTML2;
  gridTexturas3.innerHTML = texturasHTML3;
}

function generarBotonImagen(srcImagenChico, srcImagenMedio) {
  var btnImagen = `<input type="image" src="assets/texturas/chico/` + srcImagenChico + `" class="btn-imagen-grid" id="` + srcImagenMedio + `"  onclick="cambiarTexturaCliente('` + srcImagenMedio + `');"/>`;
  return btnImagen;
}
function cambiarVistaTexturas(opc) {

  padres = [];
  switch (opc) {
    case 0:

      break;
    case 1:
      var tabTexturas = document.getElementById("tab-texturas");
      tabTexturas.innerHTML =
        `
          <li role="presentation">
              <a id="tab-lona" class="tabLink" href="#tab-id-0" aria-controls="tab-id-0" role="tab"
                data-toggle="tab">
                <span>Lona</span>
              </a>
            </li>
            <li  role="presentation">
              <a id="tab-gamuza" class="tabLink" href="#tab-id-1" aria-controls="tab-id-1" role="tab"
                data-toggle="tab">
                <span>Gamuza</span>
              </a>
            </li>
            <li role="presentation">
              <a id="tab-tacto-piel" class="tabLink" href="#tab-id-2" aria-controls="tab-id-2" role="tab"
                data-toggle="tab">
                <span>Tacto piel</span>
              </a>
            </li>
          `;
      document.getElementById("tab-lona").click();
      break;
    case 2:

      break;

    default:
      break;
  }
}
function cambiarTexturaCliente(nombreTextura) {
  var descripcionTextura = document.getElementById("descripcionMaterial");
  var textura = document.getElementById("img-textura-catalago");
  textura.src = `assets/texturas/medio/${nombreTextura}`;
  console.log(nombreTextura);
  descripcionTextura.innerHTML = nombreImagenTextura(nombreTextura);
}
function nombreImagenTextura(nombreTextura) {
  var transformada = nombreTextura.split(" ");
  transformada[0] = transformada[0].toLowerCase();
  transformada[1] = transformada[1].charAt(0).toUpperCase() + transformada[1].slice(1);
  transformada[1] = transformada[1].replace(".jpg", "");
  transformada[1] = transformada[1].replace("medio", "");
  transformada[1] = transformada[1].toLowerCase();
  return transformada[0] + " " + transformada[1];
}
function opMaterial(opc) {

  var selector = document.getElementById("selector-textura");
  var descripcionMaterial = document.getElementById("descripcionMaterial");
  var imgaenTextura = document.getElementById("img-textura-catalago");
  switch (opc) {
    case 0:
      descripcionMaterial.innerHTML = "Material";
      imgaenTextura.src = "";
      selector.classList.add("esconder");
      break;
    case 1:
      selector.classList.remove("esconder");
      break;
    default:
      break;
  }

}
