// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderProducts from '../products/render-products.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
import renderLineItem from '../shoping-cart/render-line-item.js';
import Products from '../data/productItems.js';
import cart from '../data/carts.js';

const test = QUnit.test;

QUnit.module('Renders Products');

test('randers a product', assert => {
    //Arrange
    // Set up your parameters and expectations
    const productExample1 = {
        id: 'placeholder1',
        name: 'example Placeholder',
        image: 'placeholder1.png',
        description: 'This is where a description will go',
        category: 'placeholder',
        price: 1.00,
        cost: 0.25,

    };
    const expected = '<li class="placeholder" title="This is where a description will go"><h3>example Placeholder</h3><img src="../assets/placeholder1.png" alt="example Placeholder image "><p class="price">$1.00<button value="placeholder1">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderProducts(productExample1);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
test('renders a line item', assert => {
    // arrange
    const lineItem = {
        id: 'ironDagger',
        quantity: 3
    };
    const ironDagger = findById(Products, lineItem.id);
    const expected = '<tr><td class="align-left">Iron Dagger</td><td>3</td><td>$10.00</td><td class="line-item-total">$30.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, ironDagger);
    const html = dom.outerHTML;
    
    // assert
    assert.deepEqual(html, expected);
});
test('Finds a product by id from product Array', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'ironDagger';
    const expected = 'Iron Dagger';
    //Act 
    const findProduct = findById(Products, id);
    //Assert
    assert.equal(findProduct.name, expected);
});
test('finds the total price of the line', assert => {
    //Arrange
    const quantity = 5;
    const price = 1.00;
    const expected = 5.00;
    // Set up your parameters and expectations    
    //Act 
    const lineTotal = calcLineTotal(quantity, price);
    //Assert
    assert.equal(lineTotal, expected);
});
test('finds the total price of the whole order', assert => {
    //Arrange
    const expected = 1145.00;
    // Set up your parameters and expectations    
    //Act 
    const orderTotal = calcOrderTotal(cart, Products);
    //Assert
    assert.equal(orderTotal, expected);
});