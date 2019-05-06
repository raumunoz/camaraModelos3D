//https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js
let yookoSlider;
let yookoSliderContempo;
let yookoSliderTrendy;
let yookoSliderCasual;
let puffinoSlider;
let kidsSlider;
let detallesSlider;
const catalogo = "http://protoweb.zacsoft.com/campomarte/service/get/getProductos.php";
let respuesta;
let brazos;
let esquinas;
let kids;
let puffino;
let taburetes;
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
var contempoDiv
var trendyDiv
var casualDiv
window.addEventListener('load', function () {
    requestModulosJSON(catalogo);
    cargarJsonTexturas();
    cambiarVistaTexturas(1)
    var yookoDiv = document.getElementById("yooko");
    var puffinoDiv = document.getElementById("puffino");
    var kidsDiv = document.getElementById("kids");
    contempoDiv = document.getElementById("contempo");
    trendyDiv = document.getElementById("trendy");
    casualDiv = document.getElementById("casual");

    yookoSliderContempo = new Glide('.glide-contempo', {
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
    });
    yookoSliderTrendy = new Glide('.glide-trendy', {
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
    });
    yookoSliderCasual = new Glide('.glide-casual', {
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
    });
    yookoSlider = new Glide('.glide-yooko', {
        startAt: 0,
        type: 'carousel',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2,
        hoverpause: true,
        breakpoints: {
            2000: {
                perView: 5
            },
            1000: {
                perView: 4
            },
            800: {
                perView: 3
            },
            500: {
                perView: 1
            }
        }
    });
    puffinoSlider = new Glide('.glide-puffino', {
        startAt: 0,
        type: 'carousel',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2,
        hoverpause: true,
        breakpoints: {
            2000: {
                perView: 5
            },
            1000: {
                perView: 4
            },
            800: {
                perView: 3
            },
            500: {
                perView: 1
            }
        }
    });
    kidsSlider = new Glide('.glide-kids', {
        startAt: 0,
        type: 'carousel',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2,
        hoverpause: true,
        breakpoints: {
            2000: {
                perView: 5
            },
            1000: {
                perView: 4
            },
            800: {
                perView: 3
            },
            500: {
                perView: 1
            }
        }
    });
    detallesSlider = new Glide('.glide-detalles', {
        startAt: 0,
        type: 'carousel',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2,
        hoverpause: true,
        breakpoints: {
            2000: {
                perView: 5
            },
            1000: {
                perView: 4
            },
            800: {
                perView: 3
            },
            500: {
                perView: 1
            }
        }
    });
    casualDiv.classList.toggle("oculto");
    contempoDiv.classList.toggle("oculto");
    trendyDiv.classList.toggle("oculto");
    yookoDiv.classList.toggle("oculto");
    puffinoDiv.classList.toggle("oculto");
    kidsDiv.classList.toggle("oculto");
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
            inflarPuffinos();
            inflarKids();
            inflarSliderContempo();
            inflarSliderCasual();
            inflarSliderTrendy();

            //inflarSliderYooko();
            //inflarSlider("sliderPuffino", puffino, false);
            //inflarSlider("sliderKids", kids, false);
        }).then(function () {
            yookoSlider.mount();
            puffinoSlider.mount();
            kidsSlider.mount();
            detallesSlider.mount();
        }).catch(function (error) {
            /*si hay errores hacer esto */
            console.log("error", error);
        });

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
function cambiarSlider(opc) {
    console.log("en espera", kidsEspera);

    var sliderContempo = document.getElementById("contempo");
    var sliderTrendy = document.getElementById("trendy");
    var sliderCasual = document.getElementById("casual");

    var subSeleccion = document.getElementById("showYookoSelecion");
    var sliderYooko = document.getElementById("yooko");
    var sliderPuffino = document.getElementById("puffino");
    var sliderKids = document.getElementById("kids");
    switch (opc) {
        case 0:
            document.getElementById("detailP").classList.add("oculto");
            puffinoprimera = false;
            kidsEspera = true;
            cambiarTabTexturas(2);

            sliderContempo.classList.add("oculto");
            sliderTrendy.classList.add("oculto");
            sliderCasual.classList.add("oculto");
            subSeleccion.classList.add("oculto");

            sliderYooko.classList.add("oculto");


            sliderPuffino.classList.add("oculto");
            sliderKids.classList.toggle("oculto");
            if (kidsprimera == false) {
                kidsprimera = true;
                kidsEspera = true;
                kidsSlider.destroy();
                kidsSlider = new Glide('.glide-kids', {
                    startAt: 0,
                    type: 'carousel',
                    autoplay: 4000,
                    focusAt: 'center',
                    perView: 2,
                    hoverpause: true,
                    breakpoints: {
                        2000: {
                            perView: 5
                        },
                        1000: {
                            perView: 4
                        },
                        800: {
                            perView: 3
                        },
                        500: {
                            perView: 1
                        }
                    }
                });
                setTimeout(function () {
                    kidsSlider.mount();
                    kidsEspera = false;
                    console.log("en espera kids", kidsEspera);
                }, 1500);
            } else {
                if (kidsEspera == false) {
                    kidsEspera = true;
                    kidsSlider.destroy();
                    kidsSlider = new Glide('.glide-kids', {
                        startAt: 0,
                        type: 'carousel',
                        autoplay: 4000,
                        focusAt: 'center',
                        perView: 2,
                        hoverpause: true,
                        breakpoints: {
                            2000: {
                                perView: 5
                            },
                            1000: {
                                perView: 4
                            },
                            800: {
                                perView: 3
                            },
                            500: {
                                perView: 1
                            }
                        }
                    });
                    setTimeout(function () {
                        kidsSlider.mount();
                        console.log("en espera", kidsEspera);
                        kidsEspera = false;
                    }, 1500);
                }
            }
            break;
        case 1:
            cambiarTabTexturas(1);
            document.getElementById("detailP").classList.add("oculto");
            kidsprimera = false;
            puffinoEspera = true;
            sliderContempo.classList.add("oculto");
            sliderTrendy.classList.add("oculto");
            sliderCasual.classList.add("oculto");
            subSeleccion.classList.add("oculto");

            sliderYooko.classList.add("oculto");
            sliderPuffino.classList.toggle("oculto");
            sliderKids.classList.add("oculto");
            if (puffinoprimera == false) {
                puffinoprimera = true;
                puffinoEspera = true;
                puffinoSlider.destroy();
                puffinoSlider = new Glide('.glide-puffino', {
                    startAt: 0,
                    type: 'carousel',
                    autoplay: 4000,
                    focusAt: 'center',
                    perView: 2,
                    hoverpause: true,
                    breakpoints: {
                        2000: {
                            perView: 5
                        },
                        1000: {
                            perView: 4
                        },
                        800: {
                            perView: 3
                        },
                        500: {
                            perView: 1
                        }
                    }
                });
                setTimeout(function () {
                    puffinoSlider.mount();
                    puffinoEspera = false;
                    console.log("en espera", puffinoEspera);
                }, 1500);
            } else {
                if (puffinoEspera == false) {
                    puffinoEspera = true;
                    puffinoSlider.destroy();
                    puffinoSlider = new Glide('.glide-puffino', {
                        startAt: 0,
                        type: 'carousel',
                        autoplay: 4000,
                        focusAt: 'center',
                        perView: 2,
                        hoverpause: true,
                        breakpoints: {
                            2000: {
                                perView: 5
                            },
                            1000: {
                                perView: 4
                            },
                            800: {
                                perView: 3
                            },
                            500: {
                                perView: 1
                            }
                        }
                    });
                    setTimeout(function () {
                        puffinoSlider.mount();
                        console.log("en espera", puffinoEspera);
                        puffinoEspera = false;
                    }, 1500);
                }
            }

            break;
        case 2:
            sliderContempo.classList.add("oculto");
            sliderTrendy.classList.add("oculto");
            sliderCasual.classList.add("oculto");
            subSeleccion.classList.add("oculto");

            sliderYooko.classList.add("oculto");
            sliderPuffino.classList.add("oculto");
            sliderKids.classList.add("oculto");
            document.getElementById("showYookoSelecion").classList.toggle("oculto");
            document.getElementById("detailP").classList.add("oculto");
            break;
        default:
            break;
    }
}
function cambiarDetalle(val) {
    document.getElementById("detailP").classList.remove("oculto");
    document.getElementById("radio-opc-normal").checked = true;
    opMaterial(0);
    detallesSlider.destroy();
    detallesSlider = new Glide('.glide-detalles', {
        startAt: 0,
        type: 'carousel',
        autoplay: 3000,
        focusAt: 'center',
        perView: 2,
        hoverpause: true,
        breakpoints: {
            2000: {
                perView: 1
            },
            1000: {
                perView: 1
            },
            800: {
                perView: 1
            },
            500: {
                perView: 1
            }
        }
    });

    console.log("pantalla dettalsses");
    var opc = val.toString(10);
    var brazoMatch = brazos.find((x) => x.index == opc);
    var esquinaMatch = esquinas.find((x) => x.index == opc);
    var tabureteMatch = taburetes.find((x) => x.index == opc);
    var kidMatch = kids.find((x) => x.index == opc);
    var puffinoMatch = puffino.find((x) => x.index == opc);
    if (typeof brazoMatch !== "undefined") {
        console.log("se encontro un brazo", brazoMatch);
        document.getElementById('nombreP').innerHTML = brazoMatch.apodo;
        document.getElementById('medidasP').innerHTML = `Mide ${brazoMatch.dimensiones[0].largo} cm de largo x ${brazoMatch.dimensiones[0].ancho} cm de y ${brazoMatch.dimensiones[0].alto} cm de alto.`;
        document.getElementById('descriptionP').innerHTML = brazoMatch.descripcion;
        document.getElementById('precioP').innerHTML = `$${brazoMatch.precio}`;
        document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${brazoMatch.apodo}',${brazoMatch.precio},'${brazoMatch.imagenes[0].imagen}',this)`);
        //Galeria
        if (brazoMatch.imagenes.length > 1) {
            var imgenesHtml = "";
            brazoMatch.imagenes.forEach((imagen) => {
                imgenesHtml = imgenesHtml + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
            })
            document.getElementById('datos-slide').innerHTML = imgenesHtml;
        } else {
            document.getElementById('datos-slide').innerHTML = ''
                + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${brazoMatch.imagenes[0].imagen}"></li>`;
        }
    }
    if (typeof esquinaMatch !== "undefined") {
        console.log("se encontro una esquina", esquinaMatch);
        document.getElementById('nombreP').innerHTML = esquinaMatch.apodo;
        document.getElementById('medidasP').innerHTML = `Mide ${esquinaMatch.dimensiones[0].largo} cm de largo x ${esquinaMatch.dimensiones[0].ancho} cm de y ${esquinaMatch.dimensiones[0].alto} cm de alto.`;
        document.getElementById('descriptionP').innerHTML = esquinaMatch.descripcion;
        document.getElementById('precioP').innerHTML = `$${esquinaMatch.precio}`;
        document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${esquinaMatch.apodo}',${esquinaMatch.precio},'${esquinaMatch.imagenes[0].imagen}',this)`);
        //Galeria
        if (esquinaMatch.imagenes.length > 1) {
            var imgenesHtml = "";
            esquinaMatch.imagenes.forEach((imagen) => {
                imgenesHtml = imgenesHtml + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
            })
            document.getElementById('datos-slide').innerHTML = imgenesHtml;
        } else {
            document.getElementById('datos-slide').innerHTML = ''
                + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${esquinaMatch.imagenes[0].imagen}"></li>`;
        }
    }
    if (typeof tabureteMatch !== "undefined") {
        console.log("se encontro un taburete", tabureteMatch);
        document.getElementById('nombreP').innerHTML = tabureteMatch.apodo;
        document.getElementById('medidasP').innerHTML = `Mide ${tabureteMatch.dimensiones[0].largo} cm de largo x ${tabureteMatch.dimensiones[0].ancho} cm de y ${tabureteMatch.dimensiones[0].alto} cm de alto.`;
        document.getElementById('descriptionP').innerHTML = tabureteMatch.descripcion;
        document.getElementById('precioP').innerHTML = `$${tabureteMatch.precio}`;
        document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${tabureteMatch.apodo}',${tabureteMatch.precio},'${tabureteMatch.imagenes[0].imagen}',this)`);
        //Galeria
        if (tabureteMatch.imagenes.length > 1) {
            var imgenesHtml = "";
            tabureteMatch.imagenes.forEach((imagen) => {
                imgenesHtml = imgenesHtml + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
            })
            document.getElementById('datos-slide').innerHTML = imgenesHtml;
        } else {
            document.getElementById('datos-slide').innerHTML = ''
                + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${tabureteMatch.imagenes[0].imagen}"></li>`;
        }
    }
    if (typeof kidMatch !== "undefined") {
        console.log("se encontro un kids", kidMatch);
        document.getElementById('nombreP').innerHTML = kidMatch.apodo;
        document.getElementById('medidasP').innerHTML = `Mide ${kidMatch.dimensiones[0].largo} cm de largo x ${kidMatch.dimensiones[0].ancho} cm de y ${kidMatch.dimensiones[0].alto} cm de alto.`;
        document.getElementById('descriptionP').innerHTML = kidMatch.descripcion;
        document.getElementById('precioP').innerHTML = `$${kidMatch.precio}`;
        document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${kidMatch.apodo}',${kidMatch.precio},'${kidMatch.imagenes[0].imagen}',this)`);
        console.log("se encontro un kids", kidMatch);
        //slider
        if (kidMatch.imagenes.length > 1) {
            var imgenesHtml = "";
            kidMatch.imagenes.forEach((imagen) => {
                imgenesHtml = imgenesHtml + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
            })
            document.getElementById('datos-slide').innerHTML = imgenesHtml;
        } else {
            document.getElementById('datos-slide').innerHTML = ''
                + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${kidMatch.imagenes[0].imagen}"></li>`;
        }
    }
    if (typeof puffinoMatch !== "undefined") {
        console.log("se encontro un puffino", puffinoMatch);
        document.getElementById('nombreP').innerHTML = puffinoMatch.apodo;
        document.getElementById('medidasP').innerHTML = `Mide ${puffinoMatch.dimensiones[0].largo} cm de largo x ${puffinoMatch.dimensiones[0].ancho} cm de y ${puffinoMatch.dimensiones[0].alto} cm de alto.`;
        document.getElementById('descriptionP').innerHTML = puffinoMatch.descripcion;
        document.getElementById('precioP').innerHTML = `$${puffinoMatch.precio}`;
        document.getElementById('btn-agregar blue btn').setAttribute("onClick", `agregarAlCarrito('${puffinoMatch.apodo}',${puffinoMatch.precio},'${puffinoMatch.imagenes[0].imagen}',this)`);
        //slider iamgenes
        if (puffinoMatch.imagenes.length > 1) {
            var imgenesHtml = "";
            puffinoMatch.imagenes.forEach((imagen) => {
                imgenesHtml = imgenesHtml + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${imagen.imagen}"></li>`
            })
            document.getElementById('datos-slide').innerHTML = imgenesHtml;
        } else {
            document.getElementById('datos-slide').innerHTML = ''
                + `<li class="glide__slide"><img class="img-slider-detalles" style="max-width: 80%; margin-bottom: 0px;" src="${puffinoMatch.imagenes[0].imagen}"></li>`;
        }
    }
    setTimeout(function () {
        detallesSlider.mount();
    }, 1500);

}

