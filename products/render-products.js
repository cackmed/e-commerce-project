import { toUSD } from '../common/utils.js';

const retriveLocalCart = () => JSON.parse(localStorage.getItem(Cart_local_data));
const Cart_local_data = 'cart';
const vacantCart = [{ id: 'ironDagger', quantity: 1 }];
const callEmptyCart = () => { const convertedCart = JSON.stringify(vacantCart);
    localStorage.setItem('cart', convertedCart);
};
const setLocalCart = (currentLocalCart) => {
    const newConvertedCart = JSON.stringify(currentLocalCart);
    localStorage.setItem(Cart_local_data, newConvertedCart);
};


function renderProducts(Products) {
    const li = document.createElement('li');
    li.className = Products.category;
    li.title = Products.description;

    const h3 = document.createElement('h3');
    h3.textContent = Products.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + Products.image;
    img.alt = Products.name + ' image ';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(Products.price);

    const usd = '$' + Products.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add'; 
    button.value = Products.id;
    button.addEventListener('click', () => {
        let currentLocalCart = retriveLocalCart();
        if (!currentLocalCart) { 
            callEmptyCart();
            currentLocalCart = retriveLocalCart();
        }
        setLocalCart(currentLocalCart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;