const catalogo = "http://protoweb.zacsoft.com/campomarte/service/get/getProductos.php";
let respuesta;
let brazos;
let esquinas;
let kids;
let puffino;
let taburetes;
let trendy;
let casual;
let contempo;
let opCa = {
  startAt: 0, 
  type: 'carousel', 
  autoplay: 4000, 
  focusAt: 'center', 
  perView: 2, 
  hoverpause: true, 
  breakpoints: {
    2000: {
      perView: 3
    },
    1000: {
      perView: 2
    },
    800: {
      perView: 1
    },
    500: {
      perView: 1
    }
  }
};
let puffinoprimera = false;
let puffinoEspera = false;
let kidsprimera = false;
let kidsEspera = false;
let contempoEspera = false;
let contempoprimera = false;
let trendyEspera = false;
let trendyprimera = false;
let casualEspera = false;
let casualprimera = false;

var contempoDiv;
var trendyDiv;
var casualDiv;
var yookoDiv;
var puffinoDiv;
var kidsDiv;
var glideKids;
var glideTrendy; 
var glideCasual; 
var glideYooko;
var glidePuffino; 
var glideKids ;
var glideContempo;
window.addEventListener('load', function () {
  requestModulosJSON(catalogo);
  
  subYooko=document.getElementById("showYookoSelecion");
  yookoDiv = document.getElementById("yooko");
  puffinoDiv = document.getElementById("puffino");
  kidsDiv = document.getElementById("kids");
  contempoDiv = document.getElementById("contempo");
  trendyDiv = document.getElementById("trendy");
  casualDiv = document.getElementById("casual");
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
      /* inflarSliderYooko();
       inflarSlider("sliderPuffino", puffino, false);
       inflarSlider("sliderKids", kids, false);*/
      inflarPuffinoIndex();
      inflarKidsIndex();
      inflarYookoIndex();
      inflarSliderTrendy();
      inflarSliderCasual();
      inflarSliderContempo();
    

    }).then(function () {
      modelos.taburetes = actulizarArregloLocal(taburetes);
      modelos.brazos = actulizarArregloLocal(brazos);
      modelos.esquinas = actulizarArregloLocal(esquinas);
      modelos.puffino = actulizarArregloLocal(puffino);
      modelos.kids = actulizarArregloLocal(kids);
      //cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true));
      cambiarVistaMotor(1);
      document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
      cargarModeloCustom(modelos.puffino[10], undefined);
    }).catch(function (error) {
      /*si hay errores hacer esto */
      console.log("error", error);
    });

}

