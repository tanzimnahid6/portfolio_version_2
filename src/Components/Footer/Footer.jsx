import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="px-4 md:px-14 bg-black  h- py-8 relative ">
        <h1 className=" text-[40px] text-center font-bold text-red-800">
          Jubayer <span>Nahid</span>
        </h1>
        <ul className="flex justify-center gap-8 cursor-pointer text-white">
          <li><a  href="#home" >Home</a> </li>
          <li><a  href="#about" >About</a> </li>
          <li><a  href="#projects" >Projects</a> </li>
          <li><a  href="#contact" >Projects</a> </li>
          
          
        </ul>
        <div className="flex flex-row gap-4 justify-center md:hidden pt-4">
          <div className=" hover:scale-75 transition duration-200">
            <BiLogoFacebookCircle
              size={26}
              color="white"
            ></BiLogoFacebookCircle>
          </div>

          <div className=" hover:scale-75 transition duration-200">
            <FaLinkedinIn size={26} color="white"></FaLinkedinIn>
          </div>
          <div className=" hover:scale-75 transition duration-200">
            <FaGithub size={26} color="white"></FaGithub>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-200">
          © All rights reserved by Jubayer Nahid
        </p>
      </div>
    );
};

export default Footer;