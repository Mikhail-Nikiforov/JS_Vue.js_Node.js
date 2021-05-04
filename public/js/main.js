const linkListSection = document.getElementById('menu');
const menu = [
  { link: '#', name: 'Главная'},
  { link: '#Section_2', name: 'Продукт'},
  { link: '#', name: 'Контакты'}
];
const renderMenu = (link, name) => `<a class="menuStyle" href="${link}">${name}</a>`;//добавление класса для стилизации меню

const renderLinkList = (list) => {
const linkList = list.map(item => renderMenu(item.link, item.name));
document.querySelector('.menu').innerHTML = linkList.join('');
}
renderLinkList(menu);
// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },


    },
    mounted(){


    }

});

    //     return `<div class="product-item" id="${this.id}">
    //             <img src="img/no-image.png" alt="No image" class="product-item_pic" width="100" height="100">
    //             <h3>${this.title}</h3>
    //             <p>${this.price}</p>
    //             <button class="buy-btn add-btn" data-id="${this.id}">Купить</button>
    //         </div>`

    //                 return `<div class="cart_item"   id="cartList${this.id}">
    //     <img src="img/no-image.png" alt="No image" class="product-item_pic" width="100" height="100">
    //     <div class="cart_wrap">
    //         <h3>${this.title}</h3>
    //         <p>${this.price}</p>
    //         <p class="cart_item_quantity">${this.quantity} шт.</p>
    //     </div >
    //         <div class="cart_wrap">
    //             <button class="cart_btn add-btn" data-id="${this.id}" id="cart-add">Добавить</button>
    //             <button class="cart_btn remove-btn" data-id="${this.id}" id="remove-add">Убарть</button>
    //         </div>
    // </div > `
