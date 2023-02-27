import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import bg from "../../resources/images/bg-products.png";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className='inputItem' key={item.id}>
              <input
                type='checkbox'
                id={item.id}
                value={item.id}
                aria-label='shoes checkbox'
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              aria-label='price range'
            />
            <span>{maxPrice}</span>
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
              onChange={(e) => setSort("asc")}
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
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImg'
          src={bg}
          alt='It represents the cataloge with a visual element.'
        />
        <List catId={catId} maxPricePrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
