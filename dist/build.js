/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/CartComp.js":
/*!*******************************!*\
  !*** ./public/js/CartComp.js ***!
  \*******************************/
/***/ (() => {

eval("// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\nVue.component('cart', {\n  data() {\n    return {\n      cartUrl: '/getBasket.json',\n      cartItems: [],\n      imgCart: 'https://placehold.it/200x150',\n      showCart: false\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/cart`).then(data => {\n      for (let item of data.contents) {\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$data.cartItems.push(item);\n      }\n    });\n  },\n\n  methods: {\n    addProduct(item) {\n      let find = this.cartItems.find(el => el.id_product === item.id_product);\n\n      if (find) {\n        this.$parent.putJson(`/api/cart/${find.id_product}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result === 1) {\n            find.quantity++;\n          }\n        });\n      } else {\n        const prod = Object.assign({\n          quantity: 1\n        }, item);\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$parent.postJson(`/api/cart`, prod).then(data => {\n          if (data.result === 1) {\n            this.cartItems.push(prod);\n          }\n        });\n      }\n    },\n\n    remove(item) {\n      this.$parent.getJson(`${API}/addToBasket.json`).then(data => {\n        if (data.result === 1) {\n          if (item.quantity > 1) {\n            item.quantity--;\n          } else {\n            this.cartItems.splice(this.cartItems.indexOf(item), 1);\n          }\n        }\n      });\n    },\n\n    cartCount() {\n      return this.cartItems.reduce((summ, item) => summ + item.quantity, 0);\n    },\n\n    cartSumm() {\n      return this.cartItems.reduce((summ, item) => summ + item.quantity * item.price, 0);\n    }\n\n  },\n  template: `\n    <div>\n    <button class=\"btn-cart\" type=\"button\" @click=\"showCart = !showCart\">Корзина</button>\n\n        <div v-if=\" cartItems.length > 0\" >\n            <div class=\"cart-block\" v-show=\"showCart\">      \n                <h3 > {{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }} товара(ров) ИТОГО:{{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }}) рублей </h3>\n                <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :img=\"item.imgPath\" :cart-item=\"item\" :cart-count = \"cartCount\"\n                :cart-summ = \"cartSumm\" @remove=\"remove\" @add-product=\"addProduct\">\n                </cart-item>\n            </div>  \n        </div>\n    </div>\n    `\n});\nVue.component('cart-item', {\n  props: ['img', 'cartItem'],\n  template: `\n    <div class=\"cart-item\">\n        <img class=\"cartImg\" :src=\"img\" alt=\"Some img\">\n        <div class=\"product-desc\">\n            <h3>{{ cartItem.product_name }}</h3>\n            <p>Цена: {{ cartItem.price }}</p>\n            <div class=\"changeQuantity\">\n                <button class=\"del-btn btnInCart\" @click=\"$emit('remove', cartItem)\"> &times; </button>\n                <p>&#160;{{ cartItem.quantity }}&#160; шт.&#160; </p>\n                <button class=\"btnInCart\" @click=\"$emit('add-product', cartItem)\"> + </button>\n            </div>          \n            <p>Сумма: {{ cartItem.price * cartItem.quantity }}</p>\n        </div>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./public/js/CartComp.js?");

/***/ }),

/***/ "./public/js/ErrorComp.js":
/*!********************************!*\
  !*** ./public/js/ErrorComp.js ***!
  \********************************/
/***/ (() => {

eval("Vue.component('error', {\n  data() {\n    return {\n      text: ''\n    };\n  },\n\n  computed: {\n    isVisible() {\n      return this.text !== '';\n    }\n\n  },\n  template: `\n    <div class=\"error-block\" v-if=\"isVisible\">\n        <p class=\"error-msg\">\n        <button class=\"close-btn\" @click=\"text=''\">&times;</button>\n        {{ text }}\n</p>\n</div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./public/js/ErrorComp.js?");

/***/ }),

/***/ "./public/js/FilterComp.js":
/*!*********************************!*\
  !*** ./public/js/FilterComp.js ***!
  \*********************************/
/***/ (() => {

eval("Vue.component('filter-el', {\n  data() {\n    return {\n      userSearch: ''\n    };\n  },\n\n  template: `<form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" placeholder=\"Поиск товаров\" class=\"search-field\" v-model=\"userSearch\">\n                <button type=\"submit\" class=\"btn-search\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </form>`\n});\n\n//# sourceURL=webpack://project_express/./public/js/FilterComp.js?");

/***/ }),