function inflarPuffinos() {
    //puffinoSlider.destroy();
    var listaItems;
    var ulPuffino = document.getElementById("ul-puffino");

    listaItems = "";
    /*puffinoSlider = new Glide('.glide-puffino', {
        startAt: 0,
        type: 'slider',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2
    });*/
    for (let index = 0; index < puffino.length; index++) {
        listaItems = listaItems +
            `
        <li class="glide__slide">

						<div class="itemMueble">
							<a class="link-item-slider" style="cursor: pointer;" href="#detalles" onclick="cambiarDetalle(${puffino[index].index})">
								<div class="text-center">
									<div class="product" style="margin-top: 1em;">
										<div class="product-grid"
											style="background-image:url(${puffino[index].imagenes[0].imagen}); margin: 0 auto;">
										</div>
										<div class="desc" style="margin-top: 1em;">
											<h3><a href="#detalles" class="nomProducto">${puffino[index].apodo}</a></h3>
											<span class="priceProducto">$${puffino[index].precio}</span>
										</div>
									</div>
								</div>
							</a>
						</div>
	    </li>
        `
        ulPuffino.innerHTML = listaItems;
        //puffinoSlider.mount();

    }
}
function inflarKids() {
    //puffinoSlider.destroy();
    var listaItems;
    var ulKids = document.getElementById("ul-kids");
    listaItems = "";
    /*puffinoSlider = new Glide('.glide-puffino', {
        startAt: 0,
        type: 'slider',
        autoplay: 4000,
        focusAt: 'center',
        perView: 2
    });*/
    for (let index = 0; index < kids.length; index++) {
        listaItems = listaItems +
            `
        <li class="glide__slide">

						<div class="itemMueble">
							<a class="link-item-slider" style="cursor: pointer;" href="#detalles" onclick="cambiarDetalle(${kids[index].index})">
								<div class="text-center">
									<div class="product" style="margin-top: 1em;">
										<div class="product-grid"
											style="background-image:url(${kids[index].imagenes[0].imagen}); margin: 0 auto;">
										</div>
										<div class="desc" style="margin-top: 1em;">
											<h3><a href="#detalles" class="nomProducto">${kids[index].apodo}</a></h3>
											<span class="priceProducto">$${kids[index].precio}</span>
										</div>
									</div>
								</div>
							</a>
						</div>
	    </li>
        `
        ulKids.innerHTML = listaItems;
        //puffinoSlider.mount();

    }
}
function propiedadesArreglo(arreglo) {
    arreglo.forEach((item) => {
        //arreglo.dimensiones = Object.values(arreglo.dimensiones);
        item.imagenes = Object.values(item.imagenes);
    });
}
function opMaterial(opc) {

    var selector = document.getElementById("selector-textura");
    var descripcionMaterial = document.getElementById("descripcionMaterial");
    // var imgaenTextura = document.getElementById("img-textura-catalago");
    var divMateria = document.getElementById("div-textura-catalago")
    switch (opc) {
        case 0:
            descripcionMaterial.innerHTML = "Material";
            divMateria.innerHTML = "";
            selector.classList.add("esconder");
            break;
        case 1:
            selector.classList.remove("esconder");
            break;
        default:
            break;
    }

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
function cambiarVistaTexturas(opc) {

    padres = [];
    switch (opc) {
        case 0:

            break;
        case 1:
            var tabTexturas = document.getElementById("tab-texturas");
            tabTexturas.innerHTML =
                `
            <li role="presentation" class="contenor-tab">
                <a id="tab-lona" class="tabLink limpiarTAb " href="#tab-id-0" aria-controls="tab-id-0" role="tab"
                  data-toggle="tab">
                  <span style="color: black !important;">Lona</span>
                </a>
              </li>
              <li  role="presentation" class="contenor-tab">
                <a id="tab-gamuza" class="tabLink limpiarTAb " href="#tab-id-1" aria-controls="tab-id-1" role="tab"
                  data-toggle="tab">
                  <span style="color: black !important;">Gamuza</span>
                </a>
              </li>
              <li role="presentation" class="contenor-tab">
                <a id="tab-tacto-piel" class="tabLink limpiarTAb " href="#tab-id-2" aria-controls="tab-id-2" role="tab"
                  data-toggle="tab">
                  <span style="color: black !important;">Tacto piel</span>
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
function generarBotonImagen(srcImagenChico, srcImagenMedio) {
    var btnImagen = `<input type="image" src="assets/texturas/chico/` + srcImagenChico + `" class="btn-imagen-grid" id="` + srcImagenMedio + `"  onclick="cambiarTexturaCliente('` + srcImagenMedio + `');"/>`;
    return btnImagen;
}
function cambiarTexturaCliente(nombreTextura) {

    var descripcionTextura = document.getElementById("descripcionMaterial");
    var divTextura = document.getElementById("div-textura-catalago");
    //textura.src = `assets/texturas/medio/${nombreTextura}`;
    divTextura.innerHTML = `<img id="img-textura-catalago" src="assets/texturas/medio/${nombreTextura}" width="35%" height="50%">`;
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
function mostrarSliderContempo() {
    cambiarTabTexturas(0);
    casualDiv.classList.add("oculto");
    trendyDiv.classList.add("oculto");
    contempoDiv.classList.toggle("oculto");
    yookoSliderContempo.destroy();
    cambiarTabTexturas(0);

    yookoSliderContempo = new Glide('.glide-contempo', {
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
    });

    if (!contempoEspera) {
        contempoEspera = true;
        setTimeout(function () {
            yookoSliderContempo.mount();
            contempoEspera = false;
            console.log("en espera kids", contempoEspera);
        }, 1500);
    }
}
function mostrarSliderTrendy() {
    casualDiv.classList.add("oculto");
    trendyDiv.classList.toggle("oculto");
    contempoDiv.classList.add("oculto");
    yookoSliderContempo.destroy();
    cambiarTabTexturas(0);
    yookoSliderContempo = new Glide('.glide-trendy', {
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
    });

    if (!trendyEspera) {
        trendyEspera = true;
        setTimeout(function () {
            yookoSliderContempo.mount();
            trendyEspera = false;
            console.log("en espera kids", trendyEspera);
        }, 1500);
    }
}
function mostrarSliderCasual() {
    casualDiv.classList.toggle("oculto");
    trendyDiv.classList.add("oculto");
    contempoDiv.classList.add("oculto");
    yookoSliderContempo.destroy();
    cambiarTabTexturas(0);
    yookoSliderContempo = new Glide('.glide-casual', {
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
    });

    if (!casualEspera) {
        casualEspera = true;
        setTimeout(function () {
            yookoSliderCasual.mount();
            casualEspera = false;
            console.log("en espera casual", casualEspera);
        }, 1500);
    }
}
function inflarSliderCasual() {
    var arreglo = [];
    var tabureteContempo;
    var esquinaContempo;
    var brazoContempo;
    taburetes.forEach((x) => { if (x.apodo.includes("Casual")) { tabureteContempo = x; arreglo.push(tabureteContempo); } });
    brazos.forEach((x) => { if (x.apodo.includes("Casual")) { brazoContempo = x; arreglo.push(brazoContempo); } });
    esquinas.forEach((x) => { if (x.apodo.includes("Casual")) { esquinaContempo = x; arreglo.push(esquinaContempo); } });

    var yookoHtml = "";
    yookoHtml = inflarSlider("ul-casual", arreglo, true);
    document.getElementById("ul-casual").innerHTML = yookoHtml;
}
function inflarSliderContempo() {
    var arreglo = [];
    var tabureteContempo;
    var esquinaContempo;
    var brazoContempo;
    taburetes.forEach((x) => { if (x.apodo.includes("Contempo")) { tabureteContempo = x; arreglo.push(tabureteContempo); } });
    brazos.forEach((x) => { if (x.apodo.includes("Contempo")) { brazoContempo = x; arreglo.push(brazoContempo); } });
    esquinas.forEach((x) => { if (x.apodo.includes("Contempo")) { esquinaContempo = x; arreglo.push(esquinaContempo); } });

    var yookoHtml = "";
    yookoHtml = inflarSlider("ul-contempo", arreglo, true);
    document.getElementById("ul-contempo").innerHTML = yookoHtml;
}

function inflarSliderTrendy() {
    var arreglo = [];
    var tabureteContempo;
    var esquinaContempo;
    var brazoContempo;
    taburetes.forEach((x) => { if (x.apodo.includes("Trendy")) { tabureteContempo = x; arreglo.push(tabureteContempo); } });
    brazos.forEach((x) => { if (x.apodo.includes("Trendy")) { brazoContempo = x; arreglo.push(brazoContempo); } });
    esquinas.forEach((x) => { if (x.apodo.includes("Trendy")) { esquinaContempo = x; arreglo.push(esquinaContempo); } });

    var yookoHtml = "";
    yookoHtml = inflarSlider("ul-trendy", arreglo, true);
    document.getElementById("ul-trendy").innerHTML = yookoHtml;
}


function inflarSlider(id, arreglo, encadenar) {
    var slider = document.getElementById(id);
    var htmlSlider = '';
    arreglo.forEach(element => {
        htmlSlider = htmlSlider +
            `
        
        <li class="glide__slide">

						<div class="itemMueble">
							<a class="link-item-slider" style="cursor: pointer;" href="#detalles" onclick="cambiarDetalle(${element.index})">
								<div class="text-center">
									<div class="product" style="margin-top: 1em;">
										<div class="product-grid"
											style="background-image:url(${element.imagenes[0].imagen}); margin: 0 auto;">
										</div>
										<div class="desc" style="margin-top: 1em;">
											<h3><a href="#detalles" class="nomProducto">${element.apodo}</a></h3>
											<span class="priceProducto">$${element.precio}</span>
										</div>
									</div>
								</div>
							</a>
						</div>
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
function cambiarTabTexturas(opc) {
    var tabTexturas = document.getElementById("tab-texturas");
    switch (opc) {
        case 0:
            document.getElementById("materiales").classList.remove("oculto");
            document.getElementById("radio-material").classList.remove("oculto");

            tabTexturas.innerHTML =
                `
              <li role="presentation" class="contenor-tab">
              <a id="tab-curri" class="tabLink limpiarTAb" href="#tab-id-3" aria-controls="tab-id-3" role="tab"
                  data-toggle="tab">
                  <span style="color: black !important;">Curri</span>
              </a>
          </li>
              `;
            document.getElementById("tab-curri").click();
            break;
        case 1:

            document.getElementById("materiales").classList.remove("oculto");
            document.getElementById("radio-material").classList.remove("oculto");
            tabTexturas.innerHTML =
                `
      <li role="presentation" class="contenor-tab">
          <a id="tab-lona" class="tabLink limpiarTAb" href="#tab-id-0" aria-controls="tab-id-0" role="tab"
            data-toggle="tab">
            <span style="color: black !important;">Lona</span>
          </a>
        </li>
        <li  role="presentation" class="contenor-tab">
          <a id="tab-gamuza" class="tabLink limpiarTAb" href="#tab-id-1" aria-controls="tab-id-1" role="tab"
            data-toggle="tab">
            <span style="color: black !important;">Gamuza</span>
          </a>
        </li>
        <li role="presentation" class="contenor-tab">
          <a id="tab-tacto-piel" class="tabLink limpiarTAb" href="#tab-id-2" aria-controls="tab-id-2" role="tab"
            data-toggle="tab">
            <span style="color: black !important;">Tacto piel</span>
          </a>
        </li>
      `;
            document.getElementById("tab-lona").click();
            break;
        case 2:

            document.getElementById("radio-material").classList.add("oculto");
            document.getElementById("materiales").classList.add("oculto");
            break;
        default:
            break;
    }
}