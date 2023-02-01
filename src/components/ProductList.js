import React from 'react';

import classes from './ProductList.module.css';

const ProductList = (props) => {
  return (
    <tr className={classes.list}>
      <td>{props.product.name}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>{props.product.quantity}</td>
      <td>{props.product.imageUrl}</td>
      <td>
        <button>Edit</button>
        <button>Remove</button>
      </td>
    </tr>
  );
};

export default ProductList;