/***/ "./public/js/ProductComp.js":
/*!**********************************!*\
  !*** ./public/js/ProductComp.js ***!
  \**********************************/
/***/ (() => {

eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: '/catalogData.json',\n      filtered: [],\n      products: [],\n      imgProduct: 'https://placehold.it/200x150'\n    };\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/products`).then(data => {\n      for (let item of data) {\n        item.imgPath = `img/${item.id_product}.jpg`;\n        this.$data.products.push(item);\n        this.$data.filtered.push(item);\n      }\n    });\n  },\n\n  methods: {\n    filter(userSearch) {\n      let regexp = new RegExp(userSearch, 'i');\n      this.filtered = this.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n  template: `<div class=\"products\">\n                <product v-for=\"item of filtered\" \n                :key=\"item.id_product\" \n                :img=\"item.imgPath\"\n                :product=\"item\"\n                @add-product=\"$parent.$refs.cart.addProduct\"></product>\n               </div>`\n});\nVue.component('product', {\n  props: ['product', 'img'],\n  template: `\n            <div class=\"product-item\">\n                <img :src=\"img\" alt=\"Some img\">\n                <div class=\"desc\">\n                <h3 class=\"forDesc\">{{product.product_name}}</h3>\n                <p class=\"forDesc\">{{product.price}}</p>\n                    <button class=\"buy-btn forDesc\" @click=\"$emit('add-product', product)\">Купить</button>\n                </div>\n            </div>\n    `\n});\n\n//# sourceURL=webpack://project_express/./public/js/ProductComp.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

eval("const linkListSection = document.getElementById('menu');\nconst menu = [{\n  link: '#',\n  name: 'Главная'\n}, {\n  link: '#Section_2',\n  name: 'Продукт'\n}, {\n  link: '#',\n  name: 'Контакты'\n}];\n\nconst renderMenu = (link, name) => `<a class=\"menuStyle\" href=\"${link}\">${name}</a>`; //добавление класса для стилизации меню\n\n\nconst renderLinkList = list => {\n  const linkList = list.map(item => renderMenu(item.link, item.name));\n  document.querySelector('.menu').innerHTML = linkList.join('');\n};\n\nrenderLinkList(menu); // const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\nconst app = new Vue({\n  el: '#app',\n  data: {\n    userSearch: ''\n  },\n  methods: {\n    getJson(url) {\n      return fetch(url).then(result => result.json()).catch(error => {\n        // console.log(error)\n        this.$refs.error.text = error;\n      });\n    },\n\n    postJson(url, data) {\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        // console.log(error)\n        this.$refs.error.text = error;\n      });\n    },\n\n    putJson(url, data) {\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        // console.log(error)\n        this.$refs.error.text = error;\n      });\n    }\n\n  },\n\n  mounted() {}\n\n}); //     return `<div class=\"product-item\" id=\"${this.id}\">\n//             <img src=\"img/no-image.png\" alt=\"No image\" class=\"product-item_pic\" width=\"100\" height=\"100\">\n//             <h3>${this.title}</h3>\n//             <p>${this.price}</p>\n//             <button class=\"buy-btn add-btn\" data-id=\"${this.id}\">Купить</button>\n//         </div>`\n//                 return `<div class=\"cart_item\"   id=\"cartList${this.id}\">\n//     <img src=\"img/no-image.png\" alt=\"No image\" class=\"product-item_pic\" width=\"100\" height=\"100\">\n//     <div class=\"cart_wrap\">\n//         <h3>${this.title}</h3>\n//         <p>${this.price}</p>\n//         <p class=\"cart_item_quantity\">${this.quantity} шт.</p>\n//     </div >\n//         <div class=\"cart_wrap\">\n//             <button class=\"cart_btn add-btn\" data-id=\"${this.id}\" id=\"cart-add\">Добавить</button>\n//             <button class=\"cart_btn remove-btn\" data-id=\"${this.id}\" id=\"remove-add\">Убарть</button>\n//         </div>\n// </div > `\n\n//# sourceURL=webpack://project_express/./public/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/CartComp.js"]();
/******/ 	__webpack_modules__["./public/js/ErrorComp.js"]();
/******/ 	__webpack_modules__["./public/js/FilterComp.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/ProductComp.js"]();
/******/ 	
/******/ })()
;