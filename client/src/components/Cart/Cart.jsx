import React from "react";
import "./Cart.scss";
import whiteshirt1 from "../../resources/images/featuredProducts-images/white-shirt-1.jpg";
import whiteshirt2 from "../../resources/images/featuredProducts-images/white-shirt-2.jpg";
import bluejacket1 from "../../resources/images/featuredProducts-images/blue-jacket-1.jpg";
import bluejacket2 from "../../resources/images/featuredProducts-images/blue-jacket-2.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: whiteshirt1,
      img2: whiteshirt2,
      title: "White Shirt",
      desc: "This white shirt ",
      isNew: true,
      oldPrice: 49,
      price: 12,
    },

    {
      id: 2,
      img: bluejacket1,
      img2: bluejacket2,
      title: "Blue Jacket",
      desc: "This jacket is made of ",
      isNew: true,
      oldPrice: 65,
      price: 25,
    },
  ];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {/* The optional chaining operator ?. checks whether data is null or undefined */}
      {data?.map((item) => (
        <div className='item' key={item.id}>
          <img
            src={item.img}
            alt='it represents the product that is chosen to be in the cart'
          />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
