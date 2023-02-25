import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCarIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import img1 from "../../resources/images/featuredProducts-images/white-shirt-1.jpg";
import img2 from "../../resources/images/featuredProducts-images/white-shirt-2.jpg";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [img1, img2];
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img
            src={images[0]}
            onClick={(e) => setSelectedImg(0)}
            alt='this is the first of two representetives of the selected product'
          />
          <img
            src={images[1]}
            onClick={(e) => setSelectedImg(1)}
            alt='this is the first of two representetives of the selected product'
          />
        </div>
        <div className='mainImg'>
          <img
            src={images[selectedImg]}
            alt='this is a representetive of the selected product'
          />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$200</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rem.
          Eligendi maxime provident dicta excepturi nemo mollitia. Similique
          ratione saepe esse labore exercitationem eos ea voluptatibus rem,
          odio, amet distinctio?
        </p>
        <div className='quantity'>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
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
    </div>
  );
};

export default Product;
