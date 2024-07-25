import React, { useState, useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";
import { HeroImg } from "../constants";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const images = [
    HeroImg,
    HeroImg,
    HeroImg,
    HeroImg,
    HeroImg,
    HeroImg
  ];

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 540);
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section id="gallery" className="container bg-[#404040]">
      <div className="pb-40 md:pb-24 sm:pb-16 xs:pb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-2xl font-semibold text-white">
            Gallery
          </h2>
          {/* <SecondaryButton text="See all ➡" /> */}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 md:pt-4 pt-10">
          {images.slice(0, showAll || !isSmallScreen ? images.length : 2).map((img, index) => (
            <div key={index} className="rounded bg-[#484A4D]">
              <img className="p-4 md:2" src={img} alt={`img-${index}`} />
            </div>
          ))}
        </div>
        {isSmallScreen && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white bg-[#68F750] px-4 py-2 rounded"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
