let perfLi;
let perfLi1;
let perfLi2;
let padreBorrar;
let hijosBorrar;
var container;
var padreCentro;

var assetContainers = [];
/*let modelos = {
    taburetes: ['tabureteContempo.gltf', 'tabureteCasual.gltf', 'tabureteTrendy.gltf'],
    brazos: ['BrazoContempo.gltf', 'brazoCasual.gltf', 'brazoTrendy.gltf'],
    esquinas: ['esquinaContempo.gltf', 'esquinaCasual.gltf', 'esquinaTrendy.gltf'],
    completos: ['completoContempo.gltf', 'completoCasual.gltf', 'completoTrendy.gltf']
}*/
let modelos = {
    taburetes: [
        { nombre: "tabureteContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "tabureteCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "tabureteTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } }
    ],
    brazos: [
        { nombre: "BrazoContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "brazoCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "brazoTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } }
    ],
    esquinas: [
        { nombre: "esquinaContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "esquinaCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "esquinaTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } }
    ],
    completos: [
        { nombre: "completoContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "completoCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } },
        { nombre: "completoTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 } }
    ]
}
let btnRotar;
let muebleSelecionado = false;
var toogle = true;
var meshDebug;
var meshDebug1;
var meshDebug2;
var advancedTexture;
var circle;
let btnTextura;
let btnTextura1;
let btnTextura2;

var manager;
var botoncito;
var escena;
let base;
var hl;
//var esfera;
let camara;

let btnIzquierdo;
let btnDerecho;
let btnFrente;
let ultimoClickeado;
let modulos = ["modTaburete", "modEsquina", "modBrazo", "completo"];
let texturas = ['textuNegra', 'textuBlanca', 'textuTrendy'];
let btnAplicar;
let btnCancelar;
let padreActual;
let padreAnterior;
let texturaActual;
let moduloActual;
var engine;
let cargando;

let meshesAcargar;
var dimensionesTotales = {
    x: 50,
    y: 50,
    z: 50
};
let canvas;
window.addEventListener('DOMContentLoaded', function () {
    cargando = false;
    texturaActual = texturas[1];
    moduloActual = modulos[0];
    texturaActual = texturas[1];
    btnTextura = document.getElementById(texturas[0]);
    btnTextura1 = document.getElementById(texturas[1]);
    btnTextura2 = document.getElementById(texturas[2]);
    btnModelo = document.getElementById(modulos[0]);
    btnModelo.style.outline = "5px solid grey";
    btnTextura1.style.outline = "5px solid grey";
    btnAplicar = document.getElementById('btnAplicar');
    btnCancelar = document.getElementById('btnCancelar');
    btnRotar = document.getElementById('btnRotar');
    // get the canvas DOM element
     canvas = document.getElementById('render');
     
     //canvas.getContext('2d');
    // load the 3D engine
    engine = new BABYLON.Engine(canvas, true, { stencil: true });
    // animation : progress indicator

    // createScene function that creates and return the scene
    var createScene = function () {
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        //GUI
        //Does not work
canvas.addEventListener("mouseup", function(){
    console.log("Mouse UP!");
    document.body.style.overflow="auto";
});
//Does not work
canvas.addEventListener("mousedown", function(){
    console.log("Mouse DOWN!");
    document.body.style.overflow="hidden";
});
//Works
canvas.addEventListener("click", function(){
    console.log("Mouse Click!");
    //document.body.style.overflow="hidden";
});
        var scene = new BABYLON.Scene(engine);
        scene.preventDefaultOnPointerDown = false;
        scene.clearColor = new BABYLON.Color3.White();
        //esfera = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
        hl = new BABYLON.HighlightLayer("hl1", scene);


        camara = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, -Math.PI / 2, 200, BABYLON.Vector3.Zero(), scene);

        camara.upperBetaLimit = 3;
        camara.lowerRadiusLimit = 4;
        camara.upperRadiusLimit = 4;
        camara.minZ = 0.1;
        camara.setPosition(new BABYLON.Vector3(0, 0, 50));
        camara.attachControl(canvas, true);

        camara.useBouncingBehavior = false;

        camara.useFramingBehavior = false;
        camara.useAutoRotationBehavior = true;
        camara.inputs.attached.mousewheel.wheelPrecision = 40;
        camara.beta = Math.PI * 0.1;

        var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
        var gui = new dat.GUI({ autoPlace: false });
        //gui.parent=scene;
        //gui.domElement.style.margin = "0";
        gui.domElement.id = "datGUI";
        var options = {
            zoom: 0.1,
            rotaciónX: 0.1,
            rotacionY: 0.1
        }

        gui.add(options, "zoom", 0.1, 3).onChange(function (value) {
            //sphere.scaling = unitVec.scale(value);
            camara.upperRadiusLimit = 4 - value;
            //console.log("zoom", camara.upperRadiusLimit);
            // sphere.position.x = value;
        });
        var f2 = gui.addFolder('Rotación');

        f2.add(options, "rotaciónX", 0.1, 2).onChange(function (value) {
            //sphere.scaling = unitVec.scale(value);
            camara.alpha = Math.PI * value;
            // sphere.position.x = value;
        });

        f2.add(options, "rotacionY", 0.1, 1).onChange(function (value) {
            //sphere.scaling = unitVec.scale(value);
            camara.beta = Math.PI * value;

            // sphere.position.x = value;
        });
        
        var perfFolder = gui.addFolder("Dimensiones");
         perfLi = document.createElement("li");
         perfLi1 = document.createElement("li");
         perfLi2 = document.createElement("li");
        //stats.domElement.style.position = "static";
        var textnode = document.createTextNode("largo :"+ dimensionesTotales.x);
        var textnode1 = document.createTextNode("Ancho :"+ dimensionesTotales.x);
        var textnode2 = document.createTextNode("Alto :"+ dimensionesTotales.x);
        perfLi.appendChild(textnode);
        perfLi1.appendChild(textnode1);
        perfLi2.appendChild(textnode2);
        perfLi.classList.add("gui-Dimensiones");
        perfLi.classList.add("gui-Dimensiones");
        perfLi.classList.add("gui-Dimensiones");
        perfFolder.__ul.appendChild(perfLi);
        perfFolder.__ul.appendChild(perfLi1);
        perfFolder.__ul.appendChild(perfLi2);
        var customContainer = document.getElementById('main');
        customContainer.appendChild(gui.domElement);
        f2.open();
        // compared click for sphere

        engine.runRenderLoop(function () {
            scene.render();
        });
        //scene.debugLayer.show();
        //esfera = BABYLON.Mesh.CreateBox("box", 2, scene);
        return scene;
    }


    escena = createScene();
    background = new BABYLON.Layer("back", "assets/imagenes/fondos/fondo.jpg", escena);
    background.isBackground = true;
    background.texture.level = 0;

    container = new BABYLON.AssetContainer(escena);
    hl = new BABYLON.HighlightLayer("hl1", escena);
    hl.innerGlow = false;



    manager = new BABYLON.GUI.GUI3DManager(escena);
    padreCentro = new BABYLON.Mesh("padreCentro", escena);
    cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true));

    /*BABYLON.SceneLoader.LoadAssetContainer("./", "brazoCasual.gltf", escena, function (newMeshes) {

        //  console.log("containerBrazo", newMeshes);
        //newMeshes.meshes[0].getChildren()[0].parent=padreCentro;
        engine.displayLoadingUI();
        padreActual = newMeshes.meshes[0].getChildren()[0];

        meshDebug = padreActual.getChildren()[3];
        meshDebug1 = padreActual.getChildren()[5];
        meshDebug2 = padreActual.getChildren()[4];

        meshDebug2.rotation.y = Math.PI / 2;
        //meshDebug = newMeshes.meshes[5];
        //meshDebug1 = newMeshes.meshes[3];

        container.meshes.push(padreActual);

        //meshClickleable(newMeshes.meshes[1]);
        //padreActual.name = "padrebrazoCasual";
        //meshDebug.position.x = 1;
        //container.meshes.push(padre);
        //createLabel(meshDebug);
        //alert(onProgress);

        newMeshes.meshes.forEach(mesh => {
            //mesh.position.x=8;
            meshClickleable(mesh);
            container.meshes.push(mesh);
        });
        //...

        createButon3D(meshDebug, 'derecha');
        createButon3D(meshDebug1, 'izquierda');
        createButon3D(meshDebug2, 'frente');
        container.addAllToScene();
    }, onSuccess = () => {
        engine.hideLoadingUI();
        cargando = !cargando;
        // console.log("cargando", cargando);
    }, onProgress = (evento) => {
        evento.onProgress(() => {
            //  console.log("se esta cargando");
        })
    });*/

    // run the render loop
    // console.log("container", container);
});
window.addEventListener("resize", function () {
    engine.resize();
});
function clika() {
    //alert("click");
    toogle = !toogle;
    //console.log("toogle", toogle);
    if (toogle) {


        container.removeAllFromScene();
        //console.log("container", container);
    } else {

        createButon3D(meshDebug1, true);
        createButon3D(meshDebug, false);
        container.addAllToScene();
    }
}
var createLabel = function (mesh) {
    var label = new BABYLON.GUI.Rectangle("label for " + mesh.name);
    label.background = "black"
    label.height = "30px";
    label.alpha = 0.5;
    label.width = "100px";
    label.cornerRadius = 20;
    label.thickness = 1;
    label.linkOffsetY = 30;
    advancedTexture.addControl(label);
    label.linkWithMesh(mesh);

    var text1 = new BABYLON.GUI.TextBlock();
    text1.text = mesh.name;
    text1.color = "white";
    label.addControl(text1);
}
var createButton = function (mesh) {
    var button1 = new BABYLON.GUI.Button.CreateSimpleButton("but1", "+");
    button1.width = 0.02;
    button1.height = "20px";
    button1.color = "white";
    button1.cornerRadius = 20;
    button1.background = "black";
    advancedTexture.addControl(button1);
    button1.linkWithMesh(mesh);
    var text1 = new BABYLON.GUI.TextBlock();
    //text1.text = mesh.name;
    text1.color = "black";
    button1.addControl(text1);
    button1.onPointerUpObservable.add(function () {
        circle.scaleX += 0.1;
    });
}
var createHoloButton = function (mesh) {

    btnRotar = new BABYLON.GUI.HolographicButton("down");
    manager.addControl(button);
    btnRotar.linkToTransformNode(mesh);
    btnRotar.position.z = 0;
    var text1 = new BABYLON.GUI.TextBlock();
    text1.text = "+";
    text1.color = "white";
    btnRotar.fontSize = 200;
    btnRotar.content = text1;
    //button.imageUrl = "curiGris_DISP.png";
    btnRotar.scaling = new BABYLON.Vector3(2.7, 2.7, 1);

    btnRotar.onPointerUpObservable.add(function () {

    });
}
function createButon3D(mesh, opc) {

    //button.rotation.x=180;
    var text1 = new BABYLON.GUI.TextBlock();
    text1.text = "+";
    text1.color = "white";
    text1.fontSize = 250;

    if (opc === 'izquierda') {
        btnIzquierdo = new BABYLON.GUI.Button3D(mesh, mesh.name);
        manager.addControl(btnIzquierdo);
        btnIzquierdo.linkToTransformNode(mesh);
        btnIzquierdo.position.z = -0.2;
        btnIzquierdo.scaling = new BABYLON.Vector3(.4, .4, .4);
        btnIzquierdo.mesh.rotation.y = Math.PI;
        btnIzquierdo.content = text1;
        btnIzquierdo.onPointerClickObservable.add(function () {
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual));
            btnIzquierdo.dispose();
            esconderMesh(btnDerecho, true);
            esconderMesh(btnFrente, true);
            activarBotonesAplicar(true);
            ultimoClickeado = "izquierda";
            resaltarMueble(padreActual, false);
        });

    } if (opc === 'frente') {
        btnFrente = new BABYLON.GUI.Button3D(mesh, mesh.name);
        manager.addControl(btnFrente);
        btnFrente.linkToTransformNode(mesh);
        btnFrente.scaling = new BABYLON.Vector3(.4, .4, .4);
        btnFrente.position.x = -0.2
        btnFrente.mesh.rotation.y = -Math.PI / 2;


        btnFrente.content = text1;
        btnFrente.onPointerClickObservable.add(() => {
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual));
            btnFrente.dispose();
            esconderMesh(btnIzquierdo, true);
            esconderMesh(btnDerecho, true);

            activarBotonesAplicar(true);
            ultimoClickeado = "frente";
            resaltarMueble(padreActual, false);
        });

    }
    if (opc === 'derecha') {
        btnDerecho = new BABYLON.GUI.Button3D(mesh, mesh.name);
        manager.addControl(btnDerecho);
        btnDerecho.linkToTransformNode(mesh);
        btnDerecho.scaling = new BABYLON.Vector3(.4, .4, .4);
        btnDerecho.position.z = 0.2;
        btnDerecho.content = text1;
        btnDerecho.onPointerClickObservable.add(() => {
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual));
            btnDerecho.dispose();
            esconderMesh(btnIzquierdo, true);
            esconderMesh(btnFrente, true);
            activarBotonesAplicar(true);
            ultimoClickeado = "derecha";
            resaltarMueble(padreActual, false);
        });

    }
}
function cargarModelo(padre, modelo, hijos) {
    //alert("ENTRO");
    var derecha;
    var izquierda;
    var frente;
    //console.log(hijos);
    if (!modelo) {
        modelo = "BrazoContempo.gltf";
    }

    engine.displayLoadingUI();
    BABYLON.SceneLoader.LoadAssetContainer("assets/modelos/", modelo, escena, function (newMeshes) {
        meshesAcargar = newMeshes;
        //console.log("padre a guardar", newMeshes.meshes[0]);
        padreAnterior = padreActual;

        padreActual = newMeshes.meshes[0].getChildren()[0];
        //console.log("padre actual", padreActual);
        //padreActual = newMeshes.meshes[0].parent;
        padreActual.getChildren().forEach(hijo => {
            switch (hijo.name) {
                case 'izquierda':
                    izquierda = hijo;

                    //console.log("FFUE izquierda", izquierda);
                    break;
                case 'derecha':
                    derecha = hijo;

                    //console.log("FFUE derecha", derecha);
                    break;
                case 'frente':
                    frente = hijo;

                    //console.log("FFUE frente", frente);
                    break;
                default:
                    break;
            }
        });
        if (padre.name == 'padreCentro') {
            //alert("Padre centro");

            ultimoClickeado = "primer";
        }
        meshDebug = izquierda;
        meshDebug1 = derecha;
        meshDebug2 = frente;
        createButon3D(meshDebug1, 'derecha');
        createButon3D(meshDebug, 'izquierda');
        createButon3D(meshDebug2, 'frente');
        activarBotonesAplicar(true);
        esconderTodosBotones(false);
        //resaltarMueble(padreActual, true);


        container.meshes.push(padreActual);
        //newMeshes.meshes[0].parent = padre;
        //se asigna un padre a el padre acutual
        //
        //var dummy = new BABYLON.Mesh("dummy", scene);
        //var nodo= new Node("nodo",scene);
        var nodo = new BABYLON.Mesh("nodo", escena);
        nodo.parent = padre;
        padreActual.parent = padre;
        let cadenaTemp = modelo.slice(0, -5);
        // newMeshes.meshes[0].name = "padre" + cadenaTemp[0].toUpperCase() + cadenaTemp.substring(1);
        //padre.rotation.y = Math.PI;
        //console.log("escala", padre);

        newMeshes.meshes.forEach(mesh => {
            hl.addMesh(mesh, BABYLON.Color3.Green());
            container.meshes.push(mesh);
            meshClickleable(mesh);
        });
        /*switch (ultimoClickeado) {
            case 'izquierda':
                createButon3D(izquierda, 'izquierda');
                createButon3D(frente, 'frente');
                esconderTodosBotones(true);
                break;
            case 'derecha':
                createButon3D(derecha, 'derecha');
                createButon3D(frente, 'frente');
                esconderTodosBotones(true);
                break;
            case 'frente':
                createButon3D(frente, 'frente');
                createButon3D(izquierda, 'izquierda');
                createButon3D(meshDebug, 'derecha');
                esconderTodosBotones(true);
                break;
            default:
                break;
        }*/
        //createHoloButton(padreActual);
        container.addAllToScene();
    }, onSuccess = () => {
        engine.hideLoadingUI();
        actualizarDimensiones(modelo);

    }, onProgress = () => {
        //console.log("progress")
    });
}
function cambioTextura(opc) {
    texturaActual = texturas[opc];
    actualizarMueble();
    //removerModelo(padreActual);
    agregarBorder(opc, true);
    //alert(modeloActual(texturaActual,moduloActual));
    //alert(opc);
}
function cambioModulo(opc) {
    moduloActual = modulos[opc];
    actualizarMueble();
    agregarBorder(opc, false);
    //alert(modeloActual(texturaActual,moduloActual));
}
function agregarBorder(val, textura) {

    if (textura === true) {
        switch (val) {
            case 0:
                btnTextura.style.outline = "5px solid grey";
                btnTextura1.style.outline = null;
                btnTextura2.style.outline = null;
                break;
            case 1:
                btnTextura.style.outline = null;
                btnTextura1.style.outline = "5px solid grey";
                btnTextura2.style.outline = null;
                break;
            case 2:
                btnTextura.style.outline = null;
                btnTextura1.style.outline = null;
                btnTextura2.style.outline = "5px solid grey";
                break;
            default:
                btnTextura.style.outline = null;
                btnTextura1.style.outline = null;
                btnTextura2.style.outline = null;
        }
    } else {

        let btnModelo1 = document.getElementById(modulos[1]);
        let btnModelo2 = document.getElementById(modulos[2]);
        switch (val) {
            case 0:
                btnModelo.style.outline = "5px solid grey";
                btnModelo1.style.outline = null;
                btnModelo2.style.outline = null;
                break;
            case 1:
                btnModelo.style.outline = null;
                btnModelo1.style.outline = "5px solid grey";
                btnModelo2.style.outline = null;
                break;
            case 2:
                btnModelo.style.outline = null;
                btnModelo1.style.outline = null;
                btnModelo2.style.outline = "5px solid grey";
                break;
            default:
                btnModelo.style.outline = null;
                btnModelo1.style.outline = null;
                btnModelo2.style.outline = null;

        }
    }

    //console.log('modelo actual', modeloActual);
    //console.log('textura actual', texturaActual);
}
function activarBotonesAplicar(bool) {
    if (bool) {
        muebleSelecionado = true;
        btnCancelar.style.visibility = "visible";
        btnAplicar.style.visibility = "visible";
        btnRotar.style.visibility = "visible";
    } else {
        btnAplicar.style.visibility = "hidden";
        btnCancelar.style.visibility = "hidden";
        btnRotar.style.visibility = "hidden";
        muebleSelecionado = false;
    }
}
function esconderMesh(mesh, bool) {
    // console.log("el mesh es", mesh);
    mesh.isVisible = !bool;
}
function resaltarMueble(padreActual, bool) {
    //console.log("padre actual", padreActual.name)
    var children = padreActual.getChildren();
    if (bool === true) {

        children.forEach(hijo => {
            hl.addMesh(hijo, BABYLON.Color3.Green());
            if (hijo.name == "derecha") {
                btnDerecho.dispose();
                createButon3D(hijo, "derecha");
            }
            if (hijo.name == "frente") {
                btnFrente.dispose();
                createButon3D(hijo, "frente");
            }
            if (hijo.name == "izquierda") {
                btnIzquierdo.dispose();
                createButon3D(hijo, "izquierda");
            }
        });
    } else {
        hl.removeMesh(padreActual);
        children.forEach(hijo => {
            hl.removeMesh(hijo);
        });


    }
}
function aplicar() {
    resaltarMueble(padreActual, false);
    activarBotonesAplicar(false);
    if ((!btnDerecho.isVisible) && (!btnIzquierdo.isVisible)) {
        esconderMesh(btnIzquierdo, true);
        esconderMesh(btnDerecho, true);
        esconderMesh(btnFrente, true);
    }
    if (btnDerecho.isVisible) {
        esconderMesh(btnIzquierdo, true);
        esconderMesh(btnDerecho, true);
        esconderMesh(btnFrente, true);
    } else {
        esconderMesh(btnIzquierdo, true);
        esconderMesh(btnDerecho, true);
        esconderMesh(btnFrente, true);
    }
}
function removerModelo(padre) {

    hijosBorrar = padre.getChildren();
    container.meshes = container.meshes.filter((x) => {
        return hijosBorrar.indexOf(x) < 0;
    });
    hijosBorrar.forEach(hijo => {
        hijo.dispose();
    });
    padre.dispose();
}
function cancelar() {
    removerModelo(padreActual);

    //resaltarMueble(padreActual, false);
    activarBotonesAplicar(false);
    esconderMesh(btnIzquierdo, true);
    esconderMesh(btnDerecho, true);
    esconderMesh(btnFrente, true);

}
function modeloActual(text, moduA) {

    let selecionado = 'normal';

    let indiceModulo = modulos.indexOf(moduA.toString());
    let indiceTextura = texturas.indexOf(text.toString());
    //  console.log("textura indice", indiceTextura);
    // console.log("modulo indice", indiceModulo);
    switch (indiceModulo) {
        case 0:
            selecionado = modelos.taburetes[indiceTextura].nombre;
            //console.log('modulo', selecionado);
            break;
        case 1:
            selecionado = modelos.brazos[indiceTextura].nombre;
            // console.log('modulo', selecionado);
            break;
        case 2:
            selecionado = modelos.esquinas[indiceTextura].nombre;
            // console.log('modulo', selecionado);
            break;
        case 3:
            selecionado = modelos.completos[indiceTextura].nombre;
            // console.log('modulo', selecionado);
            break;
        default:
            selecionado = modelos.taburetes[indiceTextura].nombre;
            //console.log('modulo', selecionado);
            break;
    }
    //console.log("selecionado", selecionado);
    return selecionado;
}
function meshClickleable(mesh) {
    mesh.actionManager = new BABYLON.ActionManager(escena);
    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
        //console.log("Mesh clickeado", mesh.name);
        if (muebleSelecionado === false) {
            esconderMesh(btnDerecho, false);
            esconderMesh(btnIzquierdo, false);
            esconderMesh(btnFrente, false);
            resaltarMueble(mesh.parent, true);
            padreActual = mesh.parent;
            activarBotonesAplicar(true);
        }
    }));
}
function actualizarMueble() {
    var padreTemp;
    var hijosIzquierda;
    var hijosDerecha;
    var hijosFrente;
    if (muebleSelecionado) {
        padreActual.getChildren().forEach(mesh => {
            //console.log("mesh",mesh.name);
            if (mesh.name = "frente" && (mesh.getChildren().length > 1)) {
                hijosFrente = mesh.getChildren();
                // console.log("frente tiene hijos", hijosFrente);
            } else {
                // console.log("frente NO tiene hijos");
            }
            if (mesh.name = "Izquierda" && (mesh.getChildren().length > 1)) {
                hijosIzquierda = mesh.getChildren();
                //console.log("Izquierda tiene hijos", hijosIzquierda);
            } else {
                //console.log("Izquierda NO tiene hijos");
            }
            if (mesh.name = "Derecha" && (mesh.getChildren().length > 1)) {
                hijosDerecha = mesh.getChildren();
                //console.log("Derecha tiene hijos", hijosDerecha);
            } else {
                //console.log("Derecha NO tiene hijos");
            }
        });
        /*  if (ultimoClickeado == "izquierda") {
              padreTemp=padreActual.parent;
              removerModelo(padreActual);
              //cargarModelo(meshDebug1, modeloActual(texturaActual, moduloActual));
              cargarModelo(padreTemp, modeloActual(texturaActual, moduloActual));
          }
          if (ultimoClickeado == "derecha") {
              padreTemp=padreActual.parent;
              removerModelo(padreActual);
              //cargarModelo(meshDebug, modeloActual(texturaActual, moduloActual));
              cargarModelo(padreTemp, modeloActual(texturaActual, moduloActual));
          }
          if (ultimoClickeado == "frente") {
              padreTemp=padreActual.parent;
              removerModelo(padreActual);
              //cargarModelo(meshDebug, modeloActual(texturaActual, moduloActual));
              cargarModelo(padreTemp, modeloActual(texturaActual, moduloActual));
          }
          if (ultimoClickeado == "primer") {
              removerModelo(padreActual);
              cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual));
          }*/
        padreTemp = padreActual.parent;
        removerModelo(padreActual);
        //cargarModelo(meshDebug1, modeloActual(texturaActual, moduloActual));
        if (hijosDerecha || hijosFrente || hijosIzquierda) {
            cargarModelo(padreTemp, modeloActual(texturaActual, moduloActual), { hijosDerecha, hijosFrente, hijosIzquierda });

        } else {
            console.log("no hay hijos");
            cargarModelo(padreTemp, modeloActual(texturaActual, moduloActual), 'no hay hijos');
            //console.log("no hay hijos");
        }
    }

}
function rotarSelecionado() {
    padreActual.rotation.y = (Math.PI / 2) + padreActual.rotation.y;
}
function esconderTodosBotones(bool) {
    if (bool) {
        esconderMesh(btnDerecho, true);
        esconderMesh(btnIzquierdo, true);
        esconderMesh(btnFrente, true);
    } else {
        esconderMesh(btnDerecho, false);
        esconderMesh(btnIzquierdo, false);
        esconderMesh(btnFrente, false);
    }
}
function cambiarFondo() {


    var opc = Math.floor((Math.random() * 4) + 1);
    switch (opc) {
        case 1:
            background.texture = new BABYLON.Texture("assets/imagenes/fondos/sala.jpg", escena);
            break;
        case 2:
            background.texture = new BABYLON.Texture("assets/imagenes/fondos/sala1.jpg", escena);
            break;
        case 3:
            background.texture = new BABYLON.Texture("assets/imagenes/fondos/sala2.jpg", escena);
            break;
        case 4:
            background.texture = new BABYLON.Texture("assets/imagenes/fondos/sala3.jpg", escena);
            break;

        default:
            break;
    }
}

function actualizarDimensiones(modelo) {
    let iniciales = modelo.substring(0, 3);
    console.log("iniciales", iniciales);
    switch (iniciales) {
        case 'tab':
            let taburete = modelos.taburetes.find(x => x.nombre === modelo);
            sumarDimensionesTotales(taburete);
            break;
        case 'bra':
            let brazo = modelos.brazos.find(x => x.nombre === modelo);
            sumarDimensionesTotales(brazo);
            break;
        case 'esq':
            let esquina = modelos.esquinas.find(x => x.nombre === modelo);
            sumarDimensionesTotales(esquina)
            break;
    }
}
function sumarDimensionesTotales(modelo) {
    dimensionesTotales.x += modelo.dimensiones.largo;
    dimensionesTotales.y += modelo.dimensiones.ancho;
    dimensionesTotales.z += modelo.dimensiones.alto;
    perfLi.innerHTML=`largo: `+dimensionesTotales.x+` m`;
    perfLi1.innerHTML=`ancho: `+dimensionesTotales.y+` m`;
    perfLi2.innerHTML=`alto: `+dimensionesTotales.z+` m`;
}
function activarCamara(){
    cargarCamara(escena,camara);
}