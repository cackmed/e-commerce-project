// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderProducts from '../products/render-products.js';
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
        id: 'apple',
        quantity: 3
    };
    const apple = findById(fruits, lineItem.id);
    const expected = '<tr><td class="align-left">Red Apple</td><td>3</td><td>$1.00</td><td class="line-item-total">$3.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});