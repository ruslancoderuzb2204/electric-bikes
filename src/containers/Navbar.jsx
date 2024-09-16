import { Link } from "react-router-dom";
import { Logo } from "../constants";
import { HambergerMenu } from "iconsax-react";
import { Drawer } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <section className="fixed bg-[#404040] py-3 inset-x-0 top-0 z-10  shadow-lg">
      <div className="container flex items-center  justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            className="cursor-pointer w-16 h-16 xs:h-8 xs:w-8 transform hover:scale-110 transition duration-300"
            src={Logo}
            alt="logo"
          />
        </Link>
        <div className="flex gap-6 md:gap-4 sm:gap-2 sm:hidden text-white sm:text-base text-xl">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            BOSH SAHIFA
          </a>
          <a
            href="#product"
            className="hover:text-blue-400 transition duration-300"
          >
            MAHSULOTLAR
          </a>
          <a
            href="#gallery"
            className="hover:text-blue-400 transition duration-300"
          >
            SURATLAR
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            BOG'LANISH
          </a>
        </div>
        <div className="hidden  sm:block">
          <HambergerMenu onClick={showDrawer} size="32" color="white" />
          <Drawer className="bg-red" onClose={onClose} open={open}>
            <div className="py-1 ">
              <a
                onClick={onClose} 
                href="#"
                className="hover:text-blue-400 text-white font-semibold py-2 transition duration-300"
              >
                BOSH SAHIFA
              </a>
            </div>
            <div className="py-1 ">
              <a
                onClick={onClose} 
                href="#product"
                className="hover:text-blue-400 text-white font-semibold py-2 transition duration-300"
              >
                MAHSULOTLAR
              </a>
            </div>
            <div className="py-1 ">
              <a
                onClick={onClose} 
                href="#gallery"
                className="hover:text-blue-400 text-white font-semibold py-2 transition duration-300"
              >
                SURATLAR
              </a>
            </div>
            <div className="py-1 ">
              <a
                onClick={onClose} 
                href="#contact"
                className="hover:text-blue-400 text-white font-semibold py-2 transition duration-300"
              >
                BOG'LANISH
              </a>
            </div>
          </Drawer>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
