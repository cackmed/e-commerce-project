
import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, fruit) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = fruit.name;
    tr.appendChild(nameCell);

    const priceCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
}