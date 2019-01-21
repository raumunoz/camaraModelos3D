//import Client from 'shopify-buy';
//Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4NzYzMzg1NzMzNzY=
//Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4OTAzMDI1NTgyNzI=
//Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5MDg5MjExMDY0OTY=
/*
let productos;
let primerProducto;
var productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';
var checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
var lineItemsToAdd = [
  { variantId: productId, quantity: 1 }
];
const lineItems = [
  { variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4NzYzMzg1NzMzNzY==', quantity: 5 },
  // Line items can also have additional custom attributes
  {
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4OTAzMDI1NTgyNzI==',
    quantity: 2,
    customAttributes: { 'key': 'attributeKey', 'value': 'attributeValue' }
  }
];
let carrito;
let botonCheckout = document.getElementById("checkout");
const input = {
  lineItems: [
    { variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4OTAzMDI1NTgyNzI=', quantity: 5 }
  ]
};*/
client = ShopifyBuy.buildClient({
  //storefrontAccessToken ='2208962e7b54ddee1fbe34f597b16ca6',
  //domain: 'tiendarau.myshopify.com',
  //domain:'raurau.myshopify.com',
  //storefrontAccessToken: 'f5d1bbf331bc01d502a98a7ca693b390',
  //domain: 'raurau.myshopify.com',
  //storefrontAccessToken: '0958b97ff0e7a47392e7f8328738f0d2',
  domain: 'raurau.myshopify.com',
  storefrontAccessToken: '0958b97ff0e7a47392e7f8328738f0d2',

});

client.checkout.create(input).then((checkout) => {
  // Do something with the newly created checkout
  console.log("checkout", checkout);
});

//obtener productos
client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log("productos", products);
  productos = products;
  productId = productos[0].id;
  productos.forEach(element => {
    console.log("ID", element.id);
  });
});

function productoPorId(productId) {
  client.product.fetch(productId).then((product) => {
    // Do something with the product
    console.log("producto", product);
    primerProducto = product;
  });
}

// Create an empty checkout
function crearCheckout() {
  client.checkout.create().then((checkout) => {
    // Do something with the checkout
    console.log("Checkout", checkout);
    carrito = checkout;
    checkoutId = carrito.id;
  });
}

function agregarAcheckout() {
  // Add an item to the checkout
  client.checkout.addLineItems(checkoutId, producto(productId, 1)).then((checkout) => {
    // Do something with the updated checkout
    console.log("cehckout items", checkout.lineItems);
    // Array with one additional line item
  });
}

function producto(id, cantidad) {
  return [{ variantId: id, quantity: cantidad }]
}














