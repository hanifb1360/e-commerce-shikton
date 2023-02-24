import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input
              type='checkbox'
              id='1'
              value={1}
              aria-label='shoes checkbox'
            />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input
              type='checkbox'
              id='2'
              value={1}
              aria-label='skirt checkbox'
            />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className='inputItem'>
            <input
              type='checkbox'
              id='3'
              value={1}
              aria-label='coat checkbox'
            />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={1000} aria-label='price range' />
            <span>1000</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              aria-label='sort by'
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              aria-label='sort by'
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src=''
          alt='It represents the cataloge with a visual element.'
        />
        <List />
      </div>
    </div>
  );
};

export default Products;
