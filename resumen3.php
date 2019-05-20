<?php

$email = $_POST["email"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$direccion = $_POST["direccion"];
$numInt ="";
$colonia = $_POST["colonia"];
$referencias = "";
$ciudad = $_POST["ciudad"];
$nombre = $_POST["nombre"];
$estado = $_POST["estado"];
$pais = $_POST["pais"];
$telefono = $_POST["telefono"];
$codigoPostal = $_POST["codigo-postal"];


if( isset( $_POST["referencias"] ))
{
    $referencias = $_POST["referencias"];
}
if( isset( $_POST["numInt"] ))
{
    $numInt = "interior ".$_POST["numInt"];
}



//echo "pais".$pais;
//echo "estado".$estado;
//$items=$_POST["carr"];
$items = $_POST["carr"];
$tot = $_POST["tot"];

include 'pagoPP.php';
//echo "el total es ".$tot;
//echo "CADENA";
//echo "<pre>";
//print_r($items);
//echo "</pre>";

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Envio</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" type="text/css" href="css/nuevoEstilo.css">
<link rel="stylesheet" type="text/css" href="css/estiloShipping.css">

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- Facebook and Twitter integration -->
<meta property="og:title" content="" />
<meta property="og:image" content="" />
<meta property="og:url" content="" />
<meta property="og:site_name" content="" />
<meta property="og:description" content="" />
<meta name="twitter:title" content="" />
<meta name="twitter:image" content="" />
<meta name="twitter:url" content="" />
<meta name="twitter:card" content="" />
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Playfair+Display:400,400i"
    rel="stylesheet">
<!-- Animate.css -->
<link rel="stylesheet" href="css/animate.css">
<!-- Icomoon Icon Fonts-->
<link rel="stylesheet" href="css/icomoon.css">
<!-- Bootstrap  -->

<link rel="stylesheet" href="css/bootstrap.css">

<!-- Theme style  -->
<link rel="stylesheet" href="css/style.css">

<!-- Modernizr JS -->
<!-- FOR IE9 below -->
<!--[if lt IE 9]>
            <script src="js/respond.min.js"></script>
            <![endif]-->
<script src="https://www.paypalobjects.com/webstatic/ppplusdcc/ppplusdcc.min.js" type="text/javascript">
</script>
<link rel="stylesheet" type="text/css" href="css/estiloMotor3D.css">
<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/main.css">

</head>
<body>

</span>
    <div class="row div-nav" style="background-color:#fA675b;">
        <div class="col-md-10 col-8" style="text-align: right; margin-top: 0.3em;margin-bottom: 0.3em;">
            <span style="font-size:13px; color:#FFF; font-family: "Montserrat", Arial, sans-serif;">Servicio al cliente
                Teléfono:
                477 854 11 12&nbsp;&nbsp;</span>
        </div>
        <div class="col-md-2 col-4 " style="text-align: right;">
            <a href="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F1962138827348733&amp;tabs=messages&amp;width=302&amp;height=300&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId"
                target="_blank"><img src="images/messeng.png" style="max-width: 1.8em; padding-right:5px"></a>

            <a href="https://api.whatsapp.com/send?phone=5214778541112" target="_blank">
                <img src="images/whats.png" style="max-width: 1.8em; padding-right:5px">
            </a>

            <img src="images/shopping_cart_white_24dp.png" style="max-width: 1.8em; padding-right:5px"
                onclick="mostrarCarro()"><span id="num-carrito" class="num-carrito"></span>
        </div>
    </div>

    <div id="page">
    <div class="carrito" id="carrito">
                <div id="row-productos">
                    Todavía no agregas nada.
                </div>

                <div class="row rng-total total-desactivo" id="rng-total">
                    <div class="col-xs-6 rng-total-titulo">Total</div>
                    <div class="col-xs-6">$<span id="total-carrito">0</span></div>
                    <!--<div class="col-6"><button class="rng-btn-total btn btn-primary blue" onclick="">continuar</button></div>-->
                    <!--
                    <div id="paypal-button-container"></div>
                    <div id="paypal-button"></div>
                    -->
                    <button type="button" class="btn btn-success btn-agregar-ir-al-carrito" id="btn-agregar-ir-al-carrito" onclick="location.href = "cart.html";">IR AL CARRITO</button>
                </div>
        </div>
        <nav class="fh5co-nav" role="navigation" style="background-color:#4DD7D3;">
                <div class="container" style="margin-left:0px;">
                    <div class="row">
                        <div class="col-md-3 col-xs-2">
                            <div id="fh5co-logo"><a href="index.html"><img src="images/puff_logo.png"
                                        class="logo-puffino"></a></div>
                        </div>
                        <div class="col-md-9 col-xs-10 menu-1" style="margin-top:4%;">
                            <ul>
                                <li style="margin-right: 1.1em;"><a href="index.html"
                                        style="font-family: "Roboto", sans-serif; font-size: 1.15rem;">INICIO</a></li>
                                <li style="margin-right: 1.1em;"><a href="about.html"
                                        style="font-family: "Roboto", sans-serif; font-size: 1.15rem;">NOSOTROS</a></li>
                                <li style="margin-right: 1.1em;"><a href="catalogo.html"
                                        style="font-family: "Roboto", sans-serif; font-size: 1.15rem;">CATÁLOGO</a></li>
                                <li style="margin-right: 1.1em;"><a href="envio.html"
                                        style="font-family: "Roboto", sans-serif; font-size: 1.15rem;">ENVÍO Y DOVOLUCIONES</a></li>
                                <li style="margin-right: 1.1em;"><a href="contact.html"
                                        style="font-family: "Roboto", sans-serif; font-size: 1.15rem;">CONTACTO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </nav>
        <div id="contenido-cambiar" style="padding-top: 4em;">
        <div class="" style="font-family: "Roboto";padding: 0;margin: 0;width: 100%; max-width: auto;">
        <div class="card card-body shadow-none info-shipping">Dirección del envio <br>
            <span id="resumen-direccion">

            </span>
            <hr>
            Contacto <br>
            <span id="resumen-correo">Nombre:</span>
            <span id="resumen-correo">Correo: </span>
            <span id="resumen-correo">Teléfono: </span>
        </div>

    </div>
    <div class="container">
        <div class="row">
            <div class="col-*-*"></div>
            <div class="col-*-*"></div>
        </div>
<p>Seleccione una forma de pago:</p>
<div class="container">
<h2>Pago</h2>
<hr>
  <input type="radio" id="huey" name="drone" value="huey" class=""
         checked  onchange="handleChange1();">
  <label for="paypal" class="label-selecion">paypal</label>
  <a href="<?php echo $aprovalUrl ?>" class="boton-Paypal" id="btn-paypal">
  <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal" />
  </a>
  <br>
  <input type="radio" id="dewey" name="drone" value="dewey" onchange="handleChange2();">
  <label for="tarjeta" class="label-selecion">tarjeta de credito</label>
  <img src="./assets/iconos/BannerbancossinlogoPP200px-MX.png" alt="Check out with PayPal" />
  </a>

<div id="pago-tarjeta"  class="ocultar">
<div id="ppplus">
</div>
<button type="submit" id="continueButton" onclick="ppp.doContinue(); return false;"> Continuar </button>
</div>

</div>



        </div>
        <div class="total">
        </div>
    </div>
        </div>
    </div>
    </div>

    <br>
    <div class="row copyright" style="font-family: "Roboto";">
        <div class="col-md-3 col-sm-2 col-xs-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-8 text-center">
            <p style="font-size: 0.9rem;line-height: 1.2em; text-align:center; color:black">
                *Las fotografías mostradas en este sitio web son reales y propiedad de Puffino. Copyright 2017
                León,
                Guanajuato. Derechos reservados ©, prohibida su reproducción o uso total o parcial por
                cualquier medio.
            </p>
        </div>
        <div class="col-md-3 col-sm-2 col-xs-2"></div>
    </div>

    <footer id="fh5co-footer" style="font-family: "Roboto"; padding-top: 3em; padding-bottom: 0em;" role="contentinfo">
        <center>
            <div class="container">


                <div class="row">
                    <div class="col-sm-5 col-md-6"><img src="images/puff_logo.png" style="" width="150" height="75">
                        <p>
                            <ul class="fh5co-social-icons">
                                <li><a href="https://www.facebook.com/puffino.mx/"><i style="background: #353a34;"
                                            class="icon-facebook"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UC_IQX58WKgUAJiZfj9oy6wg/featured"><i
                                            style="background: #353a34;" class="icon-youtube"></i></a></li>
                                <li><a href="https://www.instagram.com/puffinomx/"><i style="background: #353a34;"
                                            class="icon-instagram"></i></a></li>
                                <li><a href="https://www.twitter.com/puffinomx/"><i style="background: #353a34;"
                                            class="icon-twitter"></i></a></li>
                                <li><a href="https://www.pinterest.com/puffinomx/"><i style="background: #353a34;"
                                            class="icon-pinterest"></i></a></li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <ul class="fh5co-footer-links contacto-links text-center">
                            <h3 style="color:#FFF;">CONTÁCTANOS</h3>
                            <li>477 854 11 12 </li>
                            <li>ventas@oldravenfurniture.com </li>
                            <li>León, Gto. </li>

                        </ul>
                    </div>
                </div>



            </div>
        </center>

    </footer>
    </div>

    <div class="gototop js-top">
        <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
    </div>
    <script src="https://cdn.rawgit.com/PascaleBeier/bootstrap-validate/v2.2.0/dist/bootstrap-validate.js" ></script>
    <!-- jQuery -->
    <script src="js/jquery.min.js"></script>
    <!-- jQuery Easing -->
    <script src="js/jquery.easing.1.3.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Waypoints -->
    <script src="js/jquery.waypoints.min.js"></script>
    <!-- Carousel -->
    <script src="js/owl.carousel.min.js"></script>

    <!-- Flexslider -->
	<script src="js/jquery.flexslider-min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>
    <script
        src="https://www.paypal.com/sdk/js?client-id=Ab3CfXg7wt8RiCw6JkaSJ6TNF0SNKfMj9hJ5LiW2LjRGcGtoLKpFn3lGxDRizT5FHXsONUzWVgetL1jN&currency=MXN"></script>

    <script src="js/carrito.js"></script>


    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <script type="text/javascript">

        let carrito=<?php echo $items ?>;
        let datosDeEnvio={};
        let approval_url= "<?php echo $aprovalUrl ?>";
        datosDeEnvio.correo = "<?php echo $email ?>";
        datosDeEnvio.nombre = "<?php echo $nombre ?>";
        datosDeEnvio.apellidos ="<?php echo $apellidos ?>";
        datosDeEnvio.direccion ="<?php echo $direccion ?>";
        datosDeEnvio.ciudad ="<?php echo $ciudad ?>";
        datosDeEnvio.pais = "<?php echo $pais ?>";
//https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-8X318124UM774424D

var ppp = PAYPAL.apps.PPP({
    "approvalUrl": approval_url,
    "placeholder": "ppplus",
    "mode": "sandbox",
    "country": "MX",
    "payerEmail":"correo@mail.com",
    "payerFirstName":"my",
    "payerLastName":"name",
    "payerTaxId":"",
    "language":"es_MX",
    });
function Nueva(){
    alert("nueva");
}
function ingresar(){
			var parametros={  
								"correo": "<?php echo $email ?>",
                                "nombre": "<?php echo $nombre ?>",
                                "apellidos":"<?php echo $apellidos ?>",
                                "direccion": "<?php echo $direccion ?>",
                                "numInt": "",
                                "colonia":"",
                                "referencias": "",
                                "ciudad": "<?php echo $ciudad  ?>",
                                "pais": "<?php echo $pais ?>",
                                "estado": "<?php echo $estado ?>",
								"codigoPostal": "<?php echo $codigoPostal ?>",
								"telefono":"<?php echo $telefono ?>",
								"paymentId":"<?php echo $paymentID ?>",
								"PayerID":""
                };
                $.ajax({
                        data: parametros,
                        url:   './service/set/setCliente.php',
                        type:  'post',
                        beforeSend: function () {
                        },
                        success:  function (response2) {  //  Una vez insertados los datos actualiza la tabla
							console.log(response2);			
							/*
                                        $.ajax({
                                                url:   'php/productos/productos.php',
                                                type:  'post',
                                                beforeSend: function () {
                                                        
                                                },
                                                success:  function (response1) {
                                                        $("#contenido").html(response1);
                                                        $('#myModal').modal('toggle');
                                                }
                                        });*/
                                        //$('#myModal').modal('hide');
                        }
                });

		}
</script>
<script type="application/javascript">

// Register postMessage Listener for the iframe.
if (window.addEventListener) {
window.addEventListener("message", messageListener, false);
log("addEventListener successful", "debug");
} else if (window.attachEvent) {
window.attachEvent("onmessage", messageListener);
log("attachEvent successful", "debug");
} else {
log("Could not attach message listener", "debug");
throw new Error("Can't attach message listener");
}

function messageListener(event) {
    try {
        //this is how we extract the message from the incoming events, data format should look like {"action":"inlineCheckout","checkoutSession":"error","result":"missing data in the credit card form"}
        var data = JSON.parse(event.data);
        //insert logic here to handle success events or errors, if any
        console.log("data",data);
    }
    } catch (exc) {
        console.log("error",exc);
    }
}
</script>
