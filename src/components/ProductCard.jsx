import { HeroImg } from "../constants";

const ProductCard = ({ contentStyle }) => {
  return (
    <div style={contentStyle} className="pt-10">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <img className="bg-[#484A4D] rounded p-4" src={HeroImg} alt="img" />
        </div>
        <div className="flex justify-between pt-4 pb-1 items-center">
          <h4 className="text-xl font-semibold text-white">VanMoof S5</h4>
          <span className="font-semibold text-xl text-[#68F750]">250$</span>
        </div>
        <p className="text-[#8996A6] pb-10 font-medium">
          Beautifully uncomplicated
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
