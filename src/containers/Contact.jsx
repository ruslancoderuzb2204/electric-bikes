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
        <a className="cursor-pointer text-base " href="https://yandex.uz/maps/org/temir_tulpor/7918105233/?ll=69.236932%2C41.191727&z=13">
          <i className="fa-solid fa-location-dot"></i>
          Tashkent , Yangihayot tumani
        </a>
        <div className="flex mt-4 md:flex-col md:items-start md:mt-2 xs:mt-1 items-center justify-between">
          <a className="cursor-pointer text-base " href="tel:+998958856565">
            <PhoneOutlined />
            +998958856565
          </a>
          <a className="cursor-pointer text-base " href="tel:+998983076565">
            <PhoneOutlined />
            +998983076565
          </a>
        </div>
        <div className="flex md:flex-col md:items-start items-center justify-between">
          <a className="cursor-pointer text-base " href="tel:+998555146565">
            <PhoneOutlined />
            +998555146565
          </a>
          <a className="cursor-pointer text-base " href="mailto:Vosilkhoja@yandex.com">
            <MailOutlined />
            Vosilkhoja@yandex.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
