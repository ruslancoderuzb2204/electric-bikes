import { Link } from "react-router-dom";
import { Logo } from "../constants";

const Navbar = () => {
  return (
    <section className="fixed inset-x-0 top-0 z-10 bg-[#484A4D]">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img className="cursor-pointer sm:w-12" src={Logo} alt="logo" />
        </Link>
        <div className="gap-4 xs:gap-2 flex text-white text-2xl md:text-xl">
          <a href="#">Home</a>
          <a href="#product">Product</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="sm:hidden"></div>
      </div>
    </section>
  );
};

export default Navbar;
