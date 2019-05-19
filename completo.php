
<?php

$paymentId=$_GET['paymentId'];
$PayerID=$_GET['PayerID'];
echo "<pre>";
echo $paymentId;
echo "<br>";
echo $PayerID;
echo "HOLA";
echo "</pre>";

?>

<!DOCTYPE HTML>
<html>
<head>
	<meta name="format-detection" content="telephone=no">
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
	<!--FUENTES-->
	<!--
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i" rel="stylesheet">-->
	<link href="https://fonts.googleapis.com/css?family=Roboto|Montserrat:400,700|Playfair+Display:400,400i" rel="stylesheet">
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
        <div class="col-md-10 col-8" style="text-align: right; margin-top: 0.3em;margin-bottom: 0.3em;">
            <span style="font-size:13px; color:#FFF; font-family: 'Montserrat', Arial, sans-serif;">Servicio al cliente
                Teléfono:
                477 854 11 12&nbsp;&nbsp;</span>
        </div>
        <div class="col-md-2 col-4" style="text-align: right;">
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
											<div class="col-md-9 col-xs-10 menu-1" style="margin-top:4%; left:5%">
						<ul>
							<li style="margin-right: 1.1em;"><a href="index.html"
									style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">INICIO</a></li>
							<li style="margin-right: 1.1em;"><a href="about.html"
									style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">NOSOTROS</a></li>
							<li style="margin-right: 1.1em;"><a href="catalogo.html"
									style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">CATÁLOGO</a></li>
							<li><a href="envio.html"
									style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">ENVÍO Y DEVOLUCIÓN</a></li>
							<li style="margin-right: 1.1em;"><a href="contact.html"
									style="font-family: 'Roboto', sans-serif; font-size: 1.15rem;">CONTACTO</a></li>
						</ul>
					</div>
									</div>
	
							</div>
					
			</nav>

		<header id="fh5co-header" class="fh5co-cover fh5co-cover-sm" style="height: 10%;">
			<h1 class="tituloPagina" style="font-size: 2rem; color:#4E56DF; font-family: 'Roboto';"><strong>Pago completo</strong></h1>
		</header>
