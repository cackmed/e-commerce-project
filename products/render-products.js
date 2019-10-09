import { toUSD } from '../common/utils.js';
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
        const getCart = retriveLocalCart;

    }
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
export default renderProducts;