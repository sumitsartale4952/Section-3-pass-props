import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
   const App =() =>
  {
    const Product = [
        
            {
         title: "Product 1",
         price: "10",
         description: "First Product",
            },
       
            {
         title: "Product 2",
         price: "20",
         description: "Second product"
            },
         
        ];
        
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product TITLE = "Product 1"
            PRICE="10" DESCRIPTION="First Product" />
            <Product TITLE="Product 2" PRICE="20" DESCRIPTION="Second Product" />
       
         </div>
    );
}

export default App;