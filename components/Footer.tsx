import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="mailto:shuklamanya99@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="https://docs.google.com/document/d/1lTCFnN52DzzxgNiTpGpxFPbuqxaIBu6WkuEr2IVHQuY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEerXqV43cdpA/profile-displayphoto-scale_400_400/B56ZrjuMwCMIAg-/0/1764757131881?e=1770854400&v=beta&t=vBydB5YE6cfFO0u-c7YERQPuDXmhUyPLMK29-RKxqNM"
            alt="Manya Shukla"
            className="w-12 h-12 rounded-full border-2 border-purple/50 shadow-lg object-cover"
          />
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2026 Manya Shukla
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer flex justify-center items-center rounded-lg border border-black-300 ${
                info.id === 3
                  ? "w-10 h-10 p-1 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
                  : "w-10 h-10 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200"
              }`}
            >
              <img
                src={info.img}
                alt={info.id === 3 ? "Portfolio" : "Social Media"}
                className={info.id === 3 ? "w-8 h-8 rounded-full object-cover" : ""}
                width={info.id === 3 ? 32 : 20}
                height={info.id === 3 ? 32 : 20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
