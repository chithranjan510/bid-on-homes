import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import classes from './EditProduct.module.css';

import { productAction } from '../store/product-slice';

const EditProduct = (props) => {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const imageRef = useRef();

  const editProductHandler = (e) => {
    e.preventDefault();

    const product = {
      id: props.product.id,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: (+priceRef.current.value).toFixed(2),
      quantity: quantityRef.current.value,
      imageUrl: imageRef.current.value,
    };

    dispatch(productAction.edit(product));

    props.edit(false, {});
  };

  const exitEditProductHandler = () => {
    props.edit(false, {});
  };

  useEffect(() => {
    nameRef.current.value = props.product.name;
    descriptionRef.current.value = props.product.description;
    priceRef.current.value = props.product.price;
    quantityRef.current.value = props.product.quantity;
    imageRef.current.value = props.product.imageUrl;
  });

  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={exitEditProductHandler}></div>
      <form className={classes.form} onSubmit={editProductHandler}>
        <input type='text' placeholder='Name' ref={nameRef} required />
        <textarea placeholder='Description' ref={descriptionRef} />
        <input
          type='number'
          placeholder='Price'
          min='0'
          step='0.01'
          ref={priceRef}
          required
        />
        <input
          type='number'
          placeholder='Quantity'
          min='0'
          step='1'
          ref={quantityRef}
          required
        />
        <input type='text' placeholder='Image Url' ref={imageRef} />
        <div className={classes.button}>
          <button type='submit'>Edit Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
