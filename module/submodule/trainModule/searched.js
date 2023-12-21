module.exports = function searchProducts(manager,products) {

    // Function to check and convert product names to arrays
    const convertToArrays = (item) => {
        if (typeof item === 'string' && item.includes(' ')) {
            console.log(item.split(' '));
            // Convert to array if the product name has more than one word
            return item.split(' ');
          }
          return [item];
    };

    products.forEach(product => {
        const shortNames = convertToArrays(product);
        
        // Add the full product name as a named entity
        manager.addNamedEntityText('product', product, ['en'], [product.toLowerCase(), ...shortNames]);

         // Add documents using short names for accuracy in questions
        
        shortNames.forEach(shortName => {
            // manager.addNamedEntityText('product', product, ['en'], [product.toLowerCase(), shortNames])
            manager.addDocument("en", `how many %product% do we have?`, "asking.products.search", { product: shortName.toLowerCase() });
            manager.addDocument("en", `give me the list of %product% do we have?`, "asking.products.search", { product: shortName.toLowerCase() });
            
        });

        
        
    });


    
}