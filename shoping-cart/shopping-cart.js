import Products from '../data/productItems.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';
import { cartLocalData } from '../products/render-products.js';
//import cart from '../data/carts.js';
const cart = JSON.parse(localStorage.getItem(cartLocalData));



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
for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const weapon = findById(Products, lineItem.id);
    const dom = renderLineItem(lineItem, weapon);

    tbody.appendChild(dom);
}
const orderTotalCell = document.getElementById('order-total-cell');
orderTotalCell.textContent = toUSD(calcOrderTotal(cart, Products));

//const addRow = (productsOrder, Products) => {
//    const orderProduct = getById(productsOrder.id, Products);
//    const row = renderLineItem(orderProduct, productsOrder);
//
//    tbody.appendChild(row);
//};
//const addRows = (cart, Products) => {
//    cart.forEach(productsOrder => {
//        addRow(productsOrder, Products);
//    });
//};
//buildTable(javascriptCart, Products);

