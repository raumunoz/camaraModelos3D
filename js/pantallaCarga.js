
//var canvas = document.getElementById("renderCanvas");
//var scene;
var loadingContainer;
var loadingSquare;

var fullscreenGUI;
//var camera;
//var scene;
/*
var createScene = function () {
    
    // This creates a basic Babylon Scene object (non-mesh)
    scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    /* Use this in your actual scene to remove the loading screen instead of a timer
    -------------------------------------------------------------------------------------------
    scene.executeWhenReady(function () { //When everything is done loading
        hideLoadingScreen();
    }); 
    ----------------------------------------------------------------------------------------------
    */
   /*
   pantallaCarga();
    setTimeout(function () {

        hideLoadingScreen();
    }, 3000);

    return scene;

};

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
var scene = createScene();

engine.runRenderLoop(function () {
    if (scene) {
        scene.render();
    }
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
*/

function loadingAnimation() {
    var deltaTime = escena.getEngine().getDeltaTime();
    //loadingSquare.rotation += 0.001 * deltaTime;
    //console.log("time", deltaTime);
    if(deltaTime>30 && deltaTime < 60){
        loadingText.text = "cargando.";
    }
    if(deltaTime>60 && deltaTime < 90){
        loadingText.text = "cargando..";
    }
    if(deltaTime>90 && deltaTime < 120){
        loadingText.text = "cargando...";
    }
    //loadingText.text = "cargando";

}

function fadeLoadingScreen() {
    var deltaTime = escena.getEngine().getDeltaTime();
    loadingContainer.alpha -= 0.001 * deltaTime;

    if (loadingContainer.alpha <= 0.0) {
        unregisterLoadingScreen();
    }
}

function showLoadingScreen() {
    escena.registerBeforeRender(loadingAnimation);
    loadingContainer.alpha = 1.0;
}

function unregisterLoadingScreen() {
    escena.unregisterBeforeRender(loadingAnimation);
    escena.unregisterBeforeRender(fadeLoadingScreen);
    loadingContainer.alpha = 0.0; //Make sure the loading screen isn't visible
}

function hideLoadingScreen() {
    escena.registerBeforeRender(fadeLoadingScreen);
}

function pantallaCarga(){
    //Loading screen definition starts here
    //-------------------------------------------------------------------------------
    loadingContainer = new BABYLON.GUI.Container();
    loadingContainer.zIndex = 1000;

    loadingBG = new BABYLON.GUI.Rectangle();
    loadingBG.width = 1.0;
    loadingBG.height = 1.0;
    loadingBG.color = "black";
    loadingBG.background = "black";

    loadingText = new BABYLON.GUI.TextBlock();
    loadingText.text = "cargando...";
    loadingText.left = 0.5;
    loadingText.top = 0.7;
    loadingText.color = "white";
/*
    loadingSquare = new BABYLON.GUI.Rectangle();
    loadingSquare.width = 0.3;
    loadingSquare.height = 0.2;
    loadingSquare.color = "red";
    loadingSquare.background = "red";
    loadingSquare.top = "-20%";
*/
    loadingContainer.addControl(loadingBG);
    loadingContainer.addControl(loadingText);
   //loadingContainer.addControl(loadingSquare);
    var fullscreenGUI = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("FullscreenUI", true);
        fullscreenGUI.addControl(loadingContainer); //Add loading screen to the camera
hideLoadingScreen();
    //--------------------------------------------------------------------------------------------
   // showLoadingScreen(); //Show the loading screen
}