function propiedadesArreglo(arreglo) {
  arreglo.forEach((item) => {
    //arreglo.dimensiones = Object.values(arreglo.dimensiones);
    item.imagenes = Object.values(item.imagenes);
  });
}
function inflarYookosIndex() {
  var sliderYooko = document.getElementById("sliderYoko");
  var liYooko =
    `
              <li>
								<a style="cursor: pointer;" onclick="cambioModulo(0,true)">
									<div class="text-center">
										<div class="product" style="margin-top: 1em;">
											<div class="product-grid"
												style="background-image:url(images/catalogo/yoko/yookocasual_esquinero.jpg); margin: 0 auto;">
											</div>
											<div class="desc" style="margin-top: 1em;">
												<h3><a class="nomProducto">Yooko Casual Esquinero</a></h3>
												<span class="priceProducto">$8799</span>
											</div>
										</div>
									</div>
								</a>
								<button type="button"
									onclick="agregarAlCarrito('Yoko sillón',7999,'images/catalogo/yoko/yookocasual_esquinero.jpg',this)"
									class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
							</li>
    `;
}
function inflarPuffinoIndex() {
  var sliderPuffino = document.getElementById("ul-puffino");
  var htmlSliderPuffino = "";
  var objeto;
  for (let i = 0; i < puffino.length; i++) {

    htmlSliderPuffino = htmlSliderPuffino +
      `
    <li class="glide__slide">
  
                    <a style="cursor: pointer;" onclick="cargarModeloCustom(puffino[${i}],this)">
                    <div class="text-center">
                      <div class="product" style="margin-top: 1em;">
                        <div class="product-grid"
                          style="background-image:url(${puffino[i].imagenes[0].imagen}); margin: 0 auto;">
                        </div>
                        <div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
                          <h3 style="line-height: 30px;"><a class="nomProducto">${puffino[i].apodo}</a></h3>
                          <span class="priceProducto">$3499</span>
                        </div>
                        <div class="medidas">
                          <span>alto: ${(parseFloat(puffino[i].dimensiones[0].alto).toFixed(2)) * 100}cm, ancho: ${(parseFloat(puffino[i].dimensiones[0].ancho).toFixed(2)) * 100}cm, largo: ${(parseFloat(puffino[i].dimensiones[0].largo).toFixed(2)) * 100}cm</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button type="button"
                    onclick="agregarAlCarrito('${puffino[i].apodo}',${puffino[i].precio},'${puffino[i].imagenes[0].imagen}')"
                    class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
          </li>
        `;
  }
  sliderPuffino.innerHTML = htmlSliderPuffino;
}
function inflarKidsIndex() {
  var sliderKids = document.getElementById("ul-kids");
  var htmlSliderKids = "";
  for (let i = 0; i < kids.length; i++) {
    htmlSliderKids = htmlSliderKids +
      `
  <li class="glide__slide">

									<a style="cursor: pointer;" onclick="cargarModeloCustom(kids[${i}],this)">
									<div class="text-center">
										<div class="product" style="margin-top: 1em;">
											<div class="product-grid"
												style="background-image:url(${kids[i].imagenes[0].imagen}); margin: 0 auto;">
											</div>
											<div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
												<h3 style="line-height: 30px;"><a class="nomProducto">${kids[i].apodo}</a></h3>
												<span class="priceProducto">$3499</span>
											</div>
											<div class="medidas">
												<span>alto: ${(parseFloat(kids[i].dimensiones[0].alto).toFixed(2)) * 100}cm, ancho: ${(parseFloat(kids[i].dimensiones[0].ancho).toFixed(2)) * 100}cm, largo: ${(parseFloat(kids[i].dimensiones[0].largo).toFixed(2)) * 100}cm</span>
											</div>
										</div>
									</div>
								</a>
								<button type="button"
									onclick="agregarAlCarrito('${kids[i].apodo}',${kids[i].precio},'${kids[i].imagenes[0].imagen}')"
									class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
				</li>
      `;
  }
  sliderKids.innerHTML = htmlSliderKids;

}
function inflarYookoIndex() {
  /*silla taburete esquinero */
  var sliderYooko = document.getElementById("sliderYoko");
  var htmlSliderBrazos = "";
  var htmlSliderTaburetes = "";
  var htmlSliderEsquinas = "";
  var liBrazos =
    `
  <li>
    <a style="cursor: pointer;" onclick="cambioModulo(0,true)">
      <div class="text-center">
        <div class="product" style="margin-top: 1em;">
          <div class="product-grid"
            style="background-image:url(images/catalogo/yoko/yookocasual_esquinero.jpg); margin: 0 auto;">
          </div>
          <div class="desc" style="margin-top: 1em;">
            <h3><a class="nomProducto">Yooko Casual Esquinero</a></h3>
            <span class="priceProducto">$8799</span>
          </div>
        </div>
      </div>
    </a>
    <button type="button"
      onclick="agregarAlCarrito('Yoko sillón',7999,'images/catalogo/yoko/yookocasual_esquinero.jpg',this)"
      class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
  </li>
    `;
  var liTaburetes =
    `
  <li>
    <a style="cursor: pointer;" onclick="cambioModulo(1,true)">
      <div class="text-center">
        <div class="product" style="margin-top: 1em;">
          <div class="product-grid"
            style="background-image:url(images/catalogo/yoko/yookocasual_silla.jpg); margin: 0 auto;">
          </div>
          <div class="desc" style="margin-top: 1em;">
            <h3><a class="nomProducto">Yooko Casual Silla</a></h3>
            <span class="priceProducto">$8599</span>
          </div>
        </div>
      </div>
    </a>
    <button type="button"
      onclick="agregarAlCarrito('Yoko sillón',7999,'images/catalogo/yoko/yookocasual_silla.jpg',this)"
      class="btn-agregar " id="btn-agregar blue btn">Añadir al carrito</button>
  </li>
    `;
  var liEsquinas =
    `
  <li>
    <a style="cursor: pointer;" onclick="cambioModulo(2,true)">
      <div class="text-center">
        <div class="product" style="margin-top: 1em;">
          <div class="product-grid"
            style="background-image:url(images/catalogo/yoko/yookocasual_taburete.jpg); margin: 0 auto;">
          </div>
          <div class="desc" style="margin-top: 1em;">
            <h3><a class="nomProducto">Yooko Casual Taburete</a></h3>
            <span class="priceProducto">$7099</span>
          </div>
        </div>
      </div>
    </a>
    <button type="button"
      onclick="agregarAlCarrito('Yoko esquinero',8999,'images/catalogo/yoko/yookocasual_taburete.jpg')"
      class="btn-agregar " id="btn-agregar blue btn">Añadir al carrito</button>
  </li>
    `;
  for (let i = 0; i < brazos.length; i++) {
    htmlSliderBrazos = htmlSliderBrazos +
      `
    <li>
      <a style="cursor: pointer;" onclick="cambioModulo(2,true)">
        <div class="text-center">
          <div class="product" style="margin-top: 1em;">
            <div class="product-grid"
              style="background-image:url(${brazos[i].imagenes[0].imagen}); margin: 0 auto;">
            </div>
            <div class="desc" style="margin-top: 1em;">
              <h3><a class="nomProducto">${brazos[i].apodo}</a></h3>
              <span class="priceProducto">$${brazos[i].precio}</span>
            </div>
          </div>
        </div>
      </a>
      <button type="button"
        onclick="agregarAlCarrito('${brazos[i].apodo}',${brazos[i].precio},'${brazos[i].imagenes[0].imagen}',this)"
        class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
    </li>
      `;
  }
  for (let i = 0; i < brazos.length; i++) {
    htmlSliderTaburetes = htmlSliderTaburetes +
      `
      <li>
      <a style="cursor: pointer;" onclick="cambioModulo(1,true)">
        <div class="text-center">
          <div class="product" style="margin-top: 1em;">
            <div class="product-grid"
              style="background-image:url(${taburetes[i].imagenes[0].imagen}); margin: 0 auto;">
            </div>
            <div class="desc" style="margin-top: 1em;">
              <h3><a class="nomProducto">${taburetes[i].apodo}</a></h3>
              <span class="priceProducto">$${taburetes[i].precio}</span>
            </div>
          </div>
        </div>
      </a>
      <button type="button"
        onclick="agregarAlCarrito('${taburetes[i].apodo}',${taburetes[i].precio},'${taburetes[i].imagenes[0].imagen}',this)"
        class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
    </li>
      `;
  }
  for (let i = 0; i < brazos.length; i++) {
    htmlSliderEsquinas = htmlSliderEsquinas +
      `
      <li>
      <a style="cursor: pointer;" onclick="cambioModulo(0,true)">
        <div class="text-center">
          <div class="product" style="margin-top: 1em;">
            <div class="product-grid"
              style="background-image:url(${esquinas[i].imagenes[0].imagen}); margin: 0 auto;">
            </div>
            <div class="desc" style="margin-top: 1em;">
              <h3><a class="nomProducto">${esquinas[i].apodo}</a></h3>
              <span class="priceProducto">$${esquinas[i].precio}</span>
            </div>
          </div>
        </div>
      </a>
      <button type="button"
        onclick="agregarAlCarrito('${esquinas[i].apodo}',${esquinas[i].precio},'${esquinas[i].imagenes[0].imagen}',this)"
        class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
    </li>
      `;
  }
  sliderYooko.innerHTML = htmlSliderEsquinas + htmlSliderTaburetes + htmlSliderBrazos;
}
function actulizarArregloLocal(arryNew) {
  var arryLocal = [];
  var dimensiones = {};
  var precio;
  var data = {};
  for (let index = 0; index < arryNew.length; index++) {
    dimensiones.largo = parseFloat(arryNew[index].dimensiones[0].largo);
    dimensiones.ancho = parseFloat(arryNew[index].dimensiones[0].ancho);
    dimensiones.alto = parseFloat(arryNew[index].dimensiones[0].alto);
    precio = parseFloat(arryNew[index].precio);

    data = {
      "apodo": arryNew[index].apodo,
      "nombre": arryNew[index].nombre,
      "dimensiones": dimensiones,
      "precio": precio,
      "imagenes": arryNew[index].imagenes,
      "index": arryNew[index].index,
      "descripcion": arryNew[index].descripcion,
    }

    arryLocal.push(data);
  }
  return arryLocal;
}
function mostrarSubmenu() {
  document.getElementById("showYookoSelecion").classList.toggle("sub-menu-desactivo");
}

