import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import { HeroImg } from "../constants";

const Hero = () => {
  return (
    <div className="container bg-[#484A4D]">
      <div className="  flex items-center xs:flex-col justify-between pt-20">
        <div className="w-1/2 md:w-full pb-4 text-white">
          <p className="opacity-50 xs:text-center md:text-base sm:text-sm text-xl">
            Company slogan
          </p>
          <h2 className="text-6xl xs:text-center lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold md:my-2 sm:my-1 my-4">
            TEMIR TULPOR
          </h2>
          <p className="opacity-70 xs:text-center md:text-sm text-base">
          Temir Tulpor – Qulay narxda sifatli skuterlar! 100+ model, jahon bozorida tan olingan Xitoy mahsulotlari. Farzandingiz va o'zingiz uchun ajoyib tanlov! Bugun qo'ng'iroq qiling va o'z skuterga ega bo'ling!
          </p>
          <Link target="_blank" to="https://t.me//skuter_arenda">
            <PrimaryButton text="Order now" />
          </Link>
        </div>
        <div className="sm:w-2/3 ">
          <img
            className="animate-bounceUpDown flex items-center justify-center "
            src={HeroImg}
            alt="bike image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
