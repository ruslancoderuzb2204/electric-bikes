import React, { useState, useEffect } from "react";
import SecondaryButton from "../components/SecondaryButton";
import { HeroImg, Img1, Img2 } from "../constants";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const images = [
    "https://bd.gaadicdn.com/processedimages/honda/activa-6g/source/activa-6g65e80a7b08ce2.jpg",
    Img1,
    "https://solaremobility.com/616-medium_default/electric-scooter-50cc-2000w-72v.jpg",
    Img2,
    "https://shop.yamaha-motor-india.com/cdn/shop/products/copper_600x.png?v=1676869087",
    "https://www.scooter.co.uk/new_scooters/new/82-2.jpg",
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
      <div className="md:pb-24 sm:pb-16 xs:pb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-2xl font-semibold text-white">
            Suratlar
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 md:pt-4 pt-10">
          {images
            .slice(0, showAll || !isSmallScreen ? images.length : 2)
            .map((img, index) => (
              <div key={index} className="rounded-lg p-2 bg-[#484A4D] h-full">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={img}
                  alt={`img-${index}`}
                />
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
