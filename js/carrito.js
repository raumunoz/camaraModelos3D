let debbugCarrito;
let itemsCarrito = [];
if (sessionStorage.getItem("carrito") == null) {

} else {
    itemsCarrito = JSON.parse(sessionStorage.getItem("carrito"));

    actualizarDivCarrito();
}
function mostrarCarro() {

    document.getElementById("carrito").classList.toggle("carrito-activo");
    document.getElementById("rng-total").classList.toggle("total-desactivo");
    if (itemsCarrito.length <= 0) {
        document.getElementById("btn-agregar-ir-al-carrito").style.visibility = "hidden";
    }

    // actualizarDivCarrito();
}
function removerArticulo(elemento, nombre) {
    padre = elemento.parentNode.parentNode.parentNode;
    padre.remove();
    console.log(nombre);
    itemsCarrito.splice(itemsCarrito.findIndex(v => v.name === nombre), 1);
    console.log(itemsCarrito);
    actualizarDivCarrito();
    if (itemsCarrito.length <= 0) {
        mostrarCarro();
        document.getElementById("row-productos").innerText = "No has agregado nada al carrito";
    }
}



function agregarAlCarrito(nombre, precio, imagen, element) {
    debbugCarrito = element;
    var existente = false;
    if (itemsCarrito.length == 0) {
        itemsCarrito.push({ name: nombre, price: precio, quantity: 1, image: imagen, details: getNombreTextura() });
    } else {
        itemsCarrito.forEach((x) => {
            if (x.name === nombre) {
                x.quantity++;
                existente = true;
                x.details = getNombreTextura();
            }
        });
        if (existente == false) {
            itemsCarrito.push({ name: nombre, price: precio, quantity: 1, image: imagen, details: getNombreTextura() });
        }
    }
    actualizarDivCarrito();
}
function agregarItemsCarrito(tmpCarrito) {
    tmpCarrito.forEach((item) => {
        agregarAlCarrito(item.name, item.price, item.image);
    });
}

