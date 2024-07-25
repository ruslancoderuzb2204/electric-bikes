import { Link } from "react-router-dom";
import { Logo } from "../constants";

const Navbar = () => {
  return (
    <section className="container bg-[#484A4D]">
      <div className=" pt-10 flex items-center justify-between">
        <Link to="/">
          <img className="cursor-pointer sm:w-12" src={Logo} alt="logo" />
        </Link>
        <div className="gap-4 xs:gap-2 flex text-white text-base">
          <Link>Home</Link>
          <Link>Product</Link>
          <Link>Gallery</Link>
          <Link>Contact</Link>
        </div>
        <div className=" sm:hidden"></div>
      </div>
    </section>
  );
};

export default Navbar;
