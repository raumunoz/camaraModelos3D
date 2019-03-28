let itemsCarrito=[];
function mostrarCarro() {
    document.getElementById("carrito").classList.toggle("carrito-activo");
    document.getElementById("rng-total").classList.toggle("total-desactivo");
   // actualizarDivCarrito();
}
function removerArticulo(elemento) {
    padre = elemento.parentNode.parentNode.parentNode;
    padre.remove();
}
/*
paypal.Buttons({
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                description: 'orden numero 126 ',
                amount: {
                    //value: precioT1otal
                    value: 1
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
            return fetch('/paypal-transaction-complete', {
                method: 'post',
                body: JSON.stringify({
                    orderID: data.orderID
                })
            });
        });
    }
}).render('#paypal-button-container');*/
paypal.Buttons({

    // Set up the transaction
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01',
                    items: [{
                        name: 'T-Shirt',
                        description: 'Green XL',
                        quantity: 1,
                        price: 1,
                        currency: 'MXN'
                    }]
                }
            }]
        });
    },

    // Finalize the transaction
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }


}).render('#paypal-button-container');

function agregarAlCarrito(nombre,precio) {
    var existente=false;
    if(itemsCarrito.length==0){
        itemsCarrito.push({name:nombre,price:precio,quantity:1});
    }else{
        itemsCarrito.forEach((x)=>{
            if(x.name===nombre){
                x.quantity++;
                existente=true;
            }
        });
        if(existente==false){
            itemsCarrito.push({name:nombre,price:precio,quantity:1});
        }
        
    }
    actualizarDivCarrito();
}
function actualizarDivCarrito(){
    
    var renglonesCarrito= document.getElementById("row-productos");
    var item=
    `
    <div class="row rng-item">
			<div class="col-1 col-sm-0"></div>
			<div class="col-2 col-sm-3">
				<img src="assets/imagenes/brazoContempo.jpeg" alt="brazo" id="imgProducto" class="img-carrito"
					height="90">
			</div>
			<div class="col-5 col-sm-4 rng-desc-carrito">Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique,
				nesciunt.
			</div>
			<div class="col-3 rng-div-precio">
				<span class="rng-precio">
					$75
				</span>
				<div class="rng-div-cantidad">
					Cantidad: <span class="rng-cantidad">3</span>
				</div>
			</div>
			<div class="col-1 rng-btn-remover-carrito">
				<span class="icon">
					<i class="icon-cross" onclick="removerArticulo(this)" id="rnd()"></i>
				</span>
			</div>
        </div>
        <div class="row rng-item">
			<div class="col-1 col-sm-0"></div>
			<div class="col-2 col-sm-3">
				<img src="assets/imagenes/brazoContempo.jpeg" alt="brazo" id="imgProducto" class="img-carrito"
					height="90">
			</div>
			<div class="col-5 col-sm-4 rng-desc-carrito">Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Similique,
				nesciunt.
			</div>
			<div class="col-3 rng-div-precio">
				<span class="rng-precio">
					$75
				</span>
				<div class="rng-div-cantidad">
					Cantidad: <span class="rng-cantidad">3</span>
				</div>
			</div>
			<div class="col-1 rng-btn-remover-carrito">
				<span class="icon">
					<i class="icon-cross" onclick="removerArticulo(this)" id="rnd()"></i>
				</span>
			</div>
        </div>
        `;
        var carritoTotal="";
        if(itemsCarrito.length>0){

            itemsCarrito.forEach((x)=>{
                if(typeof x !== "undefined"){
                    carritoTotal=carritoTotal+`
                <div class="row rng-item">
                        <div class="col-1 col-sm-0"></div>
                        <div class="col-2 col-sm-3">
                            <img src="assets/imagenes/brazoContempo.jpeg" alt="brazo" id="imgProducto" class="img-carrito"
                                height="90">
                        </div>
                        <div class="col-5 col-sm-4 rng-desc-carrito">`+x.name+`
                        </div>
                        <div class="col-3 rng-div-precio">
                            <span class="rng-precio">
                                $`+x.price+`
                            </span>
                            <div class="rng-div-cantidad">
                                Cantidad: <span class="rng-cantidad">`+x.quantity+`</span>
                            </div>
                        </div>
                        <div class="col-1 rng-btn-remover-carrito">
                            <span class="icon">
                                <i class="icon-cross" onclick="removerArticulo(this)" id="rnd()"></i>
                            </span>
                        </div>
                    </div>
                    `
                    ;
                           
                     
                }
                
            });
            renglonesCarrito.innerHTML =carritoTotal;

        }
}