document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("speedSlider");
    const html = document.documentElement;
  
    slider.addEventListener("input", function() {
      const speed = 50 - slider.value + 1; // Invert the direction
      html.style.animationDuration = `${speed}s`;
    });
  });

/// Shopify buy button

  (function () {
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
      var client = ShopifyBuy.buildClient({
      domain: 'c7d704.myshopify.com',
      storefrontAccessToken: 'd3c00ba83eccc010014886130a060d88',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
          id: '8448327844148',
          node: document.getElementById('product-component-1722486374128'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
  "product": {
      "styles": {
      "product": {
          "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "0px",
          "margin-bottom": "50px"
          }
      },
      "button": {
          "font-weight": "bold",
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
          "background-color": "#000000"
          },
          "background-color": "#000000",
          ":focus": {
          "background-color": "#000000"
          },
          "border-radius": "6px"
      },
      "quantityInput": {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
      }
      },
      "buttonDestination": "checkout",
      "contents": {
      "img": false,
      "title": false,
      "price": false
      },
      "text": {
      "button": "Buy CAD File"
      }
  },
  },
      });
      });
  }
  })();
