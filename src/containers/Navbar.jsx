import { Link } from "react-router-dom";
import { Logo } from "../constants";

const Navbar = () => {
  return (
    <section className="fixed inset-x-0 top-0 z-10 bg-gradient-to-r from-[#6a6a6a] via-[#505050] to-[#694444] shadow-lg">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            className="cursor-pointer w-16 h-16 transform hover:scale-110 transition duration-300"
            src={Logo}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 md:gap-4 sm:gap-2 text-white sm:text-base text-xl">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Home
          </a>
          <a
            href="#product"
            className="hover:text-blue-400 transition duration-300"
          >
            Product
          </a>
          <a
            href="#gallery"
            className="hover:text-blue-400 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
