import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classes from './AddProduct.module.css';

import { productAction } from '../store/product-slice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const imageRef = useRef();

  const addProductHandler = (e) => {
    e.preventDefault();

    const product = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: (+priceRef.current.value).toFixed(2),
      quantity: quantityRef.current.value,
      imageUrl: imageRef.current.value,
    };

    dispatch(productAction.add(product));

    navigate('/home');
  };

  return (
    <form className={classes.form} onSubmit={addProductHandler}>
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
        <button type='submit'>Add Product</button>
      </div>
    </form>
  );
};

export default AddProduct;
