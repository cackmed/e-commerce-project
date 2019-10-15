import Products from '../data/productItems.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';
import { cartLocalData } from '../products/render-products.js';

const placeOrder = document.getElementById('place-order');
const tbody = document.querySelector('tbody');
const cart = JSON.parse(localStorage.getItem(cartLocalData));

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const weapon = findById(Products, lineItem.id);
    const dom = renderLineItem(lineItem, weapon);
    
    tbody.appendChild(dom);
}

export const getById = (id, Products) => {
    let matchingProducts;
    Products.forEach(Products => {
        if (Products.id === id) {
            matchingProducts = Products;
        }
    });
    return matchingProducts; 
};
const orderTotalCell = document.getElementById('order-total-cell');
orderTotalCell.textContent = toUSD(calcOrderTotal(cart, Products));

if (cart.length === 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.addEventListener('click', () => {
        localStorage.removeItem('cart');
        alert('Your Order is' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
