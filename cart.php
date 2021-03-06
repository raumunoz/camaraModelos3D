<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>carrito</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
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

    <!-- Icomoon Icon Fonts-->
    <link rel="stylesheet" href="css/icomoon.css">
    <!-- Bootstrap  -->

    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Theme style  -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/estilocart.css">
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->
	<link rel="stylesheet" type="text/css" href="css/estiloMotor3D.css">
	<link rel="stylesheet" href="css/font.css">
	<link rel="stylesheet" href="css/main.css">

</head>

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
        <div class="social-bar" id="social-bar">
            <a href="https://www.facebook.com/puffino.mx/" class="icon2 icon-facebook" target="_blank"></a>
            <a href="https://www.youtube.com/channel/UC_IQX58WKgUAJiZfj9oy6wg/featured" class="icon2 icon-youtube"
                target="_blank"></a>
            <a href="https://www.instagram.com/puffinomx/" class="icon2 icon-instagram" target="_blank"></a>
            <a href="https://www.twitter.com/puffinomx/" class="icon2 icon-twitter" target="_blank"></a>



        </div>
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
        <div class="fh5co-loader"></div>    
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
                                        style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">ENVÍO Y DEVOLUCIONES.</a></li>
                                <li style="margin-right: 1.1em;"><a href="contact.html"
                                        style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">CONTACTO.</a></li>
                            </ul>
                        </div>
                    </div>
    
                </div>
            
        </nav>

        <header id="fh5co-header" class="fh5co-cover fh5co-cover-sm" style="height: 10%;">
            <h1 class="tituloPagina" style="font-size: 2rem; color:#4E56DF; font-family: 'Roboto';">
                <strong>Carrito</strong></h1>
        </header>

        <div id="contenido-cambiar" style="padding-top: 4em;">
            <div class="" style="font-family: 'Roboto';padding: 0;margin: 0;width: 100%; max-width: auto;">

                <table class="table tablaCarrito">

                    <thead>
                        <tr class="table-header">
                            <th class="first wrap-texto">Producto</th>
                            <th class="wrap-texto">Material</th>
                            <th class="wrap-texto">Precio</th>
                            <th class="wrap-texto">Cantidad</th>
                            <th class="wrap-texto last">Total</th>
                        </tr>
                    </thead>

                    <tbody id="tabla-carrito" class="tbody-carrito">



                    </tbody>

                </table>

                <br>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-*-*"></div>
                    <div class="col-*-*"></div>
                </div>
                <div class="carrito-footer ">
                    <div class="row">
                        <div class="promo col-12 col-sm-12 col-md-6  col-xs-6"><label for="promo">¿Tienes un cupón de
                                descuento?</label><input id="input-descuento" class="input-descuento" type="text"
                                name="promo" placholder="cupón">
                            <a class="btn" onclick="getDescuento()">Usar</a></div>

                        <div class="totals col-12 col-sm-12 col-md-6 col-xs-6">
                            <div class="totals-item">
                                <label>Subtotal</label>
                                <div class="totals-value" id="cart-subtotal">$<spa id="Subtotal-pagina-cart">45</spa>
                                </div>
                            </div>
                            <div class="totals-item">
                                <label>Envio</label>
                                <div class="totals-value" id="cart-shipping">$<spa id="envio-pagina-cart">0</spa>
                                </div>
                            </div>
                            <div class="totals-item totals-item-total">
                                <label style="font-weight: bold;">Total</label>
                                <div class="totals-value" id="cart-total" style="font-weight: 620;">$<spa
                                        id="total-pagina-cart">45</spa>
                                </div>
                            </div>
                            <button type="button"
                                class="btn btn-success btn-agregar-3d-a-carrito .btn-agregar-ir-al-carrito"
                                id="btn-ir-al-shipping" onclick="location.href = 'shipping.php';"
                                style="visibility: visible;">Continuar con el pago</button>
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
    <script src="js/carrito.js"></script>
    <script>
        window.onload = function () {
            // Your code here
            actualizarTablaCarrito(true);
        };
    </script>
</body>

</html>