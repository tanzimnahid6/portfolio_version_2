import { BiGitCommit, BiLogoFirebase } from "react-icons/bi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoLogoVercel } from "react-icons/io5";
const Tools = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="py-16 bg-gradient-to-b from-red-950 to-black px-2 md:px-14">
      <h1 className="text-4xl text-white font-bold py-8 text-center md:text-left  ">
        TOOLS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center w-full ">
        <div
          data-aos="fade-right"
          className="bg-[#1e1e1e] text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 "
        >
          <div className="flex gap-2">
            <span>
              <BiLogoFirebase color="#960000" size={48} />
            </span>
            <div>
              <h1 className="text-2xl font-bold">Firebase</h1>
              <p className="text-gray-300">
                Firebase provides robust authentication and user management
                capabilities. It offers easy-to-use authentication methods,
                including email/password, social logins (e.g., Google, Facebook,
                Twitter), and integration with third-party identity providers.
                Developers can manage user accounts, handle user registration
                and login, and implement user-based security rules to control
                access to their applications resources.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="bg-[#1e1e1e] text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex gap-2">
            <span>
              <IoLogoVercel color="#960000" size={48} />
            </span>
            <div>
              <h1 className="text-2xl font-bold">Vercel</h1>
              <p className="text-gray-300">
                Vercel simplifies the deployment process, allowing developers to
                quickly deploy their applications to the cloud. With just a few
                clicks or a simple command, developers can deploy static
                websites, single-page applications (SPAs), serverless functions,
                and full-stack applications. Vercel integrates seamlessly with
                popular version control systems like Git, making it easy to
                automate deployments.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-[#1e1e1e] text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex gap-2">
            <span>
              <BiGitCommit color="#960000" size={48} />
            </span>
            <div>
              <h1 className="text-2xl font-bold">Git&GitHub</h1>
              <p className="text-gray-300">
                Git is a distributed version control system, which means that
                every developer has a complete copy of the repository on their
                local machine. This allows developers to work offline, commit
                changes locally, and easily synchronize and collaborate with
                others when they are connected.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="bg-[#1e1e1e] text-white p-4 rounded-lg m-4 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex gap-2">
            <span>
              <BiLogoFirebase color="#960000" size={48} />
            </span>
            <div>
              <h1 className="text-2xl font-bold">Visual Studio Code</h1>
              <p className="text-gray-300">
                Visual Studio Code (VS Code) is a lightweight, cross-platform
                source code editor with extensive language support, customizable
                features, integrated terminal, built-in version control, and a
                thriving extension ecosystem.g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