function inflarSlider(id, arreglo, encadenar, nombre) {
  var slider = document.getElementById(id);
  var htmlSlider = '';
  for (let i = 0; i < arreglo.length; i++) {
    htmlSlider = htmlSlider +
      `
        <li class="glide__slide">
  
                    <a style="cursor: pointer;" onclick="cargarModeloCustom(${nombre}[${i}],this)">
                    <div class="text-center">
                      <div class="product" style="margin-top: 1em;">
                        <div class="product-grid"
                          style="background-image:url(${arreglo[i].imagenes[0].imagen}); margin: 0 auto;">
                        </div>
                        <div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
                          <h3 style="line-height: 30px;"><a class="nomProducto">${arreglo[i].apodo}</a></h3>
                          <span class="priceProducto">$3499</span>
                        </div>
                        <div class="medidas">
                          <span>alto: ${(parseFloat(arreglo[i].dimensiones[0].alto).toFixed(2)) * 100}cm, ancho: ${(parseFloat(arreglo[i].dimensiones[0].ancho).toFixed(2)) * 100}cm, largo: ${(parseFloat(arreglo[i].dimensiones[0].largo).toFixed(2)) * 100}cm</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <button type="button"
                    onclick="agregarAlCarrito('${arreglo[i].apodo}',${arreglo[i].precio},'${arreglo[i].imagenes[0].imagen}')"
                    class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
          </li>
        
    `;
  }
  if (typeof encadenar !== "undefined") {
    if (encadenar) {
      return htmlSlider;
    } else {
      slider.innerHTML = htmlSlider;
    }
  }


}
function inflarSliderCasual() {
  casual = [];
  var tabureteContempo;
  var esquinaContempo;
  var brazoContempo;
  taburetes.forEach((x) => { if (x.apodo.includes("Casual")) { tabureteContempo = x; casual.push(tabureteContempo); } });
  brazos.forEach((x) => { if (x.apodo.includes("Casual")) { brazoContempo = x; casual.push(brazoContempo); } });
  esquinas.forEach((x) => { if (x.apodo.includes("Casual")) { esquinaContempo = x; casual.push(esquinaContempo); } });

  var yookoHtml = "";
  yookoHtml = inflarSlider("ul-casual", casual, true, "casual");
  document.getElementById("ul-casual").innerHTML = yookoHtml;
}
function inflarSliderContempo() {
  contempo = [];
  var tabureteContempo;
  var esquinaContempo;
  var brazoContempo;
  taburetes.forEach((x) => { if (x.apodo.includes("Contempo")) { tabureteContempo = x; contempo.push(tabureteContempo); } });
  brazos.forEach((x) => { if (x.apodo.includes("Contempo")) { brazoContempo = x; contempo.push(brazoContempo); } });
  esquinas.forEach((x) => { if (x.apodo.includes("Contempo")) { esquinaContempo = x; contempo.push(esquinaContempo); } });

  var yookoHtml = "";
  yookoHtml = inflarSlider("ul-contempo", contempo, true, "contempo");
  document.getElementById("ul-contempo").innerHTML = yookoHtml;
}
function inflarSliderTrendy() {
  trendy = [];
  var tabureteContempo;
  var esquinaContempo;
  var brazoContempo;
  taburetes.forEach((x) => { if (x.apodo.includes("Trendy")) { tabureteContempo = x; trendy.push(tabureteContempo); } });
  brazos.forEach((x) => { if (x.apodo.includes("Trendy")) { brazoContempo = x; trendy.push(brazoContempo); } });
  esquinas.forEach((x) => { if (x.apodo.includes("Trendy")) { esquinaContempo = x; trendy.push(esquinaContempo); } });

  var yookoHtml = "";
  yookoHtml = inflarSlider("ul-trendy", trendy, true, "trendy");
  document.getElementById("ul-trendy").innerHTML = yookoHtml;
}
function accionarTodosSliders() {
  yookoSliderContempo = new Glide('.glide-kids', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-trendy', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-casual', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-yooko ', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-puffino', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-kids', opCa);
  yookoSliderContempo.mount();
  yookoSliderContempo = new Glide('.glide-contempo', opCa);
  yookoSliderContempo.mount();
}
function opMostrarSlider(opc){
 

  glideKids = new Glide('.glide-kids', opCa);
  glideTrendy = new Glide('.glide-trendy', opCa);
  glideCasual = new Glide('.glide-casual', opCa);
  glideYooko = new Glide('.glide-yooko ', opCa);
  glidePuffino = new Glide('.glide-puffino', opCa);
  glideKids = new Glide('.glide-kids', opCa);
  glideContempo = new Glide('.glide-contempo', opCa);
  switch (opc) {
      case 0:
      cambiarVistaMotor(0);
      casualDiv.classList.add("oculto");
      contempoDiv.classList.add("oculto");
      trendyDiv.classList.add("oculto");
      yookoDiv.classList.add("oculto");
      puffinoDiv.classList.add("oculto");
      kidsDiv.classList.add("oculto");
      subYooko.classList.toggle("sub-menu-desactivo");
      break;
      case 1:
      cambiarVistaMotor(1);
      
      casualDiv.classList.add("oculto");
      contempoDiv.classList.add("oculto");
      trendyDiv.classList.add("oculto");
      yookoDiv.classList.add("oculto");
      puffinoDiv.classList.toggle("oculto");
      kidsDiv.classList.add("oculto");
      subYooko.classList.add("sub-menu-desactivo");
      kidsprimera = false;
      puffinoEspera = true;
      if (puffinoprimera == false) {
        puffinoprimera = true;
        puffinoEspera = true;
        glidePuffino.destroy();
        glidePuffino = new Glide('.glide-puffino', opCa);
        setTimeout(function () {
          glidePuffino.mount();
            puffinoEspera = false;
            console.log("en espera", puffinoEspera);
        }, 1500);
    } else {
      if (puffinoEspera == false) {
        puffinoEspera = true;
        glidePuffino.destroy();
        glidePuffino = new Glide('.glide-puffino', opCa);
        setTimeout(function () {
          glidePuffino.mount();
            console.log("en espera", puffinoEspera);
            puffinoEspera = false;
        }, 1500);
    }
    }
      break;
      case 2:
      puffinoprimera = false;
      kidsEspera = true;
      cambiarVistaMotor(2);
      casualDiv.classList.add("oculto");
      contempoDiv.classList.add("oculto");
      trendyDiv.classList.add("oculto");
      yookoDiv.classList.add("oculto");
      puffinoDiv.classList.add("oculto");
      kidsDiv.classList.toggle("oculto");
      subYooko.classList.add("sub-menu-desactivo");
      if (kidsprimera == false) {
        kidsprimera = true;
        kidsEspera = true;
        glideKids.destroy();
        glideKids= new Glide('.glide-kids',opCa);
        setTimeout(function () {
          glideKids.mount();
          kidsEspera = false;
          console.log("en espera kids", kidsEspera);
      }, 1500);
      }else{
        if(kidsEspera == false) {
          kidsEspera=true;
          kidsSlider.destroy();
          kidsSlider = new Glide('.glide-kids', opCa);
        }
        setTimeout(function () {
          glideKids.mount();
          console.log("en espera", kidsEspera);
          kidsEspera = false;
      }, 1500);
      }
      break;
      case 3:
      casualDiv.classList.add("oculto");
      contempoDiv.classList.add("oculto");
      trendyDiv.classList.toggle("oculto");
      yookoDiv.classList.add("oculto");
      puffinoDiv.classList.add("oculto");
      kidsDiv.classList.add("oculto");
    
      break;
      case 4:
      casualDiv.classList.add("oculto");
      contempoDiv.classList.toggle("oculto");
      trendyDiv.classList.add("oculto");
      yookoDiv.classList.add("oculto");
      puffinoDiv.classList.add("oculto");
      kidsDiv.classList.add("oculto");
     
      break;
      default:
      break;
  }
}

function mostrarSliderContempo() {
  casualDiv.classList.add("oculto");
  trendyDiv.classList.add("oculto");
  contempoDiv.classList.toggle("oculto");
  glideContempo.destroy();
 

  glideContempo = new Glide('.glide-contempo', opCa);

  if (!contempoEspera) {
      contempoEspera = true;
      setTimeout(function () {
        glideContempo.mount();
          contempoEspera = false;
          console.log("en espera contempo", contempoEspera);
      }, 1500);
  }
}

function mostrarSliderTrendy() {
  casualDiv.classList.add("oculto");
  trendyDiv.classList.toggle("oculto");
  contempoDiv.classList.add("oculto");
  glideTrendy.destroy();
 
  glideTrendy = new Glide('.glide-trendy', opCa);

  if (!trendyEspera) {
      trendyEspera = true;
      setTimeout(function () {
        glideTrendy.mount();
          trendyEspera = false;
          console.log("en espera kids", trendyEspera);
      }, 1500);
  }
}

function mostrarSliderCasual() {
  casualDiv.classList.toggle("oculto");
  trendyDiv.classList.add("oculto");
  contempoDiv.classList.add("oculto");
  glideCasual.destroy();

  glideCasual = new Glide('.glide-casual', opCa);
  if (!casualEspera) {
      casualEspera = true;
      setTimeout(function () {
      glideCasual.mount();
          casualEspera = false;
          console.log("en espera casual", casualEspera);
      }, 1500);
  }
}