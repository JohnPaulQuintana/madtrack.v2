module.exports = function rejectedProducts(manager,products) {
    products.forEach(product => {
        manager.addNamedEntityText('product', product, ['en'], [product])
        manager.addDocument('en', 'show all rejected products?', 'asking.products.rejected.all');
        manager.addDocument('en', 'display all rejected products?', 'asking.products.rejected.all');
        manager.addDocument('en', 'how many rejected products do we have?', 'asking.products.rejected.all');

       
    });
}