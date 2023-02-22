import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Welcome to SHIKTON, your go-to online fashion destination! We are a
            fashion webshop that offers a carefully curated selection of trendy
            and stylish clothing and accessories for men and women. Our team of
            fashion experts is always on the lookout for the latest trends and
            designs, ensuring that we bring you the most fashionable pieces from
            the hottest brands. Whether you're looking for a chic dress for a
            special occasion, a statement accessory to elevate your outfit, or a
            casual everyday look, we've got you covered.
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            We'd love to hear from you! Our team is dedicated to providing you
            with the best possible shopping experience, and we welcome any
            feedback or questions you may have. If you have any inquiries about
            our products, orders, shipping, or returns, please don't hesitate to
            reach out to our customer service team. You can contact us via
            email, phone, or live chat, and we'll do our best to respond to your
            inquiry as soon as possible.
          </span>
          <span>Email: customerservice@shikton.com</span>
          <span>Phone: +1 (555) 123-4567</span>
        </div>
      </div>
      <div className='buttom'>
        <div className='left'>
          <span className='logo'>SHIKTON</span>
          <span className='copyright'>
            © Copyright 2023, All Rights Reserved
          </span>
        </div>
        <div className='right'>
          <img
            src='/img/payment.png'
            alt='A list of logos for payment companies including Visa, Mastercard, PayPal, American Express, and Stripe. The logos feature various designs, colors, and typography to represent each company."'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
