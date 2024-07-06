"use client";

import { useEffect, useState } from "react";
import "./hero.scss";
import Image from "next/image";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      text: "Annunaki...connecting Africa!",
      img: "/assets/product1.jpg",
    },
    {
      id: 2,
      text: "Near zero exchange rate when you pay with Annunaki Coin.",
      img: "/assets/product2.jpg",
    },
    {
      id: 3,
      text: "Near zero exchange rate when you pay with Annunaki Coin.",
      img: "/assets/product3.jpg",
    },
    {
      id: 4,
      text: "Near zero exchange rate when you pay with Annunaki Coin.",
      img: "/assets/product4.jpg",
    },
    {
      id: 5,
      text: "Near zero exchange rate when you pay with Annunaki Coin.",
      img: "/assets/product5.jpg",
    },
    {
      id: 6,
      text: "Near zero exchange rate when you pay with Annunaki Coin.",
      img: "/assets/product6.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="hero">
      <div className="category">
        <h2>CATEGORIES</h2>
        <span>Coming Soon!</span>
      </div>
      <div className="carousel">
        <Image
          src={data[currentIndex].img}
          alt=""
          fill
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="advert">
      <h2>ADVERTS</h2>
      <span>Coming Soon!</span>
      </div>
    </div>
  );
};

export default Hero;
