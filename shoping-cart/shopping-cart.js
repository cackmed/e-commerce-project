import cart from '../data/carts.js';
import Products from '../data/productItems.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';
import { localCartData } from '../products/render-products.js';

const tbody = document.querySelector('tbody');
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

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const weapon = findById(Products, lineItem.id);
    const dom = renderLineItem(lineItem, weapon);

    tbody.appendChild(dom);
}
orderTotalCell.textContent = toUSD(calcOrderTotal(cart, Products));

const javascriptReadableCart = JSON.parse(localStorage.getItem(localCartData));
buildTable(javascriptReadableCart, Products);