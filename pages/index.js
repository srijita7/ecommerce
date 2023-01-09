import React from 'react'
import {HeroBanner} from '../components/HeroBanner';

const Home = () => {
  return (
    <>
    HeroBanner
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Shoes of many categories</p>
    </div>
    <div className='products-container'>
      {['Product 1', 'Product 2'].map(
        (product) => product)}
    </div>
    Footer
    </>
  )
}

export default Home;
