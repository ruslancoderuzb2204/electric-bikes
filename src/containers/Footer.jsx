import { Link } from "react-router-dom";
import {
  CopyrightOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
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
            <Link to="/">Product</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/selling">Selling</Link>
          </div>
          <div className="flex sm:grid sm:grid-cols-3 sm:justify-start items-center sm:space-x-0 sm:gap-2 space-x-4 text-white mb-4 md:mb-0">
            <Link target="_blank" to="mailto:ruslantilovov2@gmail.com">
              <MailOutlined className="text-xl flex items-center justify-center cursor-pointer" />
            </Link>
            <Link target="_blank" to="tel:+998908662204">
              <PhoneOutlined className="text-xl flex items-center justify-center cursor-pointer" />
            </Link>
            <Link target="_blank" to="https://instagram.com/_rus_lan_2204">
              <InstagramOutlined className="text-xl flex items-center justify-center cursor-pointer" />
            </Link>
            <TwitterOutlined className="text-xl flex items-center justify-center cursor-pointer" />
            <Link target="_blank" to="https://t.me//ruslantilavov">
              <i className="fa-brands text-xl fa-telegram"></i>
            </Link>
            <FacebookOutlined className="text-xl flex items-center justify-center cursor-pointer" />
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
