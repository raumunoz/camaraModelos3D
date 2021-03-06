var inputEmail = elementoId("correo-shipping");
var inputNombre = elementoId("nombre-shipping");
var inputApellidos = elementoId("apellidos-shipping");
var inputDireccion = elementoId("direccion-shipping");
var inputDetallesDireccion = elementoId("detalles-direccion-shipping");
var inputCiudad = elementoId("ciudad-shipping");
var inputPais = elementoId("pais-shipping");
var inputEstado = elementoId("estado-shipping");
var inputTelefono = elementoId("telefono-shipping");
var inputEstado = elementoId("estado-shipping");
var inputCodigoPostal = elementoId("codigo-postal-shipping");
var correoValido;
var direccionValido;
var ciudadValido;
var paisValido;
var EstadoValido;
var codigoValido;
var apellidosValido;
var nombreValido;
var telefonoValido;
var datosDeEnvio = {};
let inputJson;
let inputJson2;
let inputJson3;
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //var forms = document.getElementsByClassName('needs-validation');
        const formPrueba= document.getElementById("id-submit-prueba");
        inputJson=document.getElementById("jsonInput");
        inputJson2=document.getElementById("jsnCar");
        inputJson3=document.getElementById("tot");
        
        //actualizarCarrito
        inputJson.value="texto de valor";
        /*formPrueba.addEventListener('submit',function(e){
            e.preventDefault();
            const formData=new FormData(this);

            fetch('login.php',{
                method:'post',
                body:formData
            }).then((response)=>{
                return response.text();
            }).then(function (text){
                console.log(text);
            }).catch(function(error){
                console.error(error);
            });
        })*/
        bootstrapValidate('#correo-shipping', 'email:Ingresa un correo valido', (valido) => {
            if (valido) {
                console.log("correo valido");
                correoValido = valido;
            } else {
                console.log("correo no valido");
            }
        });
        bootstrapValidate('#direccion-shipping', 'required:campo requerido', (valido) => {
            if (valido) {
                console.log("direccion valido");
                direccionValido = valido;
            } else {
                console.log("direccion no valido");
            }
        });
        bootstrapValidate('#ciudad-shipping', 'required:campo requerido', (valido) => {
            if (valido) {
                console.log("ciudad valido");
                ciudadValido = valido;
            } else {
                console.log("ciudad no valido");
            }
        });
        bootstrapValidate('#pais-shipping', 'required:Requerido', (valido) => {
            if (valido) {
                console.log("pais valido");
                paisValido = valido;
            } else {
                console.log("pais no valido");
            }
        });
        //bootstrapValidate('#estado-shipping', 'email:tiene que ser correo');
        bootstrapValidate('#codigo-postal-shipping', 'numeric|required:Ingresa solo numeros', (valido) => {
            if (valido) {
                console.log("codigo valido");
                codigoValido = valido;
            } else {
                console.log("codigo no valido");
            }
        });
        bootstrapValidate('#apellidos-shipping', 'required|required:campo requerido', (valido) => {
            if (valido) {
                console.log("apellidos valido");
                apellidosValido = valido;
            } else {
                console.log("apellidos no valido");
            }
        });
        bootstrapValidate('#nombre-shipping', 'required|required:campo requerido', (valido) => {
            if (valido) {
                console.log("nombreValido valido");
                nombreValido = valido;
            } else {
                console.log("nombreValido no valido");
            }
        });
        bootstrapValidate('#telefono-shipping', 'numeric:Ingresa solo numeros', (valido) => {
            if (valido) {
                console.log("telefono valido");
                telefonoValido = valido;
            } else {
                console.log("telefono no valido");
            }
        });
        var forms = document.getElementById("form-envio");
        fetch("js/paisesEstados.json")
            .then(res => res.json())
            .then(data => paises = data)
            .then(() => {
                generaOpcPaises();
                cambioDePais();
                forma.reset();
            });
        var forms = document.getElementsByClassName('needs-validation');
        var forma = document.getElementById("forma");

       
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if ((correoValido == true) && (direccionValido == true) && (ciudadValido == true) && (apellidosValido == true) && (nombreValido == true)) {
                    //event.preventDefault();
                    //event.stopPropagation();
                    var persona={
                        edad:23,
                        nombre:"pepe"
                    }
                    console.log("correoValido", "direccionValido", "ciudadValido", "apellidosValido", "nombreValido");
                    datosDeEnvio.correo = inputEmail.value;
                    datosDeEnvio.nombre = inputNombre.value;
                    datosDeEnvio.apellidos = inputApellidos.value;
                    datosDeEnvio.direccion = inputDireccion.value;
                    datosDeEnvio.ciudad = inputCiudad.value;
                    datosDeEnvio.pais = inputPais.value;
                    datosDeEnvio.estado = inputEstado.value;
                    datosDeEnvio.telefono = inputTelefono.value;
                    datosDeEnvio.codigoPostal = inputCodigoPostal.value;
                    datosDeEnvio.detallesDirecion = inputDetallesDireccion.value;
                
                    inputJson.value=JSON.stringify(datosDeEnvio);
                    inputJson2.value=JSON.stringify(rtnCrrt());
                    inputJson3.value=JSON.stringify(rtnTot());
                    event.returnValue = true;
                    //cambiaPantallaResumen();
                    //inputJso2.value=JSON.stringify(rtnCrrt());
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    alert("ingresa todos los datos correctamente");
                }
                //form.classList.add('was-validated');
            }, false);
        });
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
            <option value="${pais.code2}" selected >${pais.name}</option>
            `;
        } else {
            opcPaises = opcPaises + `
            <option value="${pais.code2}" >${pais.name}</option>
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
            <option value="${estado.code}">${estado.name}</option>
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
        <?php echo "saludo"; ?>
        <div class="" style="font-family: 'Roboto';padding: 0;margin: 0;width: 100%; max-width: auto;">
        <div class="card card-body shadow-none info-shipping">Dirección del envio <br>
            <span id="resumen-direccion">
                ${datosDeEnvio.direccion},${datosDeEnvio.detallesDirecion == "" ? "" : datosDeEnvio.detallesDirecion + ","} ${datosDeEnvio.pais}, ${datosDeEnvio.estado}.
            </span>
            <hr>
            Contacto <br>
            <span id="resumen-correo">Nombre: ${datosDeEnvio.nombre}</span>
            <span id="resumen-correo">Correo: ${datosDeEnvio.correo}</span>
            <span id="resumen-correo">Teléfono: ${datosDeEnvio.telefono}</span>
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
<p>Seleccione una forma de pago:</p>
<div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked  onchange="handleChange1();">
  <label for="paypal">paypal</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey" onchange="handleChange2();">
  <label for="tarjeta">tarjeta de credito</label>
</div>

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
    actualizarTablaCarrito(false, datosDeEnvio);
}
function postJS(){
    
}
