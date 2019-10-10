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
orderTotalCell.textContent = toUSD(calcOrderTotal(cart, Products));

const addRow = (productsOrder, Products) => {
    const orderProduct = getById(productsOrder.id, Products);
    const row = renderLineItem(orderProduct, productsOrder);

    tbody.appendChild(row);
};
const addRows = (cart, Products) => {
    cart.forEach(productsOrder => {
        addRow(productsOrder, Products);
    });
};

const javascriptCart = JSON.parse(localStorage.getItem(localCartData));
buildTable(javascriptCart, Products);

//for (let i = 0; i < cart.length; i++) {
//    const lineItem = cart[i];
//    const weapon = findById(Products, lineItem.id);
//    const dom = renderLineItem(lineItem, weapon);
//
//    tbody.appendChild(dom);
//}