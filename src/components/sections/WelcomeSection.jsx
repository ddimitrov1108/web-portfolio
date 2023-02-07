import { FiLinkedin } from "react-icons/fi";

import StackIcons from "../StackIcons";

export default function WelcomeSection() {
  return (
    <div id="welcome" className="h-screen flex items-center justify-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between lg:gap-14">
        <div className="text-center lg:text-left">
          <div
            id="me-introduction"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          >
            <span>{"Hi! I'm "}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-primary-main to-cyan-400">
              Daniel
            </span>
            <span>{", a"}</span>
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-800 via-primary-main to-cyan-400">
              Web Developer.
            </span>
          </div>

          <div id="me-description" className="space-y-6 mt-6">
            <p className="mx-auto lg:mx-0 max-w-lg lg:max-w-md xl:max-w-lg text-base">
              I'm a wannabe web developer specializing in building and designing
              stuff for the web. I'm currently a student in search of more
              knowledge and opportunities.
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

        <StackIcons className="hidden lg:block -top-12" />
      </div>
    </div>
  );
}

/*

            <button
              target="_blank"
              className="text-base mx-auto lg:mx-0 w-fit px-6 py-3 flex gap-4 items-center rounded-md border border-primary-main font-semibold"
              onClick={() => scrollSectionIntoView("about")}
            >
              About Me
              <FaChevronCircleDown className="text-primary-main text-lg" />
            </button>

            <div className="w-full flex justify-center lg:justify-start gap-4 text-2xl">
              {socialLinks.map((link) => (
                <div
                  key={link.href}
                  className="p-2"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    key={link.href}
                    className="transition-all cursor-pointer hover:text-primary-main"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
            */
