import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../../src/assets/banner.jpg'
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div id="home">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 px-4 md:px-14  bg-gradient-to-b from-black to-red-950  max-h-full items-center justify-between w-full gap-4 pb-8">
        <div className="md:mt-12">
          <div className=" text-white ">
            <h1 className="text-[40px] font-bold">Hello,I am </h1>
            <p className=" text-[40px] md:text-[55px] font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Aljubayer Hossain
            </p>
            <TypeAnimation
              sequence={[
               
                `I Am Dedicated   Web Developer`,
                1000, 
                "I Am Dedicated Font End Developer",
                1000,
                "I Am Dedicated React Developer",
                1000,
                "I Am Dedicated javaScript Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[20px] md:text-[32px]"
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
            <p className="text-[20px] mt-8 ">
              Highly skilled MERN stack developer with a strong passion for
              creating engaging and interactive web application. Seeking a
              challenging role where I can leverage my expertise in front-end
              development and contribute to the success of development team .
            </p>
            <div className="mt-12">
              <a
                data-aos="fade-up"
                href="#contact"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-red-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Contact
                </span>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="flex justify-center items-center">
          <img
            className="md:w-[380px] md:h-[380px] w-[300px] h-[300px]  rounded-full  bg-gradient-to-r p-[6px] from-[#fff] via-[#e02121] to-[#000000] object-cover"
            src={banner} 
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
