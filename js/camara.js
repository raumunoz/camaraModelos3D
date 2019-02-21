var ellipse1;
var numero = 9;
var myVideo;
var background;
var mobil = false;
var videoMaterial;
let camaraLocal;
let scenaCamara;
let promesa;
let materialVideo;
let camaraActivada;
let texturaVideo;
function cargarCamara(escena, camera) {
    camaraLocal = camera;
    scenaCamara = escena;
    /*var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    ellipse1 = new BABYLON.GUI.Ellipse();
    ellipse1.width = "75px"
    ellipse1.height = "75px";
    ellipse1.color = "black";
    ellipse1.thickness = 4;
    ellipse1.background = "white";
    ellipse1.verticalAlignment = 1;
    ellipse1.onPointerUpObservable.add(function () {
        captura();
    });
    advancedTexture.addControl(ellipse1);
*/
    btnCamara.style.visibility = "hidden";
    navigator.mediaDevices.enumerateDevices().then(function (dispositivos) {
        dispositivos.forEach(device => {
            console.log(device.kind + ": " + device.label +" id = " + device.deviceId);
            if (device.kind == "videoinput") {
                //alert(device.label);
            }
        });
        /*dispositivos.forEach(dispositivo => {
            console.log(" " + dispositivo.label);
            
            if (dispositivo.label == "camera 0, facing back") {
                mobil = true;
                idCamara=dispositivo.deviceId;
                
            }
          
        });*/
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            // Take the user to a different screen here.
            idCamara = dispositivos[2].deviceId;
            // alert("camara MObil");
        } else {
            idCamara = dispositivos[0].deviceId;
        }
        encenderCamara(idCamara);
    });
    videoMaterial = new BABYLON.StandardMaterial("texture1", scenaCamara);
    videoMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
    videoMaterial.backFaceCulling = false;
    console.log("material", videoMaterial.sideOrientation);
    scenaCamara.onAfterCameraRenderObservable.add(function () {
        if ((myVideo !== undefined && isAssigned == false) || (camaraActivada == !undefined)) {
            if (myVideo.video.readyState == 4) {
                //plane1.material = videoMaterial;
                //donut.material=videoMaterial;
                isAssigned = true;
                background.texture = myVideo;
                background.texture.uAng = Math.PI;
            }
        }

    });
    /*  background = new BABYLON.Layer("back", "https://c2.staticflickr.com/4/3395/4626555052_411fd997b3_o.jpg", scenaCamara);
        background.isBackground = true;
        background.texture.level = 0;*/

}
function captura() {
    /*ellipse1.isVisible = false;
    setTimeout(function () {
        escena.render();
        //BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, camara, 400);
        BABYLON.Tools.CreateScreenshot(engine, camara, {precision: 1});
    }, 500).then(
        setTimeout(() => {
            //alert("acabó Time out");
            ellipse1.isVisible = true;
        }, 4000)
    );*/
    //isAssigned=false;
    sliders.forEach(x=>{x.alpha=0 });

    escena.render();
    BABYLON.Tools.CreateScreenshot(engine, camera, { precision: 1 });
};
function encenderCamara(idCamara) {

    materialVideo = BABYLON.VideoTexture.CreateFromWebCam(scenaCamara, function (videoTexture) {
        //para voltear la textura del video 
        //videoTexture.uScale = 1;
        //videoTexture.vScale = -1;
        myVideo = videoTexture;
        // videoMaterial.diffuseTexture = myVideo;
        btnCamara.style.visibility = "visible";
        btnCamara.src = "assets/iconos/camaraB.png";
        camaraActivada = true;
    }, { deviceId: idCamara });
}
function activarCamara() {
    if (camaraActivada === false || camaraActivada == undefined) {
        cargarCamara(escena, camera);
    }
    if (camaraActivada === true) {
        captura();
        btnCamara.style.visibility = "hidden";
        background = new BABYLON.Layer("back", "assets/imagenes/fondos/fondo.jpg", escena);
        camaraActivada = false;
        setTimeout(function(){ 
            btnCamara.src = "assets/iconos/camaraA.png";
            btnCamara.style.visibility = "visible";
        }, 3000);
        

    }
}