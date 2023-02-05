import { FiLinkedin } from "react-icons/fi";
import avatarPng from "../../assets/avatar.png";

export default function WelcomeSection() {
  return (
    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full welcome-animation flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="text-center lg:text-left">
          <div className="text-4xl md:text-5xl xl:text-6xl">
            <div className="fade-and-slide font-bold ">
              <span>{"Hi! I'm "}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
                Daniel.
              </span>
            </div>
            <div className="fade-and-slide text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
              <span>Web Developer.</span>
            </div>
          </div>

          <div className="welcome-description mt-4">
            <p className="mx-auto lg:mx-0 max-w-[600px] text-base">
              I'm a wannabe web developer specializing in building (and
              sometimes designing) stuff for the Web. I'm currently a student in
              search of more knowledge and opportunities.
            </p>

            <a
              href="https://www.linkedin.com/in/daniel-dimitrov-94593a180/"
              target="_blank"
              className="text-base mt-8 mx-auto lg:mx-0 w-fit px-8 py-3 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
            >
              <FiLinkedin className="text-primary-main text-xl" /> Let's talk
            </a>
          </div>
        </div>

        <img
          id="avatar"
          src={avatarPng}
          alt="avatarPng"
          className="border border-primary-main rounded-full shadow-xl mx-auto w-32 h-32 md:w-36 md:h-36 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
        />
      </div>
    </div>
  );
}

/*

    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full welcome-animation flex flex-col-reverse lg:flex-row justify-between gap-8">
        <div className="w-full text-center lg:text-left text-4xl md:text-5xl xl:text-6xl">
          <div className="fade-and-slide font-bold ">
            {"Hi! I'm "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
              Daniel.
            </span>
          </div>

          <div className="fade-and-slide text-transparent bg-clip-text bg-gradient-to-t from-primary-dark via-primary-main to-cyan-400 font-bold">
            <span>Web Developer.</span>
          </div>

          <div className="welcome-description mt-6">
            <p className="mx-auto lg:mx-0 max-w-[600px] text-base">
              I'm a wannabe web developer specializing in building (and
              sometimes designing) stuff for the Web. I'm currently a student in
              search of more knowledge and opportunities.
            </p>

            <a
              href="https://www.linkedin.com/in/daniel-dimitrov-94593a180/"
              target="_blank"
              className="text-base mt-8 mx-auto lg:mx-0 w-fit px-8 py-4 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
            >
              <FiLinkedin className="text-primary-main text-xl" /> Let's talk
            </a>
          </div>
        </div>

        <img
          id="avatar"
          src={avatarPng}
          alt="avatarPng"
          className="border border-primary-main rounded-full shadow-xl mx-auto w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
        />
      </div>
    </div>
    */
