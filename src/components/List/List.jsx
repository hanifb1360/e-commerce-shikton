import React from "react";
import "./List.scss";
import whiteshirt1 from "../../resources/images/featuredProducts-images/white-shirt-1.jpg";
import whiteshirt2 from "../../resources/images/featuredProducts-images/white-shirt-2.jpg";
import bluejacket1 from "../../resources/images/featuredProducts-images/blue-jacket-1.jpg";
import bluejacket2 from "../../resources/images/featuredProducts-images/blue-jacket-2.jpg";
import blackcoat1 from "../../resources/images/featuredProducts-images/black-coat-1.jpg";
import blackcoat2 from "../../resources/images/featuredProducts-images/black-coat-2.jpg";
import knitwear1 from "../../resources/images/featuredProducts-images/knitwear-1.jpg";
import knitwear2 from "../../resources/images/featuredProducts-images/knitwear-2.jpg";
import Card from "../Card/Card";

const List = () => {
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
    {
      id: 5,
      img: whiteshirt1,
      img2: whiteshirt2,
      title: "gert",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 6,
      img: bluejacket1,
      img2: bluejacket2,
      title: "kert",
      isNew: true,
      oldPrice: 45,
      price: 25,
    },

    {
      id: 7,
      img: blackcoat1,
      img2: blackcoat2,
      title: "wert",
      isNew: true,
      oldPrice: 32,
      price: 22,
    },

    {
      id: 8,
      img: knitwear1,
      img2: knitwear2,
      title: "zert",
      isNew: true,
      oldPrice: 30,
      price: 20,
    },
  ];
  return (
    <div className='list'>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
