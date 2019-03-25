function mostrarCarro() {
    document.getElementById("carrito").classList.toggle("carrito-activo");
    document.getElementById("rng-total").classList.toggle("total-desactivo");
}
function removerArticulo(elemento) {
    padre = elemento.parentNode.parentNode.parentNode;
    padre.remove();
}
paypal.Buttons({
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                description: 'orden numero 125 ',
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
}).render('#paypal-button-container');