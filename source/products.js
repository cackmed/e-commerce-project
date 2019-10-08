import Products from './productItems.js';
import renderProducts from './render-products.js';

const list = document.getElementById('products');

for (let i = 0; i < Products.length; i++) {
    let products = Products[i];
    const dom = renderProducts(products);
    list.appendChild(dom);

}