<h5>Tu pago ha sido realizado correctamente</h5>
		<div id="fh5co-product" style="padding-top: 4em;">
			<div class="container" style="font-family: 'Roboto';">

				<div class="row">


					<!-- Tabs -->
					<div class="fh5co-tab-content tab-content" data-tab-content="2">
						<div class="col-md-10 col-md-offset-1">
							<h3 style="color:#2ACA89; font-size: 1.3rem; font-weight: bolder;">POLÍTICAS DE ENVÍO</h3>
							<ul style="font-size: 1.2rem;">

								<li>Nuestros tiempos de entrega son de 7a 15 días hábiles, por medio de la paquetería
									Estafeta.</li>
								<li>Tu envío será procesado un día después de ser concluida la compra.</li>
								<li>Tu pedido es confirmado por medio de un correo electrónico.</li>
								<li>Una vez que tu Puffino esté listo te haremos llegar un correo electrónico donde
									podrás ver tu número de guía para que puedas revisar el rastreo del paquete.</li>
								<li>El envío se realiza por la paquetería de Estafeta (http://www.estafeta.com/).</li>
								<li>Todos nuestros envíos son gratuitos a cualquier parte de la República Mexicana.</li>
								<li>Si tu pedido es mayor a 5 Puffinos, el tiempo de entrega puede variar. Si existiera
									algún contratiempo con tu pedido, el área de Ventas se pondrá en contacto contigo.
								</li>
							</ul>
							<strong>(Los tiempos de entrega pueden extenderse por motivos de la paquetería).</strong>
						</div>
					</div>

					<br>
					<div class="fh5co-tab-content tab-content" data-tab-content="2">
						<div class="col-md-10 col-md-offset-1">
								<h3 style="color:#2ACA89; font-size: 1.3rem; font-weight: bolder;">POLÍTICAS DE DEVOLUCIONES</h3>
							<p style="font-size: 1.2rem;"> En Puffino estamos orgullosos de que todos nuestros productos son fabricados bajo los
								mejores estándares de calidad. En caso de que tu producto sufra un defecto de fábrica,
								el mismo se reparará o remplazará y el costo de la devolución irá por nuestra cuenta.

								Si no te encuentras satisfecho con tu compra, puedes devolver el producto contando con
								un reembolso total (envío no incluido).

								Las devoluciones deberán notificarse con un máximo de 3 días hábiles después de haber
								recibido el producto.

								Cuando se solicite un reembolso será necesario llenar nuestro formato de devolución y
								enviarlo por correo electrónico a nuestro equipo de ventas.</br></br>

								<strong>¿Cómo se llevan a cabo los reembolsos?</strong> </p>
							<ul style="font-size: 1.2rem;">


								<li>Si tu pago fue realizado con tarjeta de débito o crédito, el reembolso se realizará
									a través de nuestra plataforma directo a tu cuenta bancaria.</li>
								<li>Al momento de generar el reembolso te llegara un correo electrónico como
									notificación de la devolución. (No nos hacemos responsables de los días en que se
									vea reflejado el reembolso en tu cuenta, ya que puede haber variaciones dependiendo
									del banco)</li>
								<li>Te haremos llegar un correo electrónico donde podrás ver tu número de guía para
									realizar el rastreo del paquete.</li>
								<li>Si tu pago fue realizado por depósito bancario u Oxxo, se te solicitará una cuenta
									bancaria para realizar el reembolso.</li>
								(Los tiempos de entrega pueden extenderse por motivos de la paquetería).
							</ul>

							<br>
							<h3 style="color:#2ACA89; font-size: 1.3rem; font-weight: bolder;">POLÍTICAS DE CAMBIOS</h3>
							<p style="font-size: 1.2rem;">Aplica cuando el empaque de tu puffino llega en mal estado y por consecuencia se dañó el
								producto.
							Es necesario enviar fotografías del empaque para que podamos documentarlo y evaluar el
								daño. (No aplican cambios cuando el daño fue generado por objetos punzantes cortantes.)
							</p>
						</div>
					</div>


				</div>

			</div>
		</div>
	</div>
	</div>
	</div>

	<!--div id="fh5co-started">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Soporte y Atención al Cliente</h2>
					<p>Suscríbete en nuestro boletín así tendrás cupones y promociones</p>
				</div>
			</div>
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2">
					<form class="form-inline">
						<div class="col-md-6 col-sm-6">
							<div class="form-group">
								<label for="email" class="sr-only">Correo</label>
								<input type="email" class="form-control" id="email" placeholder="Correo">
							</div>
						</div>
						<div class="col-md-6 col-sm-6">
							<button type="submit" class="btn btn-default btn-block">Suscríbete</button>
						</div>
					</form>
				</div>
			</div>
		</div-->
	</div>
	
	<br>
	<div class="row copyright" style="font-family: 'Roboto';">
		<div class="col-md-3 col-sm-2 col-xs-2"></div>
		<div class="col-md-6 col-sm-8 col-xs-8 text-center">
				<p
				style="font-size: 0.9rem;line-height: 1.2em; text-align:center; color:black">
				*Las fotografías mostradas en este sitio web son reales y propiedad de Puffino. Copyright 2017
				León, Guanajuato. Derechos reservados ©, prohibida su reproducción o uso total o parcial por
				cualquier medio.
			</p>
		</div>
		<div class="col-md-3 col-sm-2 col-xs-2"></div>
	</div>

	<footer id="fh5co-footer" style="font-family: 'Roboto'; padding-top: 3em; padding-bottom: 0em;" role="contentinfo">
		<center><div class="container">


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
					</p></div>
  <div class="col-sm-6 col-md-6"><ul class="fh5co-footer-links contacto-links text-center">
						<h3 style="color:#FFF;">CONTÁCTANOS</h3>
						<li>477 854 11 12 </li>
						<li>ventas@oldravenfurniture.com </li>
						<li>León, Gto. </li>

					</ul></div>
</div>


			
		</div></center>
		
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
<script type="text/javascript">
		function ingresar(){
			var parametros={  
								"correo": "rau@mail.com",
                                "nombre": "rau",
                                "apellidos": "hernandez",
                                "direccion": "enrique segobiano",
                                "numInt": 3,
                                "colonia": "lazaro",
                                "referencias": "arbol grande",
                                "ciudad": "zacatecas",
                                "pais": "mexico",
                                "estado": "zac",
								"codigoPostal": 34132,
								"telefono":4565132,
								"paymentId":"asdas1321",
								"PayerID":"payp23423"
                };
                $.ajax({
                        data: parametros,
                        url:   '../service/set/setCliente.php',
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
</body>

</html>