function actualizarDivCarrito() {
    var precioAPagar = 0;
    var renglonesCarrito = document.getElementById("row-productos");
    var item =
        `
    <div class="row rng-item">
			<div class="col-xs-1 col-sm-0"></div>
			<div class="col-xs-2 col-sm-3">
				<img src="assets/imagenes/brazoContempo.jpeg" alt="brazo" id="imgProducto" class="img-carrito"
					height="90">
			</div>
			<div class="col-xs-5 col-sm-4 rng-desc-carrito">Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique,
				nesciunt.
			</div>
			<div class="col-xs-3 rng-div-precio">
				<span class="rng-precio">
					$75
				</span>
				<div class="rng-div-cantidad">
					Cantidad: <span class="rng-cantidad">3</span>
				</div>
			</div>
			<div class="col-xs-1 rng-btn-remover-carrito">
				<span class="icon">
					<i class="icon-cross" onclick="removerArticulo(this)" id="rnd()"></i>
				</span>
			</div>
        </div>
        <div class="row rng-item">
			<div class="col-xs-1 col-sm-0"></div>
			<div class="col-xs-2 col-sm-3">
				<img src="assets/imagenes/brazoContempo.jpeg" alt="brazo" id="imgProducto" class="img-carrito"
					height="90">
			</div>
			<div class="col-xs-5 col-sm-4 rng-desc-carrito">Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique,
				nesciunt.
			</div>
			<div class="col-xs-3 rng-div-precio">
				<span class="rng-precio">
					$75
				</span>
				<div class="rng-div-cantidad">
					Cantidad: <span class="rng-cantidad">3</span>
				</div>
			</div>
			<div class="col-xs-1 rng-btn-remover-carrito">
				<span class="icon">
					<i class="icon-cross" onclick="removerArticulo(this)" id="rnd()"></i>
				</span>
			</div>
        </div>
        `;
    var carritoTotal = "";
    if (itemsCarrito.length >= 0) {

        itemsCarrito.forEach((x) => {
            if (typeof x !== "undefined") {
                carritoTotal = carritoTotal + `
                <div class="row rng-item">
                        <div class="col-xs-1 col-1 col-sm-0"></div>
                        <div class="col-xs-2 col-2 col-sm-3 div-imgaen-carrito" >
                            <img src="`+ x.image + `" alt="brazo" id="imgProducto" class="img-carrito"
                                height="90">
                        </div>
                        <div class="col-xs-2 col-2 col-sm-2 rng-desc-carrito ">`+ x.name + `
                        </div>
                        <div class="col-xs-2 col-5 col-sm-2 rng-desc-carrito ">`+ x.details + `
                        </div>
                        <div class="col-xs-3 col-3 rng-div-precio">
                            <span class="rng-precio">
                                $`+ x.price + `
                            </span>
                            <div class="rng-div-cantidad">
                                Cantidad: <span class="rng-cantidad">`+ x.quantity + `</span>
                            </div>
                        </div>
                        <div class="col-xs-1 col-1 rng-btn-remover-carrito">
                            <span class="icon">
                                <i class="icon-cross" onclick="removerArticulo(this,'`+ x.name + `')" id="rnd()"></i>
                            </span>
                        </div>
                    </div>
                    `
                    ;
                if (x.quantity > 1) {
                    precioAPagar = precioAPagar + (x.quantity * x.price);
                } else {
                    precioAPagar = precioAPagar + x.price;
                }

            }

        });
        document.getElementById("btn-agregar-ir-al-carrito").style.visibility = "visible";
        document.getElementById("total-carrito").innerText = precioAPagar;
        renglonesCarrito.innerHTML = carritoTotal;
        document.getElementById("num-carrito").innerText = itemsCarrito.length;
        //actualizarBotonPaypal(precioAPagar);
        sessionStorage.setItem("carrito", JSON.stringify(itemsCarrito));

    } else {
        document.getElementById("btn-agregar-ir-al-carrito").style.visibility = "hidden";
        document.getElementById("total-carrito").innerText = 0;
        document.getElementById("carrito").classList.toggle("carrito-activo");
        document.getElementById("rng-total").classList.toggle("total-desactivo");
        document.getElementById("paypal-button-container").innerHTML = "";
        document.getElementById("num-carrito").innerText = "";
        document.getElementById("row-productos").style.height = "2em";
        document.getElementById("row-productos").innerText = "No has agregado nada al carrito";
        document.getElementById("btn-agregar-ir-al-carrito").style.visibility = "hidden"
    }
    if (itemsCarrito.length == 0) {

    }
}
function actualizarBotonPaypal(total) {
    var itemsApagar = [];
    console.log(total);
    var detalles = "";
    document.getElementById("paypal-button-container").innerHTML = "";
    document.getElementById("paypal-button").innerHTML = "";
    itemsCarrito.forEach((x) => {
        detalles = detalles + x.quantity + " " + x.name + " " + x.price + "|";
        itemsApagar.push(
            {
                name: x.name,
                description: x.name,
                quantity: x.quantity,
                price: x.price,
                currency: 'MXN'
            }
        )
    });

    console.log(itemsApagar);
    paypal.Button.render({
        // Configure environment
        env: 'sandbox',
        client: {
            sandbox: 'Ab3CfXg7wt8RiCw6JkaSJ6TNF0SNKfMj9hJ5LiW2LjRGcGtoLKpFn3lGxDRizT5FHXsONUzWVgetL1jN',
            production: 'demo_production_client_id'
        },
        // Customize button (optional)
        //locale: 'es_XC',
        style: {
            size: 'small',
            color: 'gold',
            shape: 'pill',
            fundingicons: 'true',
        },
        funding: {
            allowed: [paypal.FUNDING.CARD],
            disallowed: [paypal.FUNDING.CREDIT]
        },

        // Enable Pay Now checkout flow (optional)
        commit: true,

        // Set up a payment
        payment: function (data, actions) {
            return actions.payment.create({
                transactions: [{
                    amount: {
                        total: total,
                        currency: 'MXN',
                        /*details: {
                          subtotal: '30.00',
                          tax: '0.07',
                          shipping: '0.03',
                          handling_fee: '1.00',
                          shipping_discount: '-1.00',
                          insurance: '0.01'
                        }*/
                    },
                    description: 'The payment transaction description.',
                    custom: '90048630024435',
                    //invoice_number: '12345', Insert a unique invoice number
                    payment_options: {
                        allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
                    },
                    soft_descriptor: 'ECHI5786786',
                    item_list: {
                        items: itemsApagar,
                        /* {
                          name: 'bolso',
                          description: 'Black handbag.',
                          quantity: '1',
                          price: '15',
                          tax: '0.02',
                          sku: 'product34',
                          currency: 'MXN'
                        }*/

                    }
                }],
                note_to_payer: 'Contactanos si tienes alguna duda sobre tu pedido.'
            });
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
            return actions.payment.execute().then(function () {
                // Show a confirmation message to the buyer
                itemsCarrito = [];
                actualizarDivCarrito();
                window.alert('Gracias por su compra.');
            });
        }
    }, '#paypal-button');
}
function getNombreTextura() {
    var detalles;
    var descripcionTextura = document.getElementById("descripcionMaterial");
    if ((descripcionTextura.innerHTML == "Material") || (descripcionTextura.innerHTML == "") || (typeof descripcionTextura.innerHTML === "undefined")) {
        detalles = "Material normal";
    } else {
        detalles = descripcionTextura.innerHTML;
    }
    return detalles;
}
function actualizarTablaCarrito() {
    var precioAPagar = 0;
    var renglonesTabla = document.getElementById("tabla-carrito");
    var htmlTabla = "";
    if (itemsCarrito.length >= 0) {
        itemsCarrito.forEach((prducto) => {
            if (typeof prducto !== "undefined") {
                htmlTabla = htmlTabla + `
                <tr class="table-row first last" data-cart-item="">
                <td class="product-item first">
                  <div class="image-wrap">
                    <a class="image ">
                      <img  class="item-imgagen" src="${prducto.image}" alt="">
                    </a>
                  </div>
                  <div class="wrap wrap-texto">
                    <span class="label title ">${prducto.name}</a></span>
                  </div>
                </td>
                <td class="product-item ">
                  <div class="wrap wrap-texto">
                    <span class="label variant rng-desc-carrito">${prducto.details}</span>
                  </div>
                </td>
                <td class="price"><span class="money" data-currency-mxn="$ ${prducto.price}" data-currency="MXN">$ ${prducto.price}</span></td>
                <td class="quantity rng-div-cantidad">
                  <span>
                  ${prducto.quantity}
                  </span>
                </td>
                <td class="total"><span class="money rng-precio" data-currency-mxn="$ ${prducto.price * prducto.quantity}" data-currency="MXN">$ ${prducto.price * prducto.quantity}</span></td>
                <td class="remove last">
                <span class="icon">
                <i class="icon-cross" onclick="removerArticulo(this,'${prducto.name}')" id="rnd()"></i>
            </span>
                </td>
              </tr>                    `
                    ;
                if (prducto.quantity > 1) {
                    precioAPagar = precioAPagar + (prducto.price * prducto.quantity);
                } else {
                    precioAPagar = precioAPagar + prducto.price;
                }

            }

        });
        //Subtotal-pagina-cart
        document.getElementById("total-pagina-cart").innerText = precioAPagar;
        document.getElementById("Subtotal-pagina-cart").innerText = precioAPagar;
        renglonesTabla.innerHTML = htmlTabla;
        //document.getElementById("num-carrito").innerText = itemsCarrito.length;
        actualizarBotonPaypal(precioAPagar);
        //sessionStorage.setItem("carrito", JSON.stringify(itemsCarrito));
    } else {
        document.getElementById("total-carrito").innerText = 0;
        document.getElementById("carrito").classList.toggle("carrito-activo");
        document.getElementById("rng-total").classList.toggle("total-desactivo");
        document.getElementById("paypal-button-container").innerHTML = "";
        document.getElementById("num-carrito").innerText = "";
        document.getElementById("row-productos").style.height = "2em";
        document.getElementById("row-productos").innerText = "No has agregado nada al carrito";
    }
    if (itemsCarrito.length == 0) {

    }
}