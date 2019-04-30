<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Envio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/nuevoEstilo.css">
</head>

<body>
</body>

</html>
<!DOCTYPE HTML>
<html>

<head>
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
    <link rel="stylesheet" type="text/css" href="css/estiloMotor3D.css">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/main.css">



<body>
    <div class="row div-nav" style="background-color:#fA675b;">
        <div class="col-md-10 col-7" style="text-align: right; margin-top: 0.3em;margin-bottom: 0.3em;">
            <span style="font-size:13px; color:#FFF; font-family: 'Montserrat', Arial, sans-serif;">Servicio al cliente
                Teléfono:
                477 854 11 12&nbsp;&nbsp;</span>
        </div>
        <div class="col-md-2 col-5 " style="text-align: right;">
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
                    <button type="button" class="btn btn-success btn-agregar-ir-al-carrito" id="btn-agregar-ir-al-carrito" onclick="location.href = 'cart.html';">IR AL CARRITO</button>
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
                              style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">INICIO.</a></li>
                          <li style="margin-right: 1.1em;"><a href="about.html"
                              style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">NOSOTROS.</a></li>
                          <li style="margin-right: 1.1em;"><a href="catalogo.html"
                              style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">CATÁLOGO.</a></li>
                          <li style="margin-right: 1.1em;"><a href="envio.html"
                              style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">ENVÍO Y DOVOLUCIONES.</a></li>
                          <li style="margin-right: 1.1em;"><a href="contact.html"
                              style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">CONTACTO.</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
        </nav>
        <div id="contenido-cambiar" style="padding-top: 4em;">

            <div class="container">
                <!--
                    onsubmit="return toSubmit(event);"
                -->
              
                <form class="needs-validation" id="forma" >
                    <h3>Información de contacto</h3>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="correo-shipping">Email</label>
                            <input type="email" name="email" class="form-control" id="correo-shipping" placeholder="Email" >
                        </div>
                    </div>
                    <div class="form-row">

                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control" name="nombre" placeholder="Nombre" id="nombre-shipping" >
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control" name="apellidos" placeholder="Apellidos" id="apellidos-shipping" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="direccion-shipping">Dirección</label>
                        <input type="text" name="direccion"class="form-control" id="direccion-shipping" placeholder="Direción"  >
                        <input type="text" name="detalles-direccion"class="form-control" id="detalles-direccion-shipping" placeholder="Número interior, departamento, etc.(opcional)"  >
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" name="ciudad" id="ciudad-shipping" placeholder="Ciudad" > 
                    </div>
                    <div class="form-row">

                        <div class="form-group col-md-4">
                            <label for="pais-shipping">País</label>
                            <select id="pais-shipping" class="form-control" onchange="cambioDePais()" >
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4" >
                            <label for="estado-shipping">Estado</label>
                            <select id="estado-shipping" class="form-control" >
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="codigo-postal-shipping">Código postal</label>
                            <input type="text" class="form-control" id="codigo-postal-shipping" >
                        </div>
                    </div>
                    <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="telefono-shipping">Teléfono</label>
                                <input type="tel" class="form-control" id="telefono-shipping" placeholder="Teléfono">
                            </div>
                        </div>
        
                        <input class="btn btn-primary" type="submit" value="Submit">
                </form>       
<!--
            <form class="needs-validation" novalidate>
                    <div class="form-row">
                      <div class="col-md-4 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
                        <div class="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
                        <div class="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="validationCustomUsername">Username</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                          </div>
                          <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
                          <div class="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-md-6 mb-3">
                        <label for="validationCustom03">City</label>
                        <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="validationCustom04">State</label>
                        <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="validationCustom05">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                        <div class="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                        <label class="form-check-label" for="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                  </form>
                  -->
                  <!--
                  <script>
                  // Example starter JavaScript for disabling form submissions if there are invalid fields
                  (function() {
                    'use strict';
                    window.addEventListener('load', function() {
                      // Fetch all the forms we want to apply custom Bootstrap validation styles to
                      var forms = document.getElementsByClassName('needs-validation');
                      // Loop over them and prevent submission
                      var validation = Array.prototype.filter.call(forms, function(form) {
                        form.addEventListener('submit', function(event) {
                          if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                          }else{
                            event.preventDefault();
                            event.stopPropagation();
                            alert("validado");
                          }
                          //form.classList.add('was-validated');
                        }, false);
                      });
                    }, false);
                  })();
                  </script>
                  -->
                
            </div>
        </div>
    </div>
    </div>

    <br>
    <div class="row copyright" style="font-family: 'Roboto';">
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

    <footer id="fh5co-footer" style="font-family: 'Roboto'; padding-top: 3em; padding-bottom: 0em;" role="contentinfo">
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
    <script src="js/envios.js"></script>
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <script>
            // Example starter JavaScript for disabling form submissions if there are invalid fields
    </script>
</body>

</html>