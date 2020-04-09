import { toUSD } from '../common/utils.js';

export const cartLocalData = 'cart';
const vacantCart = [];

const retriveLocalCart = () => JSON.parse(localStorage.getItem(cartLocalData));
const callEmptyCart = () => { const convertedCart = JSON.stringify(vacantCart);
    localStorage.setItem('cart', convertedCart);
};
const setLocalCart = (currentLocalCart) => {
    const newConvertedCart = JSON.stringify(currentLocalCart);
    localStorage.setItem(cartLocalData, newConvertedCart);
};

export const getById = (id, Products) => {
    let matchingProducts;
    Products.forEach(Products => {
        if (Products.id === id) {
            matchingProducts = Products;
        }
    });
    return matchingProducts; 
};

export const addIntoCartById = (id, cart) => {
    let correctMatch = false;
    cart.forEach(order => {
        if (order.id === id) {
            order.quantity++;
            correctMatch = true;
        }
    });
    if (correctMatch) {
        return;
    } else {
        const newItem = {
            id: id,
            quantity: 1,
        };
        cart.push(newItem);
    }
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
        addIntoCartById(Products.id, currentLocalCart);
        setLocalCart(currentLocalCart);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;