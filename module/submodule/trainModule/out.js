module.exports = function outProducts(manager,products) {
    products.forEach(product => {
        manager.addNamedEntityText('product', product, ['en'], [product])
        manager.addDocument('en', 'Which products are currently out of stock?', 'asking.products.out.all');
        manager.addDocument('en', 'What products are currently out of stock?', 'asking.products.out.all');

    });
}