import React from "react";
import  ReactDOM  from "react-dom";
import Product from "./Product";
import "./index.css";

ReactDOM.render(
 
  <>
  <h1 className="heading_style">My Demo Shop </h1>
  <Product 
  title="Product 1"
  price= "10"
  description="First Product"
  />
  <Product 
  title="Product 2"
  price= "20"
  description="second Product"
  />
   </>,
  document.getElementById('root')
 );
/*   
         <Product>
            
         TITLE={Product[1].TITLE}
         PRICE= {Product[1].PRICE}
         DESCRIPTION={Product[1].DESCRIPTION}
         </Product>
            
        
         
         <Product>
            
         TITLE={Product[1].TITLE}
         PRICE= {Product[1].PRICE}
         DESCRIPTION={Product[1].DESCRIPTION}
         </Product>
      */
  

