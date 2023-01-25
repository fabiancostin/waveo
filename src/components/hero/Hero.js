import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <>
      <div className="bg-[#141414]">
        <div className="h-[40rem] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around px-7">
          <h1 className="font-['Cabin'] text-8xl max-w-lg text-center md:text-left text-gray-100">
            {props.text}
          </h1>
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-cyan-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-400">
                <span className="flex items-center space-x-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-9 h-9 text-cyan-300 group-hover:text-cyan-200 transition duration-200"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                    />
                  </svg>
                  <span className="pr-5 text-gray-100">Waveo v1.0</span>
                </span>
                <span className="pl-5 text-red-400 group-hover:text-red-300 transition duration-200">
                  Create a project &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
