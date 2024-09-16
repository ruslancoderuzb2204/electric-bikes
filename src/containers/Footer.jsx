import { Link } from "react-router-dom";
import {
  CopyrightOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Logo } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#484A4D] py-8 sm:py-4">
      <div className="container ">
        <div className="flex  items-center  justify-between border-b-2 pb-12 sm:pb-4 border-[#8996A6]">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/">
              <img className="cursor-pointer" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="flex sm:grid sm:grid-cols-2 sm:space-x-0 sm:gap-2 space-x-6 text-white mb-4 md:mb-0">
            <a className="hover:underline hover:text-blue-400" href="#product">
              Mahsulotlar
            </a>
            <a className="hover:underline hover:text-blue-400" href="#gallery">
              Suratlar
            </a>
            <a className="hover:underline hover:text-blue-400" href="#contact">
              Bog'lanish
            </a>
          </div>
          <div className="flex sm:grid sm:grid-cols-3 sm:justify-start items-center sm:space-x-0 sm:gap-2 space-x-4 text-white mb-4 md:mb-0">
            <Link target="_blank" to="mailto:Vosilkhoja@yandex.com">
              <MailOutlined className="text-xl hover:scale-125 hover:text-blue-400 transition-all duration-300 flex items-center justify-center cursor-pointer" />
            </Link>
            <Link target="_blank" to="tel:+998958856565">
              <PhoneOutlined className="text-xl hover:scale-125 hover:text-blue-400 transition-all duration-300 flex items-center justify-center cursor-pointer" />
            </Link>
            <Link target="_blank" to="https://instagram.com/temirtulpor">
              <InstagramOutlined className="text-xl hover:scale-125 hover:text-blue-400 transition-all duration-300 flex items-center justify-center cursor-pointer" />
            </Link>
            <Link target="_blank" to="https://t.me//temirtulpor">
              <i className="fa-brands text-xl hover:scale-125 hover:text-blue-400 transition-all duration-300 fa-telegram"></i>
            </Link>
            <Link target="_blank" to="">
              <TikTokOutlined className="text-xl hover:scale-125 hover:text-blue-400 transition-all duration-300 flex items-center justify-center cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" opacity-50 text-center text-white mt-4">
        <CopyrightOutlined /> Copyright 2024, all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
