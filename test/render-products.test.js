// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderProducts from '../source/render-products.js';
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
