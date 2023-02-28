import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCarIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='product'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                onClick={(e) => setSelectedImg("img")}
                alt='this is the first of two representetives of the selected product'
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                onClick={(e) => setSelectedImg("img2")}
                alt='this is the first of two representetives of the selected product'
              />
            </div>
            <div className='mainImg'>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt='this is a representetive of the selected product'
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className='add'>
              <AddShoppingCarIcon />
              ADD TO CART
            </button>
            <div className='links'>
              <div className='item'>
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className='item'>
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className='info'>
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className='details'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;