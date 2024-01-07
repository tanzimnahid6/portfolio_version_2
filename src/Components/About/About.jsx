import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }, []);
  const downloadPdf = () => {
    console.log("Clicked");
    fetch("./resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "./resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <section
      id="about"
      className="py-8 bg-gradient-to-b from-red-950 to-black  max-h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-14">
        <div data-aos="fade-right" className="order-last md:order-first">
          <div className="grid grid-cols-3 gap-4  p-4">
            <div className="hover:scale-125 transition duration-200">
              <img src="./tailwind.png" alt="" />
            </div>
            <div className="hover:scale-125 transition duration-200">
              <img src="./js.png" alt="" />
            </div>
            <div className="hover:scale-125 transition duration-200">
              <img src="./git.png" alt="" />
            </div>
            <div className="col-span-2 hover:scale-105 transition duration-200">
              <img src="./react.png" alt="" />
            </div>
            <div className="...">
              <img className="scale-125 mt-12" src="./mongodb.png" alt="" />
            </div>
            <div className="col-span-2...">
              <img src="./firebase.png" alt="" />
            </div>
            <div className="mt-4 scale-105 ">
              <img src="./bootstrape.png" alt="" />
            </div>
            <div className="hover:scale-105 transition duration-200">
              <img src="./next.png" alt="" />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 order-1 ">
          <div className=" text-white md:pl-16">
            <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold">
              About Me
            </h1>
            <p className="text-2xl md:text-4xl mt-8 font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              I am a Front-end Developer with over <br></br> 1 years of
              experience.
            </p>
            <p className="leading-7 my-8">
              As a MERN stack developer, I possess expertise in developing
              full-stack web applications using MongoDB, Express.js, React.js,
              and Node.js. With a strong command of these technologies, I have
              the ability to design and implement robust and scalable solutions
              for various business needs. I am proficient in creating RESTful
              APIs, building interactive user interfaces with React, handling
              data storage and retrieval with MongoDB, and developing
              server-side logic with Node.js and Express.js. I am experienced in
              working with front-end frameworks, version control systems, and
              deploying applications to cloud platforms.
            </p>
            <div className="flex justify-start gap-16">
              <a
                data-aos="fade-right"
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-950 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-900 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-red-950"
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
                <span
                  onClick={downloadPdf}
                  className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
                >
                  Resume
                </span>
              </a>
              <a
                data-aos="fade-left"
                href="#_"
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-950 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-900 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-red-950"
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
                  Portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
