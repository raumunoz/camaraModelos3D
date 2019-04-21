const catalogo = "http://protoweb.zacsoft.com/campomarte/service/get/getProductos.php";
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
      /* inflarSliderYooko();
       inflarSlider("sliderPuffino", puffino, false);
       inflarSlider("sliderKids", kids, false);*/
      inflarPuffinoIndex();
      inflarKidsIndex();
      inflarYookoIndex();
    }).catch(function () {
      /*si hay errores hacer esto */
      console.log("error");
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
  var sliderPuffino = document.getElementById("sliderPuffino");
  var htmlSliderPuffino = "";
  var objeto;
  var liPuffino =
    `
  <li>
    <a style="cursor: pointer;" onclick="cargarModeloCustom(modelos.puffino[0],this)">
      <div class="text-center">
        <div class="product" style="margin-top: 1em;">
          <div class="product-grid"
            style="background-image:url(images/productos/puffino/atlixco.jpg); margin: 0 auto;">
          </div>
          <div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
            <h3 style="line-height: 30px;"><a class="nomProducto">Yumil</a></h3>
            <span class="priceProducto">$2599</span>
          </div>
          <div class="medidas">
            <span>(46cm x 46cm x 46cm)</span>
          </div>
        </div>
      </div>
    </a>
    <button type="button"
      onclick="agregarAlCarrito('Yumil',2599,'images/productos/puffino/atlixco.jpg',this)"
      class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
  </li>
    `;
  for (let i = 0; i < puffino.length; i++) {
    
    htmlSliderPuffino = htmlSliderPuffino +
      `
      <li>
        <a style="cursor: pointer;" onclick="cargarModeloCustom(puffino[${i}],this)">
          <div class="text-center">
            <div class="product" style="margin-top: 1em;">
              <div class="product-grid"
                style="background-image:url(${puffino[i].imagenes[0].imagen}); margin: 0 auto;">
              </div>
              <div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
                <h3 style="line-height: 30px;"><a class="nomProducto">${puffino[i].apodo}</a></h3>
                <span class="priceProducto">$${puffino[i].precio}</span>
              </div>
              <div class="medidas">
              <span>alto: ${(parseFloat(puffino[i].dimensiones[0].alto).toFixed(2)) * 100}cm, ancho: ${(parseFloat(puffino[i].dimensiones[0].ancho).toFixed(2)) * 100}cm, largo: ${(parseFloat(puffino[i].dimensiones[0].largo).toFixed(2)) * 100}cm</span>
              </div>
            </div>
          </div>
        </a>
        <button type="button"
          onclick="agregarAlCarrito('${puffino[i].apodo}',${puffino[i].precio},'${puffino[i].imagenes[0].imagen}',this)"
          class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
      </li>
        `;
  }
  sliderPuffino.innerHTML = htmlSliderPuffino;
  /*
  puffino.forEach((puff)=>{
    console.log("puff a cargar",objeto);
    htmlSliderPuffino=htmlSliderPuffino+
    `
    <li>
      <a style="cursor: pointer;" onclick="cargarModeloCustom(${puff},this)">
        <div class="text-center">
          <div class="product" style="margin-top: 1em;">
            <div class="product-grid"
              style="background-image:url(${puff.imagenes[0].imagen}); margin: 0 auto;">
            </div>
            <div class="desc" style="margin-top: 1em; margin-bottom: 1.2em;">
              <h3 style="line-height: 30px;"><a class="nomProducto">Yumil</a></h3>
              <span class="priceProducto">$${puff.precio}</span>
            </div>
            <div class="medidas">
              <span>${puff.dimensiones[0].largo} cm de largo x ${puff.dimensiones[0].ancho}  cm de y ${puff.dimensiones[0].alto} cm de alto.</span>
            </div>
          </div>
        </div>
      </a>
      <button type="button"
        onclick="agregarAlCarrito('${puff.apodo}',${puff.precio},'${puff.imagenes[0].imagen}',this)"
        class="btn-agregar" id="btn-agregar blue btn">Añadir al carrito</button>
    </li>
      `;
  //agregarAlCarrito('${tabureteMatch.apodo}',${tabureteMatch.precio},'${tabureteMatch.imagenes[0].imagen}
  });
  */
  sliderPuffino.innerHTML = htmlSliderPuffino;
}
function inflarKidsIndex() {
  var sliderKids = document.getElementById("sliderYoko");
  var htmlSliderKids = "";
  var liKids =
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
  for (let i = 0; i < kids.length; i++) {
    htmlSliderKids = htmlSliderKids +
      `
      <li>
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
  sliderYooko.innerHTML=htmlSliderEsquinas+htmlSliderTaburetes+htmlSliderBrazos;
}
