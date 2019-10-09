import cart from '../data/carts.js';
import fruits from '../data/fruits.js';
import { findByID, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from '.renderLineItem.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0 < cart.length; i++) {
    const lineItem = cart[i];
    const fruit = findByID(fruits, lineItem.id);
    const dom = renderLineItem(lineItem, fruit);

    tbody.appendChild(dom);
}