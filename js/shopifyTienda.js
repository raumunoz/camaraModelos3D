//let productos;
//let checkout;
//let checkoutId;
let checkId;
let xhr = new XMLHttpRequest();
let url = "https://raurau.myshopify.com/api/graphql";
//let btnCarrito;
let checkoutWeb;
let cantidad = 0;
//let cnt;
let divProductos;
let respuesta;
//se carga cuando carga
let lineItemsToAdd = [
    { variantId: '20146082644032', quantity: "1" }
];
client = ShopifyBuy.buildClient({
    //storefrontAccessToken ='2208962e7b54ddee1fbe34f597b16ca6',
    //domain: 'tiendarau.myshopify.com',
    //domain:'raurau.myshopify.com',
    //storefrontAccessToken: 'f5d1bbf331bc01d502a98a7ca693b390',
    //domain: 'raurau.myshopify.com',
    //storefrontAccessToken: '0958b97ff0e7a47392e7f8328738f0d2',
    domain: 'raurau.myshopify.com',
    //storefrontAccessToken: '0958b97ff0e7a47392e7f8328738f0d2',
    storefrontAccessToken: 'f5d1bbf331bc01d502a98a7ca693b390 ',
});

client.product.fetchAll().then((products) => {
    // Do something with the products
    console.log("productos", products);
    productos = products;
    productId = productos[0].id;
    productos.forEach(element => {
        console.log("ID", element.id);
    });
});

// Create an empty checkout
client.checkout.create().then((checkoutNuevo) => {
    // Do something with the checkout
    checkout = checkoutNuevo;
    checkoutId = checkout.id;
    console.log("checkout nuevo", checkoutNuevo);
});
/*
client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
    // Do something with the updated checkout
    console.log("checkout productos",checkout.lineItems); // Array with one additional line item
});
*/
function idObjeto() {
    /*
    xhttp.open("POST", "demo_post2.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
    */
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    xhr.send("{ shop{ products(first: 2){ edges{ node{ variants(first: 1){ edges{ node{ id } } } } } } } }");

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    console.log("respuesta", respuesta);

                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };
    return respuesta;
}
function decrementar() {
    cantidad--;
    cnt.innerText = cantidad;
}

function pruebaAgregar() {
    cantidad++;
    cnt.innerText = cantidad;
    var mutation =
        `
    mutation{                                          
        checkoutCreate(input: { lineItems:[{variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMDEzODc0NjYwOTcyOA==",quantity:`+ cantidad + `}]}){
            checkout{
                id
                webUrl
                lineItems(first:1){
                    edges{
                        node{
                            title
                            quantity
                        }
                    }
                }
            }
        }
    }`
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    xhr.send(mutation);

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    checkoutWeb = respuesta.data.checkoutCreate.checkout.webUrl;
                    console.log("respuesta", respuesta);
                    checkId = respuesta.data.checkoutCreate.checkout.id;
                    redirect = `javascript: location.href='` + checkoutWeb + `';`;
                    //btnCarrito.setAttribute( "onClick", "javascript: location.href='http://www.yahoo.com';" );
                    btnCarrito.setAttribute("onClick", redirect);
                    //checkId = respuesta.data.checkoutCreate.checkout.id;
                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };

}

function redirect() {
    var url = "https://www.google.com";
    window.location(url);
}

function agregarMultiple() {
    // Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMDE0NjA4MjY0NDAzMg==

    cantidad++;
    cnt.innerText = cantidad;
    var mutation =
        `mutation{                                          
        checkoutCreate(input: { lineItems:[
            {variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMDEzODc0NjYwOTcyOA==",quantity:`+ cantidad + `},
            {variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMDE0NjA4MjY0NDAzMg==",quantity:`+ cantidad + `}
            ]}){
            checkout{
                id
                webUrl
                lineItems(first:1){
                    edges{
                        node{
                            title
                            quantity
                        }
                    }
                }
            }
        }
    }`
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    xhr.send(mutation);

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    checkoutWeb = respuesta.data.checkoutCreate.checkout.webUrl;
                    console.log("respuesta", respuesta);
                    redirect = `javascript: location.href='` + checkoutWeb + `';`;
                    //btnCarrito.setAttribute( "onClick", "javascript: location.href='http://www.yahoo.com';" );
                    btnCarrito.setAttribute("onClick", redirect);
                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };

}

