import { HeroImg } from "../constants";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
const Contact = () => {
  return (
    <section
      className="container  grid grid-cols-2 xs:grid-cols-1 gap-6 md:gap-4 sm:gap-2 xs:gap-1  justify-between items-center"
      id="contact"
    >
      <div className=" flex items-center justify-center ">
        <img src={HeroImg} alt="img" />
      </div>
      <div className="bg-white xs:mt-4 rounded p-6 lg:p-4">
        <h2 className="font-semibold text-3xl md:text-2xl sm:text-xl pb-6 md:pb-4 sm:pb-2 text-[#404040]">
          Contact information
        </h2>
        <a className="cursor-pointer text-base " href="">
          <i className="fa-solid fa-location-dot"></i>
          Uzbekistan , Tashkent , Mirzo Ulug'bek
        </a>
        <div className="flex mt-4 md:flex-col md:items-start md:mt-2 xs:mt-1 items-center justify-between">
          <a className="cursor-pointer text-base " href="tel:+998908662204">
            <PhoneOutlined />
            +998908662204
          </a>
          <a className="cursor-pointer text-base " href="tel:+998971252004">
            <PhoneOutlined />
            +998971252004
          </a>
        </div>
        <div className="flex md:flex-col md:items-start items-center justify-between">
          <a className="cursor-pointer text-base " href="tel:+99890123456">
            <PhoneOutlined />
            +99890123456
          </a>
          <a className="cursor-pointer text-base " href="mailto:ruslantilovov2@gmail.com">
            <MailOutlined />
            ruslantilovov@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
