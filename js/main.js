var canvas = document.getElementById("renderCanvas");
var videoMaterial;
// You have to create a function called createScene. This function must return a BABYLON.Scene object
// You can reference the following variables: scene, canvas
// You must at least define a camera
// More info here: https://doc.babylonjs.com/generals/The_Playground_Tutorial
var myVideo;
var background;
var light;
var engine;
var camera;
var mobil = false;
var idCamara="0";
let zoom;
var createScene = function () {
    // Our Webcam stream (a DOM <video>)
    var isAssigned = false; // Is the Webcam stream assigned to material?
    engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });    
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true,false,true);
    //camera.pinchDeltaPercentage=100;
    //camera.pinchDeltaPercentage;

console.log("deltaPercentage",camera.pinchDeltaPercentage);
console.log("pinchPrecision",camera.pinchPrecision);
console.log("pinchToPanMaxDistance",camera.pinchToPanMaxDistance);
console.log("zoom",camera.zoomOnFactor);
zoom=camera.zoomOnFactor;
    /*var plane1 = BABYLON.Mesh.CreatePlane("plane1", 2, scene);
    plane1.rotation.z = Math.PI;
    plane1.position.y = 1;*/
    navigator.mediaDevices.enumerateDevices().then((dispositivos) => {
        
        console.log("idCamara",idCamara);
        /*dispositivos.forEach(dispositivo => {
            console.log(" " + dispositivo.label);
            
            if (dispositivo.label == "camera 0, facing back") {
                mobil = true;
                idCamara=dispositivo.deviceId;
                
            }
          
        });*/
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            // Take the user to a different screen here.
            idCamara=dispositivos[2].deviceId;
            //alert("camara MObil");
        }else
            {
                idCamara=dispositivos[0].deviceId;
            }
        camara(idCamara);
    });
    videoMaterial = new BABYLON.StandardMaterial("texture1", scene);
    videoMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
    videoMaterial.backFaceCulling=false;
    console("material",videoMaterial.sideOrientation);
    // Create our video texture
    
    // When there is a video stream (!=undefined),
    // check if it's ready          (readyState == 4),
    // before applying videoMaterial to avoid the Chrome console warning.
    // [.Offscreen-For-WebGL-0xa957edd000]RENDER WARNING: there is no texture bound to the unit 0
    scene.onBeforeRenderObservable.add(function () {
        if (myVideo !== undefined && isAssigned == false) {
            if (myVideo.video.readyState == 4) {
                //plane1.material = videoMaterial;
                //donut.material=videoMaterial;
                isAssigned = true;
                background.texture = myVideo;

            }
        }
    });
   // var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
    //var light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-5, 5, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);
     light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-5, 5, 0), scene);
    // Add and manipulate meshes in the scene
    BABYLON.SceneLoader.Append("./", "esquinaCasual.gltf", scene, function (scene) {
        // Create a default arc rotate camera and light.
       // scene.createDefaultCameraOrLight(true, true, true);

        // The default camera looks at the back of the asset.
        // Rotate the camera by 180 degrees to the front of the asset.
       // scene.activeCamera.alpha += Math.PI;
       camara.target=scene.meshes[5];
       //scene.meshes[1]
    });
    return scene;
};
//var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

var scene = createScene();
background = new BABYLON.Layer("back", "https://c2.staticflickr.com/4/3395/4626555052_411fd997b3_o.jpg", scene);
background.isBackground = true;
background.texture.level = 0;


engine.runRenderLoop(function () {
    if (scene) {
        scene.render();

    }
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

function captura(){
    BABYLON.Tools.CreateScreenshot(engine, camera, 1600);
}
function camara(id){
    BABYLON.VideoTexture.CreateFromWebCam(scene, function (videoTexture) {
        //para voltear la textura del video 
        //videoTexture.uScale = 1;
        //videoTexture.vScale = -1;
        myVideo = videoTexture;
        videoMaterial.diffuseTexture = myVideo;
    }, { deviceId:id });
}
//0
//1//camera 1, facing front
//2//camera 0, facing back
//aXlWUJgoECy+26tHwc9nrSIoYGaRZ01i41O4MAkMo/w=
//eVdXDg4cnlyDd7Xqc+hclgMYzOyYnwjwETWzzQCfNCw=
//4F1BGYWAC1Vw+0qjTbVq/u7Q+QiCKIhkSebkGT0pa7M=