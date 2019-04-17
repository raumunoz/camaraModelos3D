var inputEmail = elementoId("correo-shipping");
var inputNombre = elementoId("nombre-shiping");
var inputApellidos = elementoId("apellidos-shiping");
var inputDireccion = elementoId("direccion-shipping");
var inputCiudad = elementoId("ciudad-shipping");
var inputPais = elementoId("pais-shipping");
var inputEstado = elementoId("estado-shipping");
var inputTelefono = elementoId("telefono-shipping");
var inputEstado = elementoId("estado-shipping");
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //var forms = document.getElementsByClassName('needs-validation');
        
        bootstrapValidate('#correo-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#direccion-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#ciudad-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#pais-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#estado-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#codigo-postal-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#apellidos-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#nombre-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#telefono-shipping', 'email:tiene que ser correo');
        var forms = document.getElementById("form-envio");
        fetch("js/paisesEstados.json")
            .then(res => res.json())
            .then(data => paises = data)
            .then(() => {
                generaOpcPaises();
                cambioDePais()
            });
        // Loop over them and prevent submission
        /*var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    alert("invalido");
                    event.preventDefault();
                    event.stopPropagation();
                }else {
                    var nombre = "";
                    alert("validado");
                    event.preventDefault();
                    event.stopPropagation();
                }
                //form.classList.add('was-validated');
            }, false);
        });*/
    }, false);
})();



var paises;
var dropPaises = document.getElementById("pais-shipping");
var dropEstados = document.getElementById("estado-shipping");

function generaOpcPaises() {
    var opcPaises = "";
    paises.forEach(pais => {
        if (pais.name == "Mexico") {
            opcPaises = opcPaises + `
            <option value="${pais.name}" selected >${pais.name}</option>
            `;
        } else {
            opcPaises = opcPaises + `
            <option value="${pais.name}" >${pais.name}</option>
            `;
        }

    });
    dropPaises.innerHTML = opcPaises;
    //alert(dropPaises.selectedOptions[0].innerText);

}
function generaOpcEstados(pais) {
    var opcEstados = "";
    var estados = paises.find(x => x.name == pais).states;

    if (typeof estados !== "undefined") {
        estados.forEach((estado) => {
            opcEstados = opcEstados + `
            <option value="${estado.name}">${estado.name}</option>
            `;
        })
    }
    dropEstados.innerHTML = opcEstados;

}

function cambioDePais() {
    var pais = dropPaises.selectedOptions[0].innerText;
    generaOpcEstados(pais);
}
function vistaResumen() {

}
function elementoId(id) {
    return document.getElementById(id);
}
function estilosResumen() {
    var divTotales = elementoId("")
}
function cambiaPantallaResumen() {
    var contenido = elementoId("contenido-cambiar");
    contenido.innerHTML =
        `
        <div class="" style="font-family: 'Roboto';padding: 0;margin: 0;width: 100%; max-width: auto;">
        <div class="card card-body shadow-none info-shipping">Dirección del envio <br>
            <span id="resumen-direccion">

                colonia las palmas numer 345, durango , zacatecas.
            </span>
            <hr>
            Correo <br>
            <span id="resumen-correo">mail@mail.com</span>
        </div>
        <table class="table">

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

                <tr class="table-row first last" data-cart-item="">
                    <td class="product-item first">
                        <div class="image-wrap">
                            <a class="image" href="/products/merida?variant=12424089862240">
                                <img src="//cdn.shopify.com/s/files/1/1832/7035/products/DakotaWide01_1024x1024_f904b784-a574-4a94-8de2-cdd15c0e9569_compact.jpg?v=1535944817"
                                    alt="">

                            </a>
                        </div>
                        <div class="wrap">

                            <span class="label title"><a href="/products/merida?variant=12424089862240"
                                    title="">Zazil</a></span>
                            <span class="label variant">Selecciona el material / Ahora escoge el
                                color</span>



                        </div>
                    </td>

                    <td class="price"><span class="money" data-currency-mxn="$ 3,299.00" data-currency="MXN">$
                            3,299.00</span></td>
                    <td class="quantity">
                        <span class="spinner">
                            <a href="/cart/change/12424089862240?line=1&amp;quantity=0"><span class="sub"><i
                                        class="material-icons"
                                        style="line-height: 33px; font-size:14px">remove</i></span></a>
                            <input type="number" value="1" data-id="12424089862240" min="1" max="100">
                            <a href="/cart/change/12424089862240?line=1&amp;quantity=2"><span class="add"><i
                                        class="material-icons"
                                        style="line-height: 33px; font-size:14px">add</i></span></a>
                        </span>
                    </td>
                    <td class="total"><span class="money" data-currency-mxn="$ 3,299.00" data-currency="MXN">$
                            3,299.00</span></td>
                    <td class="remove last"><a href="/cart/change/12424089862240?line=1&amp;quantity=0"><i
                                class="material-icons"
                                style="color:#ce1600; line-height: 10px;">delete_forever</i></a></td>
                </tr>

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
                <div class="totals col-12 col-sm-12 col-md-12 col-xs-12">
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
                </div>

            </div>
            <h6 class="selecion-pago">Seleccione una forma de pago:</h6>
            <div class="row">
                <div class="col-0 col-sm-5 col-md-7"></div>
                <div class="col-12 col-sm-7 col-md-5">
                    <div id="paypal-button-container"></div>
                    <div id="paypal-button"></div>
                </div>
            </div>

        </div>
        <div class="total">
        </div>
    </div>
        `;
    actualizarBotonPaypal();
    actualizarTablaCarrito();
}

function toSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}