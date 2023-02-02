import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classes from './Home.module.css';

import ProductList from '../components/ProductList';
import EditProduct from '../components/EditProduct';

const Home = () => {
  const products = useSelector((state) => state.product.products);
  const [editProduct, setEditproduct] = useState({ show: false, product: {} });
  const [searchAndFilterInput, setSearchAndFilterInput] = useState({
    name: '',
    price: '',
    quantity: '',
  });
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const addProductHandler = () => {
    navigate('/add-product');
  };

  const editProductHandler = (show, product) => {
    setEditproduct({ show: show, product: product });
  };

  const productList = products.map((product) => (
    <ProductList
      key={Math.random().toString()}
      product={product}
      edit={editProductHandler}
      searchAndFilterInputValue={searchAndFilterInput}
    />
  ));

  const searchAndFilterHandler = () => {
    // console.log(nameRef.current.value, priceRef.current.value, quantityRef.current.value)
    setSearchAndFilterInput({
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes['add-btn']}>
          <button onClick={addProductHandler}>Add Product</button>
        </div>
        <div className={classes.search}>
          <input
            type='text'
            placeholder='Search by name'
            onChange={searchAndFilterHandler}
            ref={nameRef}
          />
          <input
            type='text'
            placeholder='Filter by price'
            onChange={searchAndFilterHandler}
            ref={priceRef}
          />
          <input
            type='text'
            placeholder='Filter by quantity'
            onChange={searchAndFilterHandler}
            ref={quantityRef}
          />
        </div>
      </div>
      <div className={classes.form}>
        {editProduct.show && (
          <EditProduct
            edit={editProductHandler}
            product={editProduct.product}
          />
        )}
      </div>
      {products.length > 0 ? (
        <table className={classes['list-container']}>
          <thead>
            <tr className={classes.title}>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
      ) : (
        <p className={classes.message}>
          Your product list is empty. Please add product by clicking on
          <b> "Add Product"</b> button
        </p>
      )}
    </div>
  );
};

export default Home;
