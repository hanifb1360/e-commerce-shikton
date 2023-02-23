import React from "react";
import "./FeaturedProducts.scss";
import whiteshirt1 from "../../resources/images/featuredProducts-pics/white-shirt-1.jpg";
import whiteshirt2 from "../../resources/images/featuredProducts-pics/white-shirt-2.jpg";
import bluejacket1 from "../../resources/images/featuredProducts-pics/blue-jacket-1.jpg";
import bluejacket2 from "../../resources/images/featuredProducts-pics/blue-jacket-2.jpg";
import blackcoat1 from "../../resources/images/featuredProducts-pics/black-coat-1.jpg";
import blackcoat2 from "../../resources/images/featuredProducts-pics/black-coat-2.jpg";
import knitwear1 from "../../resources/images/featuredProducts-pics/knitwear-1.jpg";
import knitwear2 from "../../resources/images/featuredProducts-pics/knitwear-2.jpg";
import Card from "../Card/Card";

const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      img: whiteshirt1,
      img2: whiteshirt2,
      title: "White Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: bluejacket1,
      img2: bluejacket2,
      title: "Blue Jacket",
      isNew: true,
      oldPrice: 45,
      price: 25,
    },

    {
      id: 3,
      img: blackcoat1,
      img2: blackcoat2,
      title: "Black Coat",
      isNew: true,
      oldPrice: 32,
      price: 22,
    },

    {
      id: 4,
      img: knitwear1,
      img2: knitwear2,
      title: "Knitwear",
      isNew: true,
      oldPrice: 30,
      price: 20,
    },
  ];
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          necessitatibus. Incidunt assumenda non voluptas aliquid. Praesentium
          laborum quia molestiae eaque minima voluptatibus delectus, commodi
          accusamus deserunt qui et quibusdam voluptatem.
        </p>
      </div>
      <div className='bottom'>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
