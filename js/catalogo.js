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
function cambiarVistaMotor(opc) {
    padres = [];
    switch (opc) {
        case 0:
            var tabTexturas=document.getElementById("tab-texturas");
            document.getElementById("descripcionMaterial").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "visible";
            document.getElementById("grid-texturas").style.visibility = "visible";
            document.getElementById("iconosTexturas").style.visibility = "visible";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            document.getElementById("slct-btn-color").style.display = "none";
            document.getElementById("slct-btn-preArmado").style.display = "initial";
            document.getElementById("slct-btn-modelo").style.display = "initial";
            for (let i = escena.meshes.length - 1; i >= 0; i--) {

                escena.removeMesh(escena.meshes[i]);
            }
            cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true));
            tabTexturas.innerHTML=
            `
            <li role="presentation">
            <a id="tab-curri" class="tabLink" href="#tab-id-3" aria-controls="tab-id-3" role="tab"
                data-toggle="tab">
                <span>Curri</span>
            </a>
        </li>
            `;
            document.getElementById("tab-curri").click();
            break;
        case 1:
        var tabTexturas=document.getElementById("tab-texturas");
            document.getElementById("descripcionMaterial").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "hidden";
            document.getElementById("grid-texturas").style.visibility = "visible";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            document.getElementById("slct-btn-color").style.display = "initial";
            document.getElementById("slct-btn-preArmado").style.display = "none";
            document.getElementById("slct-btn-modelo").style.display = "none";
            cargarModeloCustom(modelos.puffino[10], undefined);
            tabTexturas.innerHTML=
            `
            <li role="presentation">
								<a id="tab-lona" class="tabLink" href="#tab-id-0" aria-controls="tab-id-0" role="tab"
									data-toggle="tab">
									<span>Lona</span>
								</a>
							</li>
							<li class="active" role="presentation">
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
            document.getElementById("descripcionMaterial").style.visibility = "hidden";
            document.getElementById("iconosPrearmado").style.visibility = "hidden";
            document.getElementById("grid-texturas").style.visibility = "hidden";
            document.getElementById("iconosTexturas").style.visibility = "hidden";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            document.getElementById("slct-btn-color").style.display = "none";
            document.getElementById("slct-btn-preArmado").style.display = "none";
            document.getElementById("slct-btn-modelo").style.display = "none";
            cargarModeloCustom(modelos.kids[0], undefined);
            break;

        default:
            break;
    }
}