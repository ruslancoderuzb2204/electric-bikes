import { HeroImg } from "../constants";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <section className="container">
      <div
        className=" grid grid-cols-2 xs:grid-cols-1 gap-6 md:gap-4 sm:gap-2 xs:gap-1 justify-between items-center xs:pt-8 md:pt-20 pt-36"
        id="contact"
      >
        <div className="flex items-center justify-center">
          <img
            src={HeroImg}
            alt="Contact Illustration"
            className="rounded-lg "
          />
        </div>

        <div className="bg-white xs:mt-4 rounded p-8 lg:p-6 shadow-lg transition-all hover:shadow-xl">
          <h2 className="font-bold text-4xl md:text-3xl sm:text-2xl  pb-6 md:pb-4 sm:pb-2 text-[#333]">
            Biz bilan bog'laning
          </h2>

          <a
            className="flex items-center text-lg mb-4 text-gray-700 hover:text-blue-500 transition"
            target="_blank"
            href="https://yandex.uz/maps/org/temir_tulpor/7918105233/?ll=69.236932%2C41.191727&z=13"
          >
            <EnvironmentOutlined className="mr-2 text-lg" />
            Tashkent, Yangihayot tumani
          </a>

          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <a
                className="text-lg flex items-center hover:text-blue-500 transition"
                href="tel:+998958856565"
              >
                <PhoneOutlined className="mr-2 text-blue-500" />
                +998958856565
              </a>
              <a
                className="text-lg flex items-center hover:text-blue-500 transition"
                href="tel:+998983076565"
              >
                <PhoneOutlined className="mr-2 text-blue-500" />
                +998983076565
              </a>
              <a
                className="text-lg flex items-center hover:text-blue-500 transition"
                href="tel:+998555146565"
              >
                <PhoneOutlined className="mr-2 text-blue-500" />
                +998555146565
              </a>
            </div>

            <a
              className="text-lg flex items-center hover:text-blue-500 transition"
              href="mailto:Vosilkhoja@yandex.com"
            >
              <MailOutlined className="mr-2 text-orange-500" />
              Vosilkhoja@yandex.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
