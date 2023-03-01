import React from 'react';

const Product = (props) =>
 {
    return (
        <article className="Product">
            <h2>{props.title}</h2>
            <p className="PRICE">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
export default Product;