function graphqlQuery(query) {
    var respuesta = "";
    /*
    xhttp.open("POST", "demo_post2.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("fname=Henry&lname=Ford");
    */
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    xhr.send(query);

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    console.log("respuesta", respuesta);
                    //respuesta.data.shop.products.edges[0].node.variants.edges[0].
                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };
    return respuesta;
}

function agregarProducto(id) {
    //console.log("id",id);
    cantidad++;
    cnt.innerText = cantidad;
    var mutation =
        `
        mutation{                                          
        checkoutCreate(input: { lineItems:[{variantId:"`+ id + `",quantity:1}]}){
            checkout{
                id
                webUrl
                lineItems(first:1){
                    edges{
                        node{
                            title
                            quantity
                        }
                    }
                }
            }
        }
    }
    `;
    /*
    `mutation{                                          
        checkoutCreate(input: { lineItems:[
            {variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yMDEzODc0NjYwOTcyOA==",quantity:`+ cantidad + `},
            ]}){
            checkout{
                id
                webUrl
                lineItems(first:1){
                    edges{
                        node{
                            title
                            quantity
                        }
                    }
                }
            }
        }
    }`
    */
    console.log("", mutation);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    xhr.send(mutation);

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    //checkoutWeb = respuesta.data.checkoutCreate.checkout.webUrl;
                    console.log("respuesta", respuesta);
                    //redirect = `javascript: location.href='` + checkoutWeb + `';`;
                    //btnCarrito.setAttribute( "onClick", "javascript: location.href='http://www.yahoo.com';" );
                    //btnCarrito.setAttribute("onClick", redirect);
                    checkId = respuesta.data.checkoutCreate.checkout.id;
                    console.log("CHECKID", checkId);
                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };

}
function debugear(texto) {
    console.log(texto);
}
function agregarNuevoProducto(idproducto) {
    var query =
        `mutation{                                          
            checkoutCreate(input: { lineItems:[{variantId:"`+ idproducto + `",quantity:1}]}){
                checkout{
                    id
                    webUrl
                    lineItems(first:1){
                        edges{
                            node{
                                title
                                quantity
                            }
                        }
                    }
                }
            }
        }
    `;
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/graphql");
    xhr.setRequestHeader("X-Shopify-Storefront-Access-Token", "f5d1bbf331bc01d502a98a7ca693b390");
    if (checkId == null) {
        console.log("checkId",checkId);
        xhr.send(query);
    } else {
        console.log("checkId",checkId);
        var query1 =
        `mutation {
            checkoutLineItemsAdd(lineItems: [{ variantId: "`+idproducto +`", quantity: 1 }], 
            checkoutId: "`+checkId+`",
            ) {
              checkout {
                 id
                 webUrl
                 lineItems(first:2) {
                   edges {
                     node {
                       id
                       title
                       quantity
                     }
                   }
                 }
              }
            }
          }
        `;
        console.log("QUERY",query1);
        xhr.send(query1);
    }

    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (xhr.statusText == "OK") {
                    respuesta = JSON.parse(xhr.responseText);
                    if(checkId==null){
                        console.log("no hay checkout id",checkId);
                        checkId = respuesta.data.checkoutCreate.checkout.id;

                    }else{
                        console.log("checkout ID creado" ,checkId);
                    }
                    console.log("respuesta", respuesta);
                    checkoutWeb = respuesta.data.checkoutCreate.checkout.webUrl;
                    console.log("respuesta", respuesta);
                    checkId = respuesta.data.checkoutCreate.checkout.id;
                    redirect = `javascript: location.href='` + checkoutWeb + `';`;
                    //btnCarrito.setAttribute( "onClick", "javascript: location.href='http://www.yahoo.com';" );
                    btnCarrito.setAttribute("onClick", redirect);
                }
            } else {
                console.error(xhr.statusText);
                respuesta = xhr.statusText;
            }
        }
    };
    return respuesta;
}

//https://www.bassettfurniture.com