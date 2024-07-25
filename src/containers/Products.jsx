import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Carousel } from "antd";

const contentStyle = {
  color: "#fff",
  margin: "0 10px",
};

const Products = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [dots, setDots] = useState(false);
  const [arrows, setArrows] = useState(true);

  const updateCarouselSettings = () => {
    if (window.innerWidth < 579) {
      setSlidesToShow(1);
      setDots(true);
      setArrows(false);
    } else if (window.innerWidth < 900) {
      setSlidesToShow(2);
      setDots(false);
      setArrows(true);
    } else {
      setSlidesToShow(3);
      setDots(false);
      setArrows(true);
    }
  };

  useEffect(() => {
    updateCarouselSettings();
    window.addEventListener("resize", updateCarouselSettings);
    return () => window.removeEventListener("resize", updateCarouselSettings);
  }, []);

  return (
    <section className="container bg-[#404040] py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-2xl xs:text-xl font-semibold text-white">
          HIGH QUALITY PRODUCTS
        </h2>
        {/* <SecondaryButton text="See all ➡" /> */}
      </div>

      <Carousel
        swipeToSlide={true}
        infinite={false}
        dots={dots}
        className="custom-carousel"
        arrows={arrows}
        slidesToScroll={1}
        slidesToShow={slidesToShow}
      >
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
        <ProductCard contentStyle={contentStyle} />
      </Carousel>
    </section>
  );
};

export default Products;
