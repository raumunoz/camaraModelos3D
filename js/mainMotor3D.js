//let gizmo;

let debugg = 0;
const inputElement = document.getElementById("file-input");
let bandera = false;
inputElement.addEventListener("change", function (e) {
    var imagen;
    //console.log("archivos",inputElement.files);
    const reader = new FileReader();
    reader.onload = function () {
        console.log("resultado", reader.result);
        //materialSphere3.diffuseTexture = new BABYLON.Texture("data:gopher", scene, false, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE, null, null, base64Img, true);
        //debugg=reader.result;
        //reader.result="";
        background.texture = new BABYLON.Texture("data:" + imagen, escena, false, true, BABYLON.Texture.BILINEAR_SAMPLINGMODE, null, null, reader.result, true);
        //background.texture = new BABYLON.Texture("C:/Users/csar/OneDrive/Imágenes", escena);
        //inputElement.replaceWith( inputElement.val('').clone( true ) );
    }
    //my_array.slice(-1)[0]
    imagen = inputElement.files[0].name;
    //debugg = inputElement.files;
    reader.readAsDataURL(inputElement.files[0]);
    console.log("nombre,", imagen);
}, false);
let pointerDragBehavior;
let ModeloCustom;
let grid;
let meshClicleado = false;
let buttonClicleado = false;
let listaTablaMuebles = [{ mueble: "Taburete casual", numero: 0 }];
let perfLi;
let perfLi1;
let perfLi2;
let padreBorrar;
let hijosBorrar;
//var container;
var padreCentro;
let camaraActiva;
let precioTotal = 0;
let ultimoPrecio = 0;
let spanPrecio;
let divLista;
let listaDeMuebles = [];

let anchoTotal;
let largoTotal;
let altoTotal;
let archivosTexturas;
let evCache = new Array();
let prevDiff = -1;
let customMesh = true;

