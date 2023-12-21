module.exports = function rejectedProducts(manager,products) {
    products.forEach(product => {
        manager.addNamedEntityText('product', product, ['en'], [product])
        manager.addDocument('en', 'how many rejected do we have?', 'asking.products.rejected.all');

       
    });
}