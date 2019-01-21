/*
var client = ShopifyBuy.buildClient({
    domain: 'tiendarau.myshopify.com',
    apiKey: '2208962e7b54ddee1fbe34f597b16ca6',
    appId: '6',
});
*/
/*
var client = ShopifyBuy.buildClient({
    domain: 'tiendarau.myshopify.com',
    apiKey: '2208962e7b54ddee1fbe34f597b16ca6', // previously apiKey, now deprecated
});
*/
/*
var ui = ShopifyBuy.UI.init(client);
ui.createComponent('product', {
    id: 1234567,
    node: document.getElementById('my-product')
});
*/
/*
var client = ShopifyBuy.buildClient({
    apiKey: '2208962e7b54ddee1fbe34f597b16ca6',
    domain: 'tiendarau.myshopify.com',
    appId: '6'
  });
*/
var client;
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        loadScript();
    }
} else {
    loadScript();
}

function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;

}

function ShopifyBuyInit() {
    client = ShopifyBuy.buildClient({
   //   domain: 'tiendarau.myshopify.com',
    //  storefrontAccessToken: '956f97f33caea146b6ba4c24dddbb76e',
        domain: 'raurau.myshopify.com',
  storefrontAccessToken: '0958b97ff0e7a47392e7f8328738f0d2',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
            id: [1876338573376],
            node: document.getElementById('product-component-1cbd12eefea'),
            moneyFormat: '%24%20%7B%7Bamount%7D%7D',
            /*
            options: {
                "product": {
                    "layout": "horizontal",
                    "variantId": "all",
                    "width": "100%",
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "variantTitle": false,
                        "description": true,
                        "buttonWithQuantity": false,
                        "quantity": false
                    },
                    "styles": {
                        "product": {
                            "text-align": "left",
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0",
                                "margin-bottom": "50px"
                            }
                        },
                        "title": {
                            "font-size": "26px"
                        },
                        "price": {
                            "font-size": "18px"
                        },
                        "compareAt": {
                            "font-size": "15px"
                        }
                    }
                },
                "cart": {
                    "contents": {
                        "button": true
                    },
                    "styles": {
                        "footer": {
                            "background-color": "#000000"
                        }
                    }
                },
                "modalProduct": {
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "variantTitle": false,
                        "buttonWithQuantity": true,
                        "button": false,
                        "quantity": false
                    },
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0px",
                                "margin-bottom": "0px"
                            }
                        }
                    }
                },
                "productSet": {
                    "styles": {
                        "products": {
                            "@media (min-width: 601px)": {
                                "margin-left": "-20px"
                            }
                        }
                    }
                }
            }*/
            options: {
                product: {
                  buttonDestination: 'modal'
                },
                cart: {
                  startOpen: true
                }
              }
        });
    });
}
