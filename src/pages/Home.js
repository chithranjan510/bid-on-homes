import React from 'react';

import classes from './Home.module.css';

import ProductList from '../components/ProductList';

const products = [
  {
    name: 'abcd',
    description: 'good one',
    price: 99,
    quantity: 2,
    imageUrl: 'first.png',
  },
  {
    name: 'abcd',
    description: 'good one',
    price: 99,
    quantity: 2,
    imageUrl: 'first.png',
  },
  {
    name: 'abcd',
    description: 'good one',
    price: 99,
    quantity: 2,
    imageUrl: 'first.png',
  },
];

const Home = () => {
  const productList = products.map((product) => (
    <ProductList key={Math.random().toString()} product={product} />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes['add-btn']}>
          <button>Add Product</button>
        </div>
        <div className={classes.search}>
          <input type='text' placeholder='Name' />
            <input type='number' placeholder='Price' step='0.1' />
            <input type='numebr' placeholder='Quantity' />
            <button>Search</button>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
