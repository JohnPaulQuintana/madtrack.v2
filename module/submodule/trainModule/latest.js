module.exports = function addLatest(manager){
    // latest products
    manager.addDocument("en", "What are the newest product?", "asking.products.latest");
    manager.addDocument("en", "What are the latest product?", "asking.products.latest");
    manager.addDocument("en", "how many latest products do we have?", "asking.products.latest");
    manager.addDocument("en", "how many newest products do we have?", "asking.products.latest");
}