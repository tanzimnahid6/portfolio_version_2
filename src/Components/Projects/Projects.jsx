import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../assets/project11.jpg";
import img2 from "../../assets/project12.jpg";
import img3 from "../../assets/project13.jpg";
import img4 from "../../assets/project14.jpg";

import img5 from "../../assets/project21.jpg";
import img6 from "../../assets/project22.jpg";
import img7 from "../../assets/project23.jpg";
import img8 from "../../assets/project31.jpg";
import img9 from "../../assets/project32.jpg";
import img10 from "../../assets/project33.jpg";
import img11 from "../../assets/project34.jpg";
import { Link } from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div
      className="py-16 bg-gradient-to-b from-black to-red-950 px-2 "
      id="projects"
    >
      <h1 className="text-4xl text-center text-white mb-10 font-bold">
        My Projects:
      </h1>
      {/* 1st project */}
      <div className="mt-0 grid md:grid-cols-2 grid-cols-1 px-4 md:px-14  gap-10">
        {" "}
        <div className="py-10 ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={img1} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
          </Swiper>
          <div className="mx-auto flex md:justify-evenly my-5 md:flex-row flex-col justify-center items-center gap-6 md:gap-0">
            <Link to={"https://react-rtk-query-q-tube.vercel.app/"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Live-Link
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/react-rtk-query-QTube"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Front-End-Code
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/Qtube-server"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Back-End-Code
              </button>
            </Link>
          </div>
        </div>
        <div className="py-10 text-white">
          <h1 className="text-3xl font-bold">
            Project Name:
            <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              QTube Nexus
            </span>
          </h1>
          <p className="my-10 text-gray-300">
            <span className="font-bold">Project Short Description:</span>The
            QTube application is a cutting-edge video streaming platform that
            prioritizes speed, security, and user experience. Utilizing Redux
            and RTK Query, it ensures lightning-fast data retrieval and caching,
            resulting in seamless video streaming. The platform boasts a robust
            authentication system for easy sign-up and login, with mutation data
            handling for video content.
          </p>
          <p className="font-bold text-2xl my-4">Technologies:</p>
          <div className="flex text-5xl justify-around font-extrabold text-red-600 flex-wrap md:flex-row gap-6 md:gap-0">
            <FaReact></FaReact>
            <SiRedux></SiRedux>
            <SiExpress></SiExpress>
            <SiTailwindcss></SiTailwindcss>
            <IoLogoFirebase></IoLogoFirebase>
            <SiMongodb></SiMongodb>
          </div>
        </div>
      </div>
      {/* 2nd project */}
      <div className="my-10 grid md:grid-cols-2 grid-cols-1 px-4 md:px-14  gap-10">
        {" "}
        <div className="py-10 ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={img5} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
          </Swiper>
          <div className="mx-auto flex md:justify-evenly my-5 md:flex-row flex-col justify-center items-center gap-6 md:gap-0">
            <Link to={"https://job-finder-client-one.vercel.app/"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Live-Link
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/Job_finder_client"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Front-End-Code
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/Job_finder_server"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Back-End-Code
              </button>
            </Link>
          </div>
        </div>
        <div className="py-10 text-white">
          <h1 className="text-4xl font-bold">
            Project Name:
            <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              Job Finder
            </span>
          </h1>
          <p className="my-10 text-gray-300 ">
            <span className="font-bold">Project Short Description:</span>The
            application is architecturally designed with React and Redux for the
            front-end, coupled with Node.js and Mongoose for the backend,
            ensuring a powerful and efficient technology stack. Leveraging Redux
            Toolkit, it incorporates robust sorting and filtering features,
            enhancing the overall user experience.
          </p>
          <p className="font-bold text-2xl my-4">Technologies:</p>
          <div className="flex text-5xl justify-around font-extrabold text-red-600 flex-wrap md:flex-row gap-6 md:gap-0">
            <FaReact></FaReact>
            <SiRedux></SiRedux>
            <SiExpress></SiExpress>
            <SiTailwindcss></SiTailwindcss>
            <IoLogoFirebase></IoLogoFirebase>
            <SiMongoose></SiMongoose>
          </div>
        </div>
      </div>
      {/* 3rd project */}
      <div className="mt-0 grid md:grid-cols-2 grid-cols-1 px-4 md:px-14  gap-10">
        {" "}
        <div className="py-10 ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={img8} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="" className="h-96 w-full rounded-lg" />
            </SwiperSlide>
          </Swiper>
          <div className="mx-auto flex md:justify-evenly my-5 md:flex-row flex-col justify-center items-center gap-6 md:gap-0">
            <Link to={"https://webbazer-f9d07.web.app/"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl md:text-lg text-sm">
                Live-Link
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/Web-bazer"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Front-End-Code
              </button>
            </Link>
            <Link to={"https://github.com/tanzimnahid6/webBazer_backend"}>
              <button className="btn btn-outline border-red-800 border-2 text-white hover:bg-white hover:text-red-950 rounded-xl">
                Back-End-Code
              </button>
            </Link>
          </div>
        </div>
        <div className="py-10 text-white">
          <h1 className="text-3xl font-bold">
            Project Name:
            <span className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
              {" "}
              Web Bazer
            </span>
          </h1>
          <p className="my-10 text-gray-300">
            <span className="font-bold">Project Short Description:</span>This
            project features a user-friendly interface with a navbar, banner,
            brand display, team section, features, and footer on the home page.
            The `My Posts` section allows users to manage their posted jobs,
            enabling admin updates or deletions. The home page includes tabs for
            all jobs, allowing users to bid on any job, excluding their own
            postings. The `Bid Requests` page allows users to review and act on
            bids for their jobs, with buttons dynamically hiding upon acceptance
            or rejection. In the `My Bid` section, users can track the status of
            their bids and, for jobs in progress, mark them as complete,
            streamlining bid management.
          </p>
          <p className="font-bold text-2xl my-4">Technologies:</p>
          <div className="flex text-5xl justify-around font-extrabold text-red-600 flex-wrap md:flex-row gap-6 md:gap-0">
            <FaReact></FaReact>
            <SiRedux></SiRedux>
            <SiExpress></SiExpress>
            <SiTailwindcss></SiTailwindcss>
            <SiDaisyui></SiDaisyui>
            <IoLogoFirebase></IoLogoFirebase>
            <SiMongodb></SiMongodb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
