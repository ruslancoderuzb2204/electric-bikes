const ProductCard = ({ contentStyle, product }) => {
  return (
    <div style={contentStyle} className="pt-10 xs:pt-3 mx-2">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <img
            className="bg-[#484A4D] w-full h-[450px] md:h-[400px] xs:h-[350px]  rounded p-4"
            src={product.img}
            alt="img"
          />
        </div>
        <div className="flex justify-between pt-4 pb-1 items-center">
          <h4 className="text-xl font-semibold text-white">{product.name}</h4>
          <span className="font-semibold text-xl text-[#68F750]">
            {product.price}
          </span>
        </div>
        <p className="text-[#8996A6] pb-10 font-medium">
          Beautifully uncomplicated
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