//let sliders = [];
//let gizmoLayer;
//let utilLayer;
/*
let modelos = {
    taburetes: ['tabureteContempo.gltf', 'tabureteCasual.gltf', 'tabureteTrendy.gltf'],
    brazos: ['BrazoContempo.gltf', 'brazoCasual.gltf', 'brazoTrendy.gltf'],
    esquinas: ['esquinaContempo.gltf', 'esquinaCasual.gltf', 'esquinaTrendy.gltf'],
    completos: ['completoContempo.gltf', 'completoCasual.gltf', 'completoTrendy.gltf']
}
*/
let modelos = {
    taburetes: [
        { apodo: "Yooko Contempo Taburete", nombre: "tabureteContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 7099 },
        { apodo: "Yooko Casual Taburete", nombre: "tabureteCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 7099 },
        { apodo: "Yooko Trendy Taburete", nombre: "tabureteTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 7099 }
    ],
    brazos: [
        { apodo: "Yooko Contempo Silla", nombre: "BrazoContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8599 },
        { apodo: "Yooko Casual Silla", nombre: "brazoCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8599 },
        { apodo: "Yooko Trendy Silla", nombre: "brazoTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8599 }
    ],
    esquinas: [
        { apodo: "Yooko Contempo Esquinero", nombre: "esquinaContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8799 },
        { apodo: "Yooko Casual Esquinero", nombre: "esquinaCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8799 },
        { apodo: "Yooko Trendy Esquinero", nombre: "esquinaTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 8799 }
    ],
    completos: [
        { apodo: "", nombre: "completoContempo.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "completoCasual.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "completoTrendy.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 }
    ],
    puffino: [
        { apodo: "Yumil", nombre: "Atlixco.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2499 },
        { apodo: "Yumil Mediano", nombre: "Atlixco_chico.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2499 },
        { apodo: "Yeeb", nombre: "Bernal.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2999 },
        { apodo: "Kauil", nombre: "conzumel.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4999 },
        { apodo: "Kauil Taburete", nombre: "Taburete_conzumel.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2999 },
        { apodo: "Balam", nombre: "Guadalajara.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 5199 },
        { apodo: "Ikal", nombre: "guanajuato.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4699 },
        { apodo: "Nima", nombre: "La paz.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3499 },
        { apodo: "Nima mediano", nombre: "La Paz_chico.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3099 },
        { apodo: "Zazil", nombre: "mérida.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3999 },
        { apodo: "Toot", nombre: "Oaxaca.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3899 },
        { apodo: "Toot Queen", nombre: "Oaxaca_matrimonial.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4799 },
        { apodo: "", nombre: "OaxacaMatrimonial.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4799 },
        { apodo: "Tanak", nombre: "pátzcuaro.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4499 },
        { apodo: "Tanak Niños", nombre: "pátzcuaroNiño.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3199 },
        { apodo: "Alom", nombre: "puebla.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3099 },
        { apodo: "Alom Mediano", nombre: "puebla_chico.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2299 },
        { apodo: "Seti", nombre: "puertoVallarta.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3999 },
        { apodo: "Kauil Sillón", nombre: "sillon_conzumel.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4199 },
        { apodo: "Canek", nombre: "veracruz.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 4199 },
        { apodo: "Canek Niños", nombre: "veracruz_niños.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3399 },
        { apodo: "Kimbo Chico", nombre: "ZacatecasChico.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2399 },
        { apodo: "Kimbo Grande", nombre: "Zacatecas_grande.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3199 },
        { apodo: "Kimbo Mediano", nombre: "zacatecas_mediano.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 2699 },
        { apodo: "Kuk", nombre: "zacatlán.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3399 }
    ],
    kids: [
        { apodo: "CONEJO", nombre: "puff_conejo .gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3499 },
        { apodo: "DINOSAURIO", nombre: "puff_dinosaurio.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3699 },
        { apodo: "DONA", nombre: "dona.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3399 },
        { apodo: "JIRAFA", nombre: "puff_jirafa.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3799 },
        { apodo: "PERRITO", nombre: "puffPerro.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3699 },
        { apodo: "UNICORNIO", nombre: "unicornio.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3499 },
    ],
    yokoModular: [
        { apodo: "", nombre: "puff_conejo .gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "puff_dinosaurio.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "dona.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "jirafa.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "puffPerro.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
        { apodo: "", nombre: "unicornio.gltf", dimensiones: { largo: 1.5, ancho: 1, alto: 1 }, precio: 3000 },
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
let camera;

let btnIzquierdo;
let btnDerecho;
let btnFrente;
let ultimoClickeado;
let modulos = ["modTaburete", "modEsquina", "modBrazo", "completo"];
let texturas = ['textuNegra', 'textuBlanca', 'textuTrendy'];
//let btnAplicar;
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
let btnCamara;
let isAssigned;
let dimensionesText;
let hasTouchscreen;
let gridContainer;
let dimensionSuperior = {
    x: { posi: 0, nega: 0 },
    y: { posi: 0, nega: 0 },
    z: { posi: 0, nega: 0 },
    largo: function () {
        return (this.x.posi + Math.abs(this.x.nega)) + 1;
    },
    ancho: function () {
        return (this.z.posi + Math.abs(this.z.nega)) + 1;
    },
};

var targetProxy = new Proxy(dimensionSuperior, {
    set: function (target, key, value) {
        //dimensionesText.text = (" ancho: " + xtotal + "m alto: " + 0 + "m largo: " + ztotal + "m");

        if (hasTouchscreen === true) {
            setTimeout(function () {
                dimensionesText.text = ("ancho: " + dimensionSuperior.ancho() + /*"m alto: " + 0 +*/ "m largo: " + dimensionSuperior.largo() + "m");
                // altoTotal.innerText = 1;
                anchoTotal.innerText = dimensionSuperior.ancho();
                largoTotal.innerText = dimensionSuperior.largo();

            }, 1000);
        } else {
            setTimeout(function () {

                /*perfLi.innerHTML = `largo: ` + dimensionesTotales.x + ` m`;
                  perfLi1.innerHTML = `ancho: ` + dimensionesTotales.y + ` m`;
                  perfLi2.innerHTML = `alto: ` + dimensionesTotales.z + ` m`;*/
                /*altoTotal.innerText=dimensionesTotales.z;
                anchoTotal.innerText=dimensionesTotales.y;
                largoTotal.innerText=dimensionesTotales.x;*/
                // altoTotal.innerText = 1 + " m";
                anchoTotal.innerText = dimensionSuperior.ancho() + " m";
                largoTotal.innerText = dimensionSuperior.largo() + " m";

                if (typeof perfLi !== 'undefined') {

                    perfLi.innerHTML = `largo: ` + dimensionSuperior.largo() + ` m`;
                    perfLi1.innerHTML = `ancho: ` + dimensionSuperior.ancho() + ` m`;
                }
                //perfLi2.innerHTML = `alto: ` + 1 + ` m`;

            }, 1000);
        }
        target[key] = value;
    }
});
var padreProxy;

let botonesMueble;
let padres = [];
let numPadre = 0;
let mainCustomMesh;
window.addEventListener('DOMContentLoaded', function () {
    gridContainer = document.getElementById("grid-container");
    var currentPosition = { x: 0, y: 0 };
    var currentRotation = { x: 0, y: 0 };
    var clicked = false;
    //se cargar e botton depaypal
    hasTouchscreen = 'ontouchstart' in window;
    if (hasTouchscreen) {
        cambiarMenuMovil(1);
    }
    //alert(hasTouchscreen ? 'has touchscreen' : 'doesn\'t have touchscreen');
    /*dimensionSuperior.watch("x",
        function (identificador, valorViejo, valorNuevo) {
            console.log("objeto." + identificador + " ha cambiado de "
                + valorViejo + " a " + valorNuevo);
            return valorNuevo;
        });*/
    cargando = false;
    isAssigned = false;
    btnCamara = document.getElementById("btnCamara");

    //btnCamara.style.opacity=0.1;
    // btnCamara.style.visibility = "hidden";
    texturaActual = texturas[1];
    moduloActual = modulos[0];
    texturaActual = texturas[1];
    // btnTextura = document.getElementById(texturas[0]);
    //btnTextura1 = document.getElementById(texturas[1]);
    //btnTextura1.style.outline = "5px solid grey";
    //btnTextura2 = document.getElementById(texturas[2]);


    btnModelo = document.getElementById(modulos[0]);
    btnModelo1 = document.getElementById(modulos[1]);
    btnModelo2 = document.getElementById(modulos[2]);
    btnModelo.style.outline = "5px solid grey";
    // btnAplicar = document.getElementById('btnAplicar');
    btnCancelar = document.getElementById('btnCancelar');
    btnRotar = document.getElementById('btnRotar');
    // get the canvas DOM element
    canvas = document.getElementById('render');
    spanPrecio = document.getElementById('Precio');
    divLista = document.getElementById('item4');
    anchoTotal = document.getElementById('largoTotal');
    largoTotal = document.getElementById('anchoTotal');
    altoTotal = document.getElementById('altoTotal');
    cargarJsonTexturas();
    //canvas.getContext('2d');
    // load the 3D engine
    engine = new BABYLON.Engine(canvas, true, { stencil: true });
    // animation : progress indicator
    // createScene function that creates and return the scene
    createScene = function () {
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        //GUI
        //Does not work
        //altoTotal.innerText = 1 + " m";

        anchoTotal.innerText = dimensionSuperior.ancho() + " m";
        largoTotal.innerText = dimensionSuperior.largo() + " m";
        canvas.addEventListener("mousedown", function () {
            meshClicleado = false;
            buttonClicleado = false;
            console.log("Mouse DOWN!");

            if ((meshClicleado == false)) {
                /*   
               if(buttonClicleado==true){
                  // setTimeout(function(){ aplicar(); }, 3000);
               }else{
                   aplicar();
               }*/
            }
            if (hasTouchscreen) {
                document.body.style.overflow = "hidden";
                console.log("en canvas");
            }
            /*
            if (meshClicleado || buttonClicleado) {
                console.log("mesh", meshClicleado);
                console.log("boton", buttonClicleado);
               // activarRotacion();
            } else {
                
            }*/
            // console.log("DOWN,mesh", meshClicleado);
            //console.log("DOWN,boton", buttonClicleado);

        });
        //Works
        canvas.addEventListener("mouseup", function () {
            //console.log("Mouse UP!");
            clicked = false;
            //document.body.style.overflow="hidden";            
            if (hasTouchscreen) {
                document.body.style.overflow = "auto";
            }

            /*
            if (meshClicleado || buttonClicleado) {
                meshClicleado = false;
                buttonClicleado = false;
            }
            */
            if (meshClicleado || buttonClicleado) {
                //console.log("mesh", meshClicleado);
                //console.log("boton", buttonClicleado);
            } else {
                // console.log("mesh", meshClicleado);
                //console.log("boton", buttonClicleado);
                aplicar();
            }

        });

        canvas.addEventListener("pointerdown", function (evt) {
            meshClicleado = false;
            // The pointerdown event signals the start of a touch interaction.
            // This event is cached to support 2-finger gestures
            //evCache.push(evt);
            //log("pointerDown", ev);
            /*if (bandera) {
               // currentPosition.x = evt.clientX;
                //currentPosition.y = evt.clientY;
                //currentRotation.x = padreCentro.rotation.x;
                //currentRotation.y = padreCentro.rotation.y;
            }*/
            clicked = true;
        });
        /*
                canvas.addEventListener("pointermove", function (evt) {
                    // Find this event in the cache and update its record with this event
        
                    for (var i = 0; i < evCache.length; i++) {
                        if (evt.pointerId == evCache[i].pointerId) {
                            evCache[i] = evt;
                            break;
                        }
                    }
                    // If two pointers are down, check for pinch gestures
                    if (evCache.length == 2) {
                        bandera = false;
                        clicked = false;
                        // Calculate the distance between the two pointers
                        var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);
        
                        if (prevDiff > 0) {
                            if (curDiff > prevDiff) {
                                // The distance between the two pointers has increased
                                //log("Pinch moving OUT -> Zoom in", ev);
                                //ev.target.style.background = "pink";
                                console.log("zoom", (camera.position.z - (curDiff / 40) * -1));
        
                                if ((camera.position.z) > -130) {
                                    //camera.position.z = (camera.position.z - (curDiff / 40) * -1);
                                } else {
                                    //camera.position.z = -130;
                                }
                            }
                            if (curDiff < prevDiff) {
                                // The distance between the two pointers has decreased
                                //log("Pinch moving IN -> Zoom out", ev);
                                //ev.target.style.background = "lightblue";
                                console.log("zoom", (camera.position.z + (curDiff / 40) * -1));
                                if ((camera.position.z) < -10) {
                                    //camera.position.z = (camera.position.z + (curDiff / 40) * -1);
        
                                } else {
                                    //camera.position.z = -20;
                                }
                            }
                        }
        
                        // Cache the distance for the next move event 
                        prevDiff = curDiff;
                    }
                    if (!clicked) {
                        return;
                    }
                    //padreCentro.rotation.x
                    /*if (bandera && clicked) {
                        padreCentro.rotation.y = currentRotation.y - (evt.clientX - currentPosition.x) / 350;
                        padreCentro.rotation.x = currentRotation.x + (evt.clientY - currentPosition.y) / 350;
                    }*/
        //console.log("ROTATION X ",padreCentro.rotation.x,"ROTATION Y ",padreCentro.rotation.y);
        // });

        canvas.onpointerup = pointerup_handler;
        canvas.onpointercancel = pointerup_handler;
        canvas.onpointerout = pointerup_handler;
        canvas.onpointerleave = pointerup_handler;


        var scene = new BABYLON.Scene(engine);
        scene.preventDefaultOnPointerDown = false;
        utilLayer = new BABYLON.UtilityLayerRenderer(scene);
        utilLayer.utilityLayerScene.autoClearDepthAndStencil = false;
        utilLayer.DefaultKeepDepthUtilityLayer;

        utilLayer.DefaultKeepDepthUtilityLayer;
        scene.clearColor = new BABYLON.Color3.White();
        //esfera = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

        /*
        gizmoLayer = new BABYLON.GizmoManager(scene, {
            singleGizmo: true
            //UtilityLayerRenderer:utilLayer
       });
        gizmoLayer.positionGizmoEnabled = true;
        gizmoLayer.gizmos.positionGizmo=new BABYLON.PositionGizmo(utilLayer);
        gizmoLayer.gizmos.positionGizmo.scaleRatio = 2;
       */
        // gizmoLayer.positionGizmo
        // Parameters: alpha, beta, radius, target position, scene
        //gizmo = new BABYLON.PositionGizmo();
        //gizmo.attachedMesh = padreCentro;
        hl = new BABYLON.HighlightLayer("hl1", scene);
        //camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

        // This positions the camera
        /*
        camera.setPosition(new BABYLON.Vector3(0, 0, -10));

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        //objetos
        //objetos
        camera.setTarget(BABYLON.Vector3.Zero());
        //camera.lockedTarget = padreCentro;
        camera.useBouncingBehavior = false;
        camera.useFramingBehavior = false;
        camera.useAutoRotationBehavior = true;
        camera.inputs.attached.mousewheel.wheelPrecision = 80;
        */
        //var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
        //camera = new BABYLON.UniversalCamera("camera1", new BABYLON.Vector3(0, 0, -30), scene);
        //camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -30), scene);
        // Creates, angles, distances and targets the camera
        camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 40, new BABYLON.Vector3(0, 0, 0), scene);
        camera.useBouncingBehavior = false;
        camera.useFramingBehavior = false;
        camera.useAutoRotationBehavior = true;
        camera.inputs.attached.mousewheel.wheelPrecision = 80;
        // This positions the camera
        camera.setPosition(new BABYLON.Vector3(0, 0, -10));

        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);


        //camera.attachControl(canvas);
        // camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -30), scene);
        pointerDragBehavior = new BABYLON.PointerDragBehavior({ dragPlaneNormal: new BABYLON.Vector3(0, 0, 1) });
        pointerDragBehavior.useObjectOrienationForDragging = false;

        pointerDragBehavior.onDragStartObservable.add((event) => {
            console.log("dragStart");
            //console.log(event);
            //currentPosition  event.dragPlanePoint.y;
            //currentRotation event.dragPlanePoint.y;
            /*if (bandera) {      
                padreCentro.rotation.x=padreCentro.rotation.x-(event.dragPlanePoint.y/150);
                padreCentro.rotation.y=padreCentro.rotation.y+(event.dragPlanePoint.x/150);
            }*/
        });
        pointerDragBehavior.onDragObservable.add((event) => {
            //console.log("drag");
            //console.log(event);
            //dragPlaneNormal
            //dragPlanePoint
            //console.log("d x",event.dragPlanePoint.x,"y",event.dragPlanePoint.y);
            //console.log("deltaX",event.delta.x);
            //console.log("deltaY",event.delta.z);
            /*if (bandera) {      
                padreCentro.rotation.x=padreCentro.rotation.x-(event.dragPlanePoint.y/150);
                padreCentro.rotation.y=padreCentro.rotation.y+(event.dragPlanePoint.x/150);
            }*/
        });
        pointerDragBehavior.onDragEndObservable.add((event) => {
            //console.log("dragEnd");
            //console.log(event);
            /*
            if (bandera) {      
                padreCentro.rotation.x=padreCentro.rotation.x-(event.dragPlanePoint.y/150);
                padreCentro.rotation.y=padreCentro.rotation.y+(event.dragPlanePoint.x/150);
            }
            */

        });

        //camera.setTarget(BABYLON.Vector3.Zero());
        /*camara = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, -Math.PI / 2, 200, BABYLON.Vector3.Zero(), scene);
        camara.upperBetaLimit = 3;
        camara.lowerRadiusLimit = 4;
        camara.upperRadiusLimit = 4;
        //camara.minZ = 0.1;
        camara.setPosition(new BABYLON.Vector3(0, 0,10));
        //camara.attachControl(canvas, true, false, true);
        camara.attachControl(canvas, true);
        //camara.inputs.addGamepad();
        camara.useBouncingBehavior = false;
        camara.useFramingBehavior = false;
        camara.useAutoRotationBehavior = true;
        camara.inputs.attached.mousewheel.wheelPrecision = 40;
        camara.beta = Math.PI * 0.1;
        */
        var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
        // compared click for sphere
        advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        /*
        grid = new BABYLON.GUI.Grid();
        advancedTexture.addControl(grid);

        grid.addColumnDefinition(20, true);
        grid.addColumnDefinition(20, true);
        grid.addColumnDefinition(.25);
        grid.addColumnDefinition(20., true);
        grid.addColumnDefinition(20., true);
        grid.addRowDefinition(10, true);
        grid.addRowDefinition(20, true);
        grid.addRowDefinition(.25);
        grid.addRowDefinition(50, true);
        grid.addRowDefinition(40, true);

*/
        if (!hasTouchscreen) {
            //crearInterfaceDatGUI();
            //addSlider(false, true, true, 3, 2, false);
            //addSlider(true, true, true, 2, 1, false);
            //addSlider(false, true, true, 1, 2, true);
        } else {
            //crearInterfaceDatGUI();

            crearInterfaceTexto();
        }
        engine.runRenderLoop(function () {
            scene.render();
        });
        //scene.debugLayer.show();

        //esfera = BABYLON.Mesh.CreateBox("box", 2, scene);
        scene.onBeforeRenderObservable.add(() => {

        })
        //createButton();
        // On click event, request pointer lock
        scene.onPointerDown = function (evt) {
            console.log(evt);
            if (!engine.isFullscreen) {
                engine.switchFullscreen(true); //true = requestPointerLock.
            }
            else if (!engine.isPointerLock && canvas.requestPointerLock) {
                //Back-up pointerlock request in-case fullscreen pointerlock request fails. (*cough* Edge)
                canvas.requestPointerLock();
            }

        };
        return scene;

    }


    escena = createScene();
    camera.inputs.attached.mousewheel.detachControl(canvas);
    hl = new BABYLON.HighlightLayer("hl1", escena);
    hl.innerGlow = false;
    background = new BABYLON.Layer("back", "assets/imagenes/fondos/sala3.jpg", escena);
    background.isBackground = true;
    background.texture.level = 0;
    //container = new BABYLON.AssetContainer(escena);


    manager = new BABYLON.GUI.GUI3DManager(escena);
    padreCentro = new BABYLON.Mesh("padreCentro", escena);
    padreProxy = new Proxy(padreCentro.rotation, {
        set: function (target, key, value) {
            console.log(target);
            console.log(key);
            if (key == 'x') {
                padreCentro.rotation.x = value;
                if (customMesh) {
                    mainCustomMesh.rotation.x = value;
                }
            }
            if (key == 'y') {
                padreCentro.rotation.y = value;
                if (customMesh) {
                    mainCustomMesh.rotation.y = value;
                }
            }
            if (key == 'z') {
                padreCentro.rotation.z = value;
                if (customMesh) {
                    mainCustomMesh.rotation.z = value;
                }
            }
            console.log(value);
            target[key] = value;
        }

    });
    padreActual = padreCentro;

    //cargarModelo(padreCentro, modelos.puffs[0].nombre);
    pantallaCarga();
    cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true));

    padreCentro.addBehavior(pointerDragBehavior);
    activarRotacion();
    BABYLON.Scene.LongPressDelay = 200;

});
window.addEventListener("resize", function () {
    engine.resize();
});

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
        btnIzquierdo.scaling.y = 2;
        btnIzquierdo.scaling.x = 2;
        btnIzquierdo.onPointerClickObservable.add(function () {
            console.log("btnDerecho");
            meshClicleado = true;
            //meshClicleado=true;
            buttonClicleado = true;
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual, true));
            btnIzquierdo.dispose();
            esconderMesh(btnDerecho, true);
            esconderMesh(btnFrente, true);
            activarBotonesAplicar(true);
            ultimoClickeado = "izquierda";
            resaltarMueble(padreActual, false);
            // padreActual.setParent(null);
            setTimeout(function () { compararPoicion(padreActual); }, 1000);
        });

    } if (opc === 'frente') {
        btnFrente = new BABYLON.GUI.Button3D(mesh, mesh.name);
        manager.addControl(btnFrente);
        btnFrente.linkToTransformNode(mesh);
        btnFrente.scaling = new BABYLON.Vector3(.4, .4, .4);
        btnFrente.position.x = -0.2
        btnFrente.mesh.rotation.y = -Math.PI / 2;
        btnFrente.content = text1;
        btnFrente.scaling.y = 2;
        btnFrente.scaling.x = 2;
        btnFrente.onPointerClickObservable.add(() => {
            console.log("btnDerecho");
            meshClicleado = true;
            //meshClicleado=true;
            buttonClicleado = true;
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual, true));
            btnFrente.dispose();
            esconderMesh(btnIzquierdo, true);
            esconderMesh(btnDerecho, true);
            activarBotonesAplicar(true);
            ultimoClickeado = "frente";
            resaltarMueble(padreActual, false);
            //padreActual.setParent(null);
            setTimeout(function () { compararPoicion(padreActual); }, 1000);
        });
    }
    if (opc === 'derecha') {
        btnDerecho = new BABYLON.GUI.Button3D(mesh, mesh.name);
        manager.addControl(btnDerecho);
        btnDerecho.linkToTransformNode(mesh);
        btnDerecho.scaling = new BABYLON.Vector3(.4, .4, .4);
        btnDerecho.position.z = 0.2;
        btnDerecho.content = text1;
        btnDerecho.scaling.x = 2;
        btnDerecho.scaling.y = 2;
        btnDerecho.onPointerClickObservable.add(() => {
            console.log("btnDerecho");
            meshClicleado = true;
            //meshClicleado=true;
            buttonClicleado = true;
            cargarModelo(mesh, modeloActual(texturaActual, moduloActual, true));
            btnDerecho.dispose();
            esconderMesh(btnIzquierdo, true);
            esconderMesh(btnFrente, true);
            activarBotonesAplicar(true);
            ultimoClickeado = "derecha";
            resaltarMueble(padreActual, false);
            //padreActual.setParent(null);
            setTimeout(function () { compararPoicion(padreActual); }, 1000);
        });
    }
}

function cargarModelo(padre, modelo, posicion, prearmado, rotacion) {
    camera.inputs.attached.mousewheel.detachControl(canvas);
    //para quitar el padre pero dejar las tran
    console.log("prearmado", prearmado);
    console.log("posicion", posicion);
    customMesh = false;
    //alert("ENTRO");
    var derecha;
    var izquierda;
    var frente;
    //console.log(hijos);
    if (!modelo) {
        modelo = "BrazoContempo.gltf";
    }
    engine.displayLoadingUI();
    showLoadingScreen();
    //showLoadingScreen();
    //
    BABYLON.SceneLoader.LoadAssetContainer("assets/modelos/", modelo, escena, function (newMeshes) {
        meshesAcargar = newMeshes;
        padreAnterior = padreActual;
        padreActual = newMeshes.meshes[0].getChildren()[0];
        padreActual.setParent = padreCentro;
        if (typeof posicion !== 'undefined') {
            console.log("posicion", posicion);
            padreActual.position = posicion;
        }
        numPadre++;
        padreActual.precio = modeloActual(texturaActual, moduloActual, false);
        padreActual.name = modeloActual(texturaActual, moduloActual, true);
        padres.push(padreActual);
        precioTotal = 0;
        padres.forEach((x) => precioTotal += x.precio);
        spanPrecio.innerText = "$" + precioTotal;
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
            ultimoClickeado = "primer";
        }
        meshDebug = izquierda;
        meshDebug1 = derecha;
        meshDebug2 = frente;
        createButon3D(meshDebug1, 'derecha');
        createButon3D(meshDebug, 'izquierda');
        createButon3D(meshDebug2, 'frente');
        if (typeof prearmado !== 'undefined') {
            newMeshes.meshes.forEach(mesh => {
                hl.addMesh(mesh, BABYLON.Color3.Green());
                //container.meshes.push(mesh);
                meshClickleable(mesh);

            });
            console.log("ROTACION", rotacion);
            if (rotacion > 0) {
                for (let index = 0; index < rotacion; index++) {
                    padreActual.rotation.y = (Math.PI / 2) + padreActual.rotation.y;
                    console.log("ROTACION");
                }
            }
            padreActual.parent = padre;
            //console.log("TRUE");
        } else {
            newMeshes.meshes.forEach(mesh => {
                hl.addMesh(mesh, BABYLON.Color3.Green());
                //container.meshes.push(mesh);
                meshClickleable(mesh);
            });
            padreActual.parent = padre;
        }
        activarBotonesAplicar(true);
        esconderTodosBotones(false);
        newMeshes.addAllToScene();
        if (typeof prearmado !== 'undefined') {
            aplicar();

        }
        if ((padre.name == 'frente') || (padre.name == 'derecha') || (padre.name == 'izquierda')) {
            console.log('botonClicleado', padre.name);

            padreActual.parent = null;
            padreActual.setAbsolutePosition(padre.getAbsolutePosition());
        }
    }, onProgress = () => {
        engine.hideLoadingUI();
        hideLoadingScreen();
        //padreActual.setParent(null);
    }, onError = (x) => {
        //console.log("progress")
        console.log("progreso", x);
        engine.displayLoadingUI();
    });
    //padreActual.setParent(padreCentro);
}

function cargarModeloCustom(modelo, div, parametrosCarrito) {
    camera.inputs.attached.mousewheel.detachControl(canvas);
    var descripcionTextura = document.getElementById("descripcionMaterial");
    descripcionTextura.innerHTML = "";
    var agregarBtn = document.getElementById("btn-agregar-3d-a-carrito");
    if (typeof parametrosCarrito === "undefined") {
        if (typeof div !== "undefined") {
            debugg = div;
            var onClicA = div.parentNode.parentNode.parentNode;
            var click = onClicA.childNodes[4].attributes.onclick;
           
            agregarBtn.setAttribute("onClick", click.textContent);
        }
        console.log("parametro",parametrosCarrito);
    } else {
        agregarBtn.setAttribute("onClick", "agregarAlCarrito('Toot',3899,'images/productos/puffino/oaxaca.jpg')");
    }

    if (escena.isReady()) {

        esconderTodosBotones(true);

        customMesh = true;

        for (let i = escena.meshes.length - 1; i >= 0; i--) {

            escena.removeMesh(escena.meshes[i]);
        }
        precioTotal = 0;
        precioTotal = modelo.precio;
        spanPrecio.innerText = "$" + precioTotal;
        showLoadingScreen();
        // BABYLON.SceneLoader.LoadAssetContainer("assets/modelos/", modelo.nombre, escena, function (newMeshes) {
        BABYLON.SceneLoader.ImportMesh("", "assets/modelos/", modelo.nombre, escena, function (newMeshes, particleSystems) {
            //console.log(newMeshes);
            //console.log(padre);
            //ModeloCustom=newMeshes;
            //debugg = newMeshes[0].getChildren()[0];

            // newMeshes[0].setParent(padreCentro);
            newMeshes.forEach(mesh => {
                //hl.addMesh(mesh, BABYLON.Color3.Green());
                // container.meshes.push(mesh);
                meshClickleable(mesh);
                //mesh.parent = padreCentro;
                //mesh.setParent(padreCentro);
                /*if (mesh.name == "main") {
                    // mainCustomMesh=mesh;
                    debugg.addBehavior(pointerDragBehavior);
                }*/

            });
            mainCustomMesh = newMeshes[0];

            console.log("tamanio", newMeshes.length());
            //newMeshes.forEach(x=>x.setParent(padreCentro));
            if (typeof posicion === 'undefined') {

            } else {
                newMeshes[1].position = posicion;
            }
            //newMeshes.meshes[0].getChildren()[0].setParent(padreCentro);
            //engine.displayLoadingUI();
            //hideLoadingScreen();
            console.log("terminó");
            rand.onClick();
            hideLoadingScreen();
            camera.zoomOn();
            camera.maxZ = 1000;
            camera.target = padreCentro.position;
        }, onProgress = (x) => {
            console.log("importados", x)

            //padreActual.setParent(null);
        }, onError = (x) => {
            hideLoadingScreen();
            camera.zoomOn();
            camera.maxZ = 1000;
            camera.target = padreCentro.position;
            console.log("errores", x);
            //padreActual.setParent(null);
        });
        /*camera.zoomOn();
        camera.maxZ=1000;
        camera.target=padreCentro.position;*/

    } else {
        console.log("espera a que carge este elemento");
    }

}

function cambioTextura(opc) {
    texturaActual = texturas[opc];

    actualizarMueble();
    //removerModelo(padreActual);
    agregarBorder(opc, true);
    //alert(modeloActual(texturaActual,moduloActual));
    //alert(opc);
}
function cambioModulo(opc, limpiar) {
    moduloActual = modulos[opc];
    if ((typeof limpiar === 'undefined') != true) {
        //escena.meshes.forEach((x) => { x.dispose() });
        //container.meshes.forEach((x) => { x.dispose() });
        for (var i = 0; i < escena.meshes.length; i++) {
            escena.meshes[i].dispose();
            i--;
        }
    }
    if (customMesh) {
        cargarModelo(padreActual, modeloActual(texturaActual, moduloActual, true)/*, { hijosDerecha, hijosFrente, hijosIzquierda }*/);
    } else {
        actualizarMueble();
        agregarBorder(opc, false);
    }
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
        if (padres.length < 2) {
            btnCancelar.style.visibility = "hidden";
        } else {
            btnCancelar.style.visibility = "visible";
        }

        //btnAplicar.style.visibility = "visible";
        btnRotar.style.visibility = "visible";
        //btnCamara.style.visibility = "hidden";
        /*
                btnTextura.style.opacity = 1;
                btnTextura.setAttribute("onClick", "javascript: cambioTextura(0);");
                btnTextura1.style.opacity = 1;
                btnTextura1.setAttribute("onClick", "javascript: cambioTextura(1);");
                btnTextura2.style.opacity = 1;
                btnTextura2.setAttribute("onClick", "javascript: cambioTextura(2);");
        */
        btnModelo.style.opacity = 1;
        btnModelo.setAttribute("onClick", "javascript: cambioModulo(0);");
        btnModelo1.style.opacity = 1;
        btnModelo1.setAttribute("onClick", "javascript: cambioModulo(1);");
        btnModelo2.style.opacity = 1;
        btnModelo2.setAttribute("onClick", "javascript: cambioModulo(2);");

        //btnCamara.style.opacity = .2;
        //btnCamara.setAttribute("onClick", "javascript: ;");
    } else {
        //btnAplicar.style.visibility = "hidden";
        btnCancelar.style.visibility = "hidden";
        //btnRotar.style.visibility = "hidden";
        //btnCamara.style.visibility = "visible";
        muebleSelecionado = false;
        /*
                btnTextura.style.opacity = .2;
                btnTextura.setAttribute("onClick", "javascript: ;");
                btnTextura1.style.opacity = .2;
                btnTextura1.setAttribute("onClick", "javascript: ;");
                btnTextura2.style.opacity = .2;
                btnTextura2.setAttribute("onClick", "javascript: ;");
        */
        btnModelo.style.opacity = .2;
        btnModelo.setAttribute("onClick", "javascript: ;");
        btnModelo1.style.opacity = .2;
        btnModelo1.setAttribute("onClick", "javascript: ;");
        btnModelo2.style.opacity = .2;
        btnModelo2.setAttribute("onClick", "javascript: ;");

        //btnCamara.style.opacity = 1;
        //btnCamara.setAttribute("onClick", "javascript: activarCamara();");

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
    meshClicleado = false;
}

function removerModelo(padre) {
    if (padres.length >= 1) {
        hijosBorrar = padre.getChildren();
        actualizarAlBorrar();
        padres.splice(padres.indexOf(padreActual), 1);
        padre.dispose();
    }
    if (padres.length < 1) {
        targetProxy.x = { posi: 0, nega: 0 };
        targetProxy.y = { posi: 0, nega: 0 };
        targetProxy.z = { posi: 0, nega: 0 };
    }

}
function cancelar() {
    //aumentarPrecioTotal(-ultimoPrecio);

    removerModelo(padreActual);
    //resaltarMueble(padreActual, false);
    activarBotonesAplicar(false);
    esconderMesh(btnIzquierdo, true);
    esconderMesh(btnDerecho, true);
    esconderMesh(btnFrente, true);
    precioTotal = 0;
    padres.forEach((x) => precioTotal += x.precio)
    spanPrecio.innerText = "$" + precioTotal;
    //actualizarTablaMuebles();
    //divLista.innerText = getListaMuebles(padres);
}

function modeloActual(text, moduA, nombre, completo) {
    let selecionado = 'normal';
    let indiceModulo = modulos.indexOf(moduA.toString());
    let indiceTextura = texturas.indexOf(text.toString());
    //  console.log("textura indice", indiceTextura);
    // console.log("modulo indice", indiceModulo);
    switch (indiceModulo) {
        case 0:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.taburetes[indiceTextura].nombre;
                //console.log('modulo', selecionado);
            }
            if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.taburetes[indiceTextura].precio;
            }
            if (completo == true) {
                selecionado = modelos.taburetes[indiceTextura];
            }

            break;
        case 1:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.brazos[indiceTextura].nombre;
                // console.log('modulo', selecionado);
            } if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.brazos[indiceTextura].precio;
            }

            if (completo == true) {
                selecionado = modelos.brazos[indiceTextura];
            }
            break;
        case 2:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.esquinas[indiceTextura].nombre;
                // console.log('modulo', selecionado);
            } if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.esquinas[indiceTextura].precio;

            }

            if (completo == true) {
                selecionado = modelos.esquinas[indiceTextura];
            }
            break;
        case 3:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.completos[indiceTextura].nombre;
                // console.log('modulo', selecionado);
            } if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.completos[indiceTextura].precio;
            }
            if (completo == true) {
                selecionado = modelos.completos[indiceTextura];
            }
            break;
        case 4:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.completos[indiceTextura].nombre;
                // console.log('modulo', selecionado);
            } if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.completos[indiceTextura].precio;
            }
            if (completo == true) {
                selecionado = modelos.completos[indiceTextura];
            }
            break;
        default:
            if (nombre == true /*&& completo === "undefined"*/) {
                selecionado = modelos.taburetes[indiceTextura].nombre;
                //console.log('modulo', selecionado);
            } if (nombre == false /*&& completo === "undefined"*/) {
                selecionado = modelos.taburetes[indiceTextura].precio;
            }
            if (completo == true) {
                selecionado = modelos.taburetes;
            }
            break;
    }
    //console.log("selecionado", selecionado);
    return selecionado;
}

function puffActual(mod) {
    return modelos.puffs[mod].nombre;
}
function meshClickleable(mesh) {
    /*
    clicked = false;
    bandera = !bandera;
    if (bandera) {
        pointerDragBehavior.moveAttached = false;
    } else {
        pointerDragBehavior.moveAttached = true;
    }
    */

    mesh.actionManager = new BABYLON.ActionManager(escena);
    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
        console.log("%c ActionManager: up  mesh: " + mesh.name, 'background: orange; color: white');
        //activarRotacion();
        bandera = true;

        meshClicleado = true;
        bandera = false;

        //aplicar();
        mesh.parent.addBehavior(pointerDragBehavior);
        //mesh.addBehavior(pointerDragBehavior);
        if (muebleSelecionado === false && customMesh === false) {
            esconderMesh(btnDerecho, false);
            esconderMesh(btnIzquierdo, false);
            esconderMesh(btnFrente, false);
            resaltarMueble(mesh.parent, true);
            padreActual = mesh.parent;
            activarBotonesAplicar(true);
        }
    }));
    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
        //activarRotacion();
        if (muebleSelecionado) {
            aplicar();
        }
    }));
    /*
    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
        activarRotacion();
    }));*/
    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLongPressTrigger, (function (mesh) {
        console.log("%c ActionManager: long press : " + mesh.name, 'background: green; color: white');

    }).bind(this, mesh)));
}
/*Esta funcion se activa cuando se cambia de textura o de modulo */
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
        var dummy = new BABYLON.Mesh("dummy", escena);
        dummy.parent = padreActual;
        dummy.setParent(null);
        padreTemp = padreActual.parent;
        removerModelo(padreActual);
        //cargarModelo(meshDebug1, modeloActual(texturaActual, moduloActual));
        if (hijosDerecha || hijosFrente || hijosIzquierda) {
            cargarModelo(padreActual, modeloActual(texturaActual, moduloActual, true)/*, { hijosDerecha, hijosFrente, hijosIzquierda }*/);
        } else {
            console.log("no hay hijos");
            cargarModelo(dummy, modeloActual(texturaActual, moduloActual, true)/*, 'no hay hijos'*/);
            //console.log("no hay hijos");
        }
    }

}
function rotarSelecionado() {
    if (customMesh) {
        padreCentro.rotation.y = (Math.PI / 2) + padreCentro.rotation.y;
    } else {
        if (meshClicleado) {
            padreActual.rotation.y = (Math.PI / 2) + padreActual.rotation.y;
        }
    }


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
    //compararPoicion(padreActual.getBoundingInfo().boundingBox.centerWorld);
    var xtotal = 0;
    var ztotal = 0;
    dimensionesTotales.x += modelo.dimensiones.largo;
    dimensionesTotales.y += modelo.dimensiones.ancho;
    //dimensionesTotales.z += modelo.dimensiones.alto;

    xtotal = ((Number(dimensionSuperior.x.posi)) + (Number(Math.abs(dimensionSuperior.x.nega)))).toFixed(1);
    ztotal = ((Number(dimensionSuperior.z.posi)) + (Number(Math.abs(dimensionSuperior.z.nega)))).toFixed(1);
    //ztotal = Number(dimensionSuperior.z.posi) + Math.abs(dimensionSuperior.z.nega).toFixed(1);
    //xtotal = Number(dimensionSuperior.x.posi) + Math.abs(dimensionSuperior.x.nega).toFixed(1);
    xtotal = 1 + Number(xtotal);
    ztotal = 1 + Number(ztotal);
    console.log("xtotal", xtotal);
    console.log("ztotal", ztotal);
    //dimensionesText.text = (" ancho: " + dimensionesTotales.x + " alto: " + dimensionesTotales.y + " largo: " + dimensionesTotales.z);
    if (hasTouchscreen === true) {
        dimensionesText.text = (" ancho: " + xtotal + /*"m alto: " + 0*/ + "m largo: " + ztotal + "m");

        //altoTotal.innerText = dimensionesTotales.z;
        anchoTotal.innerText = dimensionesTotales.y;
        largoTotal.innerText = dimensionesTotales.x;
    } else {
        perfLi.innerHTML = `largo: ` + dimensionesTotales.x + ` m`;
        perfLi1.innerHTML = `ancho: ` + dimensionesTotales.y + ` m`;
        //perfLi2.innerHTML = `alto: ` + dimensionesTotales.z + ` m`;
    }
}
/*function activarCamara() {   
cargarCamara(escena, camara);
}*/
function desactivarScroll(bool) {
    //sconsole.log("TOCHADO");
    //BABYLON.Tools.CreateScreenshot(engine, camara, (canvas.width,canvas.height));
    if (bool) {
        document.body.noScroll.overflow = "hidden";
    } else {
        document.body.noScroll.overflow = "auto";
    }
}
function crearInterfaceDatGUI() {
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
        camara.upperRadiusLimit = value;
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
    var textnode = document.createTextNode("largo :" + dimensionesTotales.x);
    var textnode1 = document.createTextNode("Ancho :" + dimensionesTotales.x);
    //var textnode2 = document.createTextNode("Alto :" + dimensionesTotales.x);
    perfLi.appendChild(textnode);
    perfLi1.appendChild(textnode1);
    //perfLi2.appendChild(textnode2);
    perfLi.classList.add("gui-Dimensiones");
    perfLi.classList.add("gui-Dimensiones");
    perfLi.classList.add("gui-Dimensiones");
    perfFolder.__ul.appendChild(perfLi);
    perfFolder.__ul.appendChild(perfLi1);
    perfFolder.__ul.appendChild(perfLi2);
    var customContainer = document.getElementById('main');
    customContainer.appendChild(gui.domElement);
    f2.open();
}
function crearInterfaceTexto() {
    dimensionesText = new BABYLON.GUI.TextBlock();
    dimensionesText.text = (" ancho: " + 1 + /*" alto: " + 1 + */" largo: " + 1);
    dimensionesText.color = "black";
    dimensionesText.fontSize = 12;
    advancedTexture.addControl(dimensionesText);
    dimensionesText.textVerticalAlignment = 1;
}
function compararPoicion(numO) {
    let num = numO.getBoundingInfo().boundingBox.centerWorld;
    console.log("cordenandasss", num);
    var objeto = padres.filter(obj => {
        return obj.name === numO.name;
    });
    console.log("OBJETO", objeto);
    if (num.x > 0) {
        if (num.x > dimensionSuperior.x.posi) {
            //dimensionSuperior.x.posi = num.x;
            targetProxy.x = { posi: Number(num.x.toFixed(2)), nega: dimensionSuperior.x.nega };
            objeto[0].esSuperior = "xPosi";
            objeto[0].valorSup = targetProxy.x.posi;
        }
    }
    if (num.x < 0) {
        if (num.x < dimensionSuperior.x.nega) {
            //dimensionSuperior.x.nega = num.x;
            targetProxy.x = { posi: dimensionSuperior.x.posi, nega: Number(num.x.toFixed(2)) };
            objeto[0].esSuperior = "xNega";
            objeto[0].valorSup = targetProxy.x.nega;
        }
    }
    if (num.y > 0) {
        if (num.y > dimensionSuperior.y.posi) {
            //dimensionSuperior.y.posi = num.y;
            targetProxy.y = { posi: Number(num.y.toFixed(2)), nega: dimensionSuperior.y.nega };
            objeto[0].esSuperior = "yPosi";
            objeto[0].valorSup = targetProxy.y.posi;
        }
    }
    if (num.y < 0) {
        if (num.y < dimensionSuperior.y.nega) {
            //dimensionSuperior.y.nega = num.y;
            targetProxy.y = { posi: dimensionSuperior.y.posi, nega: Number(num.y.toFixed(2)) };
            objeto[0].esSuperior = "yNega";
            objeto[0].valorSup = targetProxy.y.nega;
        }
    }
    if (num.z > 0) {
        if (num.z > dimensionSuperior.z.posi) {
            //dimensionSuperior.z.posi = num.z;
            targetProxy.z = { posi: Number(num.z.toFixed(2)), nega: dimensionSuperior.z.nega };
            objeto[0].esSuperior = "zPosi";
            objeto[0].valorSup = targetProxy.z.posi;
        }
    }
    if (num.z < 0) {
        if (num.z < dimensionSuperior.z.nega) {
            //dimensionSuperior.z.nega = num.z;
            targetProxy.z = { posi: dimensionSuperior.z.posi, nega: Number(num.z.toFixed(2)) };
            objeto[0].esSuperior = "zNega";
            objeto[0].valorSup = targetProxy.z.nega;
        }
    }
}
//mesh.getBoundingInfo().boundingBox.center is in object space
//mesh.getBoundingInfo().boundingBox.centerWorld 
function alerta(num) {
    console.log("numero de alerta");
    alert("alerta" + num);
}
function actualizarAlBorrar() {
    var superiorTemp = {
        x: { posi: 0, nega: 0 },
        y: { posi: 0, nega: 0 },
        z: { posi: 0, nega: 0 }
    }
    padres.forEach((element) => {
        console.log("valor elemento")
        if (element.esSuperior == "xPosi") {
            if (element.valorSup > superiorTemp.x.posi) {
                superiorTemp.x.posi = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
        if (element.esSuperior == "xNega") {
            if (element.valorSup < superiorTemp.x.nega) {
                superiorTemp.x.nega = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
        if (element.esSuperior == "yPosi") {
            if (element.valorSup > superiorTemp.y.posi) {
                superiorTemp.y.posi = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
        if (element.esSuperior == "yNega") {
            if (element.valorSup < superiorTemp.y.nega) {
                superiorTemp.y.nega = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
        if (element.esSuperior == "zPosi") {
            if (element.valorSup > superiorTemp.z.posi) {
                superiorTemp.z.posi = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
        if (element.esSuperior == "zNega") {
            if (element.valorSup < superiorTemp.z.nega) {
                superiorTemp.z.nega = element.valorSup;
                //console.log("NUEVAS mediciones",superiorTemp);
            }
        }
    });
    console.log("NUEVAS mediciones", superiorTemp);
    targetProxy.x = { posi: superiorTemp.x.posi, nega: superiorTemp.x.nega };
    targetProxy.y = { posi: superiorTemp.y.posi, nega: superiorTemp.y.nega };
    targetProxy.z = { posi: superiorTemp.z.posi, nega: superiorTemp.z.nega };
    /*dimensionSuperior.x.posi=superiorTemp.x.posi;
    dimensionSuperior.x.nega=superiorTemp.x.nega;
    dimensionSuperior.y.posi=superiorTemp.y.posi;
    dimensionSuperior.y.nega=superiorTemp.y.nega;
    dimensionSuperior.z.posi=superiorTemp.z.posi;
    dimensionSuperior.z.nega=superiorTemp.z.nega;*/
}
function aumentarPrecioTotal(num) {
    ultimoPrecio = num;
    precioTotal += num;
    spanPrecio.innerText = "$" + precioTotal;
}

function getListaMuebles(padres) {
    var lista = [];
    var string;
    padres.forEach((x) => {
        string = x.name.substr(0, x.name.length - 5);
        string = string.replace(/([A-Z])/g, ' $1').trim();
        string = string.toLowerCase();
        string = string.charAt(0).toUpperCase() + string.slice(1);
        lista.push(string);
    });
    return lista;
}

function generarRenglonMueble(cantidad, nombreMueble, precio) {
    let renglonTabla =
        `   <tr>
               <th scope="row">`+ cantidad + `</th>
               <td>`+ nombreMueble + `</td>
               <td>$`+ precio + `</td>
               <td>$`+ (precio * cantidad) + `</td>
           </tr>
               `
    return renglonTabla;
}
/*
function actualizarTablaMuebles() {
    let tbody = document.getElementById("tbodyMuebles");
    let renglones = "";
    getListaMueblesTabla(getListaMuebles(padres)).forEach(x => {
        renglones = renglones + generarRenglonMueble(x.cantidad, x.mueble, x.precio);

    });
    tbody.innerHTML = renglones;
}
*/

function exiteMueble(muebles, dato) {
    let datito = muebles.find(o => o.mueble === dato);
    console.log("DATITO", datito);
    return datito ? true : false;
}
/*esta funcion cuanta la cantidad de muebles en el arreglo */
function getListaMueblesTabla(listaB) {
    var listac = [];
    listaB.forEach(x => {
        if (listac.some(e => e.mueble === x)) {
            console.log("listac", listac.some(e => e.mueble === x));
        } else {
            console.log("x", x);
            listac.push({
                mueble: x,
                cantidad: ocurrencias(listaB, x),
                precio: obtenerPrecioDeMueble(x)
            });
        }
    });
    return listac;
}

function ocurrencias(array, valor) {
    let ocurrencias = 0;
    for (let i = 0; i < array.length; i++) {
        if (valor == array[i]) {
            ocurrencias++;
        };
    }
    return ocurrencias;
}

function obtenerPrecioDeMueble(mueble) {
    var modelo = nombreMuebleAarchivo(mueble);
    var iniciales = modelo.substring(0, 3);
    var precio;
    console.log("iniciales", iniciales);
    switch (iniciales) {
        case 'tab':
            let taburete = modelos.taburetes.find(x => x.nombre === modelo);
            precio = taburete.precio;
            break;
        case 'bra':
            let brazo = modelos.brazos.find(x => x.nombre === modelo);
            precio = brazo.precio;
            break;
        case 'esq':
            let esquina = modelos.esquinas.find(x => x.nombre === modelo);
            precio = esquina.precio;
            break;
    }
    return precio;
}
//esta funcion cambia de nombre de mueble a nombre de archivo
function nombreMuebleAarchivo(mueble) {
    var transformada = mueble.split(" ");
    transformada[0] = transformada[0].toLowerCase();
    transformada[1] = transformada[1].charAt(0).toUpperCase() + transformada[1].slice(1);

    return transformada[0] + transformada[1] + ".gltf";

}
/*
listaB.forEach(x => {
        if (listac.some(e => e.mueble === x)) {
            console.log("listac",listac.some(e => e.mueble === x));
        } else {
            console.log("x",x);
            listac.push({
                mueble: x,
                cantidad: ocurrencias(listaB, x)
            });
            console.log("listac",listac);
        }
});
*/
/*
padreActual.getChildren()[0].material._albedoTexture.dispose()
new BABYLON.Texture("textures/filename", scene);
padreActual.getChildren()[0].material._albedoTexture= new BABYLON.Texture("assets/modelos/tabureteContempo1_base_DIFFUSE.jpg", escena);
*/

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
    var texturasHTML = "";
    var texturasHTML1 = "";
    var texturasHTML2 = "";
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
    //console.log(texturasHTML);
    gridTexturas.innerHTML = texturasHTML;
    gridTexturas1.innerHTML = texturasHTML1;
    gridTexturas2.innerHTML = texturasHTML2;
}

function generarBotonImagen(srcImagenChico, srcImagenMedio) {
    var btnImagen = `<input type="image" src="assets/texturas/chico/` + srcImagenChico + `" class="btn-imagen-grid" id="` + srcImagenMedio + `"  onclick="cambiarTexturaCliente('` + srcImagenMedio + `');"/>`;
    return btnImagen;
}

function cambiarTexturaCliente(nombreTextura) {
    var descripcionTextura = document.getElementById("descripcionMaterial");
    console.log(nombreTextura);
    descripcionTextura.innerHTML = nombreImagenTextura(nombreTextura);
    //console.log("textura:",nombreTextura);
    var path = "assets/texturas/medio/" + nombreTextura + "";
    escena.materials.forEach((x) => {
        x._albedoTexture = new BABYLON.Texture(path, escena);
    });
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

function prearmado(v, matriz) {
    precioTotal = 0;

    var cordenada =
        [
            [{ x: -4.75, y: 0, z: -4.75 }, { x: -4.75, y: 0, z: 0 }, { x: -4.75, y: 0, z: 4.75 }],
            [{ x: 0, y: 0, z: -4.75 }, { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 4.75 }],
            [{ x: 4.75, y: 0, z: -4.75 }, { x: 4.75, y: 0, z: 0 }, { x: 4.75, y: 0, z: 4.75 }]
        ];

    //escena.meshes.forEach((x) => { x.dispose() });
    //container.meshes.forEach((x) => { x.dispose() });
    // escena.meshes = [];
    //container.meshes = [];
    for (var i = 0; i < matriz.length; i++) {
        //console.log(matriz[i]);
        for (var j = 0; j < matriz.length; j++) {
            //console.lo(g(matriz[i][j]);
            if (matriz[i][j].cor == 1) {
                console.log(cordenada[i][j]);
                //)cargarModeloCustom(modelos.taburetes[v].nombre,cordenada[i][j]);
                //cargarModelo(padreCentro, modelos.puffino[0].nombre);
                console.log("tipo", matriz[i][j].tipo);
                //cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true), cordenada[i][j], true);
                switch (matriz[i][j].tipo) {
                    case "taburete":
                        cargarModelo(padreCentro, modelos.taburetes[1].nombre, cordenada[i][j], true, matriz[i][j].rotacion);
                        break;
                    case "esquina":
                        cargarModelo(padreCentro, modelos.esquinas[1].nombre, cordenada[i][j], true, matriz[i][j].rotacion);
                        break;
                    case "brazo":
                        cargarModelo(padreCentro, modelos.brazos[1].nombre, cordenada[i][j], true, matriz[i][j].rotacion);
                        break
                    default:
                        cargarModelo(padreCentro, modelos.taburetes[1].nombre, cordenada[i][j], true, matriz[i][j].rotacion);
                        break;
                }


            }
        }
    }

    /*    
        console.log("matriz", matriz);
        console.log("es i", i);
        container.meshes.forEach((x) => { x.dispose() });
        cargarModelo(padreCentro, modeloActual(texturaActual, modulos[1], true));
        //cargarModelo(padreCentro, modeloActual(texturaActual, modulos[2], true));
        setTimeout(function () {
            switch (i) {
                case 1:
                    padreActual.getChildren().forEach(hijo => {
                        switch (hijo.name) {
                            case 'izquierda':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[1], true));
                                //console.log("FFUE izquierda", izquierda);
                                aplicar();
                                break;
                            case 'derecha':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[2], true));
                                //console.log("FFUE derecha", derecha);
                                aplicar();
                                break;
                            case 'frente':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[0], true));
                                //console.log("FFUE frente", frente);
                                aplicar();
                                break;
                            default:
                                break;
                        }
                    });
                    break;
                case 2:
                    padreActual.getChildren().forEach(hijo => {
                        switch (hijo.name) {
                            case 'izquierda':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[1], true));
                                //console.log("FFUE izquierda", izquierda);
                                break;
                            case 'derecha':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[1], true));
                                //console.log("FFUE derecha", derecha);
                                break;
                            case 'frente':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[1], true));
                                //console.log("FFUE frente", frente);
                                break;
                            default:
                                break;
                        }
                    });
                    break;
                case 3:
                    padreActual.getChildren().forEach(hijo => {
                        switch (hijo.name) {
                            case 'izquierda':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[2], true));
                                //console.log("FFUE izquierda", izquierda);
                                break;
                            case 'derecha':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[2], true));
                                //console.log("FFUE derecha", derecha);
                                break;
                            case 'frente':
                                cargarModelo(hijo, modeloActual(texturaActual, modulos[2], true));
                                //console.log("FFUE frente", frente);
                                break;
                            default:
                                break;
                        }
                    });
                    break;
                default:
                    break;
            }
        }, 2000);
    */
}

function addSlider(isVertical, isClamped, displayThumb, row, col, zoom) {
    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    grid.addControl(panel, row, col);

    /*        var header = new BABYLON.GUI.TextBlock();
              header.text = "Y-rotation: 0 deg";
              header.height = "30px";
              header.color = "white";
              panel.addControl(header);
    */
    var slider = new BABYLON.GUI.Slider();
    sliders.push(slider);
    if (zoom) {
        slider.minimum = 30;
        slider.maximum = 80;
        slider.isThumbClamped = isClamped;
        slider.isVertical = isVertical;
        slider.displayThumb = displayThumb;
        slider.value = 80;
    } else {
        slider.minimum = -2 * Math.PI;
        slider.maximum = 2 * Math.PI;
        slider.isThumbClamped = isClamped;
        slider.isVertical = isVertical;
        slider.displayThumb = displayThumb;
        slider.value = 0;
    }
    if (isVertical) {
        slider.width = "15px";
        slider.height = "200px";
        posicionAuxi = {}

    } else {
        slider.height = "15px";
        slider.width = "200px";
    }


    slider.color = "red";
    slider.onValueChangedObservable.add(function (value) {
        //header.text = "Y-rotation: " + (BABYLON.Tools.ToDegrees(value) | 0) + " deg";
        //console.log("vertical", slider.isVertical +" "+value);
        console.log("value", slider.value);
        if (typeof padreCentro !== "undefined") {
            if (slider.isVertical) {
                padreCentro.position.y = value;
            } else {
                if (zoom) {
                    camera.radius = 90 - value;
                } else {
                    padreCentro.position.x = value;
                }

            }
        }

    });

    //slider.value = Math.PI + Math.random() * Math.PI;
    panel.addControl(slider);
}

function opcPrearmado(i) {
    /*
    [
        [{ cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }],
        [{ cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }],
        [{ cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }, { cor: 1, tipo: "taburete" }]
    ]
    */
    esconderTodosBotones(true);
    precioTotal = 0;
    /*container.meshes=[];
    escena.meshes=[];*/
    //escena.removeMesh(padreCentro, true);
    for (let i = escena.meshes.length - 1; i >= 0; i--) {

        escena.removeMesh(escena.meshes[i]);
    }
    document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
    switch (i) {
        case 0:
            prearmado(0, [
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 1, tipo: "brazo", rotacion: 3 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }],
                [{ cor: 1, tipo: "esquina", rotacion: 3 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }]
            ]);

            break;
        case 1:
            prearmado(0, [
                [{ cor: 0, tipo: "esquina", rotacion: 0 }, { cor: 0, tipo: "brazo", rotacion: 0 }, { cor: 0, tipo: "esquina", rotacion: 0 }],
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }]
            ]);
            break;
        case 2:
            prearmado(0, [
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 1, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 1, tipo: "taburete", rotacion: 0 }],
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }]
            ]);
            break;
        case 3:
            prearmado(0, [
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }],
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }]
            ]);
            break;
        case 4:
            prearmado(0, [
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }],
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 1, tipo: "taburete", rotacion: 0 }]
            ]);
            break;
        case 5:
            prearmado(0, [
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 1, tipo: "brazo", rotacion: 3 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 1 }],
                [{ cor: 1, tipo: "esquina", rotacion: 3 }, { cor: 0, tipo: "taburete", rotacion: 0 }, { cor: 1, tipo: "taburete", rotacion: 0 }]
            ]);
            break;
        case 6:
            prearmado(0, [
                [{ cor: 1, tipo: "esquina", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
                [{ cor: 1, tipo: "brazo", rotacion: 0 }, { cor: 0, tipo: "brazo", rotacion: 0 }, { cor: 0, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "brazo", rotacion: 2 }],
                [{ cor: 0, tipo: "esquina", rotacion: 0 }, { cor: 0, tipo: "brazo", rotacion: 0 }, { cor: 0, tipo: "brazo", rotacion: 0 }, { cor: 1, tipo: "esquina", rotacion: 1 }],
            ]);
            break;
        default:

            break;

    }
}
function activarRotacion() {
    clicked = false;
    bandera = !bandera;
    if (bandera) {
        pointerDragBehavior.moveAttached = false;
    } else {
        pointerDragBehavior.moveAttached = true;
    }
}

function pointerup_handler(ev) {
    if (meshClicleado) {
        console.log("mesh", meshClicleado);
    } else {
        console.log("mesh", meshClicleado);
        //aplicar();
    }
    //console.log(ev.type, ev);
    // Remove this pointer from the cache and reset the target's
    // background and border
    remove_event(ev);
    // If the number of pointers down is less than two then reset diff tracker
    if (evCache.length < 2) prevDiff = -1;
}

function remove_event(ev) {
    // Remove this event from the target's cache
    for (var i = 0; i < evCache.length; i++) {
        if (evCache[i].pointerId == ev.pointerId) {
            evCache.splice(i, 1);
            break;
        }
    }
}
/*funciones */
function cambiarMenuMovil(i) {
    ocultarDivsGrid(i);
    resaltarBotonMenu(i);
    switch (i) {
        case 1:
            gridContainer.style.gridTemplateAreas =
                `'main main main main main main'
        'sclm sclm sclm sclm sclm sclm'
        'erra erra erra erra erra erra'
        'preA preA preA preA preA preA'
        'mate mate mate modu modu modu' 
        'accion accion accion accion accion accion'
        'footer footer footer footer footer footer'
        `;
            break;
        case 2:
            gridContainer.style.gridTemplateAreas =
                `'main main main main main main'
    'sclm sclm sclm sclm sclm sclm'
    'mate mate mate mate mate mate' 
    'preA preA preA preA preA preA'
    'erra erra erra erra erra erra'
    'accion accion accion accion accion accion'
    'footer footer footer footer footer footer'`;
            break;
        case 3:
            gridContainer.style.gridTemplateAreas =
                `'main main main main main main'
            'sclm sclm sclm sclm sclm sclm'
            'preA preA preA preA preA preA'
            'modu modu modu modu modu modu' 
            'erra erra erra erra erra erra'
            'accion accion accion accion accion accion'
            'footer footer footer footer footer footer'`;

            break;
        case 4:
            gridContainer.style.gridTemplateAreas =
                `'main main main main main main'
        'sclm sclm sclm sclm sclm sclm'
        'modu modu modu modu modu modu' 
        'preA preA preA preA preA preA'
        'erra erra erra erra erra erra'
        'accion accion accion accion accion accion'
        'footer footer footer footer footer footer'
        `;
            break;
        default:
            break;
    }
}
function ocultarDivsGrid(i) {
    var modu = document.getElementById("iconosTexturas");;
    var preA = document.getElementById("iconosPrearmado");
    var erra = document.getElementById("botones-herramientas");
    var mate = document.getElementById("materiales");

    switch (i) {
        case 1:
            modu.style.display = "none";
            preA.style.display = "none";
            erra.style.display = "block";
            mate.style.display = "none";
            break;
        case 2:
            modu.style.display = "none";
            preA.style.display = "none";
            erra.style.display = "none";
            mate.style.display = "block";
            break;
        case 3:
            modu.style.display = "none";
            preA.style.display = "block";
            erra.style.display = "none";
            mate.style.display = "none";
            break;
        case 4:
            modu.style.display = "block";
            preA.style.display = "none";
            erra.style.display = "none";
            mate.style.display = "none";
            break;

        default:
            break;
    }
}

function resaltarBotonMenu(o) {
    var btnfoto = document.getElementById("slct-btn-foto");
    var btnColor = document.getElementById("slct-btn-color");
    var btnPreArmado = document.getElementById("slct-btn-preArmado");
    var btnModelo = document.getElementById("slct-btn-modelo");

    switch (o) {
        case 1:
            btnfoto.style.border = "thin solid Tomato ";
            btnfoto.style.color = "Tomato ";
            btnColor.style.border = "thin solid grey";
            btnColor.style.color = "grey";
            btnPreArmado.style.border = "thin solid grey";
            btnPreArmado.style.color = "grey";
            btnModelo.style.border = "thin solid grey";
            btnModelo.style.color = "grey";
            break;
        case 2:
            btnfoto.style.border = "thin solid grey";
            btnfoto.style.color = "grey";
            btnColor.style.border = "thin solid Tomato ";
            btnColor.style.color = "Tomato ";
            btnPreArmado.style.border = "thin solid grey";
            btnPreArmado.style.color = "grey";
            btnModelo.style.border = "thin solid grey";
            btnModelo.style.color = "grey";
            break;
        case 3:
            btnfoto.style.border = "thin solid grey";
            btnfoto.style.color = "grey";
            btnColor.style.border = "thin solid grey";
            btnColor.style.color = "grey";
            btnPreArmado.style.border = "thin solid Tomato ";
            btnPreArmado.style.color = "Tomato ";
            btnModelo.style.border = "thin solid grey";
            btnModelo.style.color = "grey";
            break;
        case 4:
            btnfoto.style.border = "thin solid grey";
            btnfoto.style.color = "grey";
            btnColor.style.border = "thin solid grey";
            btnColor.style.color = "grey";
            btnPreArmado.style.border = "thin solid grey";
            btnPreArmado.style.color = "grey";
            btnModelo.style.border = "thin solid Tomato";
            btnModelo.style.color = "Tomato";
            break;
        default:
            break;
    }
}
function zoomear(zoom) {

    if (zoom == "in") {
        //camera.position.z = camera.position.z + 1;
        if (camera.radius < 17) {

        } else {
            camera.radius--;
        }

    }
    if (zoom == "out") {
        //camera.position.z = camera.position.z - 1;
        if (camera.radius > 50) {

        } else {
            camera.radius++;
        }
    }
}
function cambiarGrid(opc) {
    switch (opc) {
        case 0:
            document.getElementById('grid-container').style.gridTemplateAreas =
                `
            "preA preA preA main main main"
            "preA preA preA main main main"
            "mate mate mate main main main"
            "mate mate mate main main main"
            "accio accion accion erra erra erra"
            `;
            break;
        case 1:
            document.getElementById('grid-container').style.gridTemplateAreas =
                `
            "preA preA preA main main main"
            "preA preA preA main main main"
            "mate mate mate main main main"
            "mate mate mate main main main"
            "accio accion accion erra erra erra"
            `;
            break;
        case 2:

            break;

        default:
            break;
    }
}

function cambiarVistaMotor(opc) {
    switch (opc) {
        case 0:
            document.getElementById("descripcionMaterial").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "visible";
            document.getElementById("grid-texturas").style.visibility = "visible";
            document.getElementById("iconosTexturas").style.visibility = "visible";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            for (let i = escena.meshes.length - 1; i >= 0; i--) {

                escena.removeMesh(escena.meshes[i]);
            }
            cargarModelo(padreCentro, modeloActual(texturaActual, moduloActual, true));

            break;
        case 1:
            document.getElementById("descripcionMaterial").style.visibility = "visible";
            document.getElementById("iconosPrearmado").style.visibility = "hidden";
            document.getElementById("grid-texturas").style.visibility = "visible";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            cargarModeloCustom(modelos.puffino[10]);
            break;
        case 2:
            document.getElementById("descripcionMaterial").style.visibility = "hidden";
            document.getElementById("iconosPrearmado").style.visibility = "hidden";
            document.getElementById("grid-texturas").style.visibility = "hidden";
            document.getElementById("iconosTexturas").style.visibility = "hidden";
            document.getElementById("btn-agregar-3d-a-carrito").style.visibility = "visible";
            cargarModeloCustom(modelos.kids[0]);
            break;

        default:
            break;
    }
}
function acomodarCamara() {
    camera.zoomOn();
    camera.maxZ = 1000;
    camera.target = padreCentro.position;
}
/*funciones del carrito */
function agregarModelo3DaCArrito() {
    alert("agregado al carrito");

}
function pantallaCompleta() {
    bandera = !bandera;
    if (!engine.isFullscreen) {
        engine.switchFullscreen(true); //true = requestPointerLock.
    }
    else if (!engine.isPointerLock && canvas.requestPointerLock) {
        //Back-up pointerlock request in-case fullscreen pointerlock request fails. (*cough* Edge)
        canvas.requestPointerLock();
    }
}