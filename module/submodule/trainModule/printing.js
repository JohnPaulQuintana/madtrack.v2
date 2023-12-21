module.exports = function addPrinting(manager, products) {
  // manager.addNamedEntityText('product', product, ['en'], [product])
  manager.addDocument(
    "en",
    "print all the available products",
    "command.print.available"
  );

  // Function to check and convert product names to arrays
  const convertToArrays = (item) => {
    if (typeof item === 'string' && item.includes(' ')) {
        console.log(item.split(' '));
        // Convert to array if the product name has more than one word
        return item.split(' ');
      }
      return [item];
};

  //if they select a products
  products.forEach((product) => {
    const shortNames = convertToArrays(product);
    // Add the full product name as a named entity
    manager.addNamedEntityText('product', product, ['en'], [product.toLowerCase(), ...shortNames]);
    shortNames.forEach(shortName => {
      // manager.addNamedEntityText('product', product, ['en'], [product.toLowerCase(), shortNames])
      manager.addDocument(
        "en",
        `Print all the available %product% that we have?`,
        "command.print.available.product",
        { product: shortName.toLowerCase() }
      );
  
  
      // Example 7
      manager.addDocument(
        "en",
        `I need a printed list of all the %product%.`,
        "command.print.available.product",
        { product: shortName.toLowerCase() }
      );
  
  });
   
  });
};
