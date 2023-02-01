import React from 'react';
import { useDispatch } from 'react-redux';
import { productAction } from '../store/product-slice';

import classes from './ProductList.module.css';

const ProductList = (props) => {
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(productAction.remove(props.product.id));
  };

  const editProductHandler = () => {
    props.edit(true, props.product);
  };

  return (
    <tr className={classes.list}>
      <td>{props.product.name}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price}</td>
      <td>{props.product.quantity}</td>
      <td>{props.product.imageUrl}</td>
      <td>
        <button onClick={editProductHandler}>Edit</button>
        <button onClick={removeProductHandler}>Remove</button>
      </td>
    </tr>
  );
};

export default ProductList;
