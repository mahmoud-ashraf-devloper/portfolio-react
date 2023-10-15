import React from "react";
import "./style.scss";

import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import Slider from "../Slider/Slider";

const Project = ({ project }) => {
  return (
    <div className="flex space-y-0 md:space-y-10 flex-col md:flex-row">
      <div className="px-2 w-full py-3 flex flex-col items-center bg-indigo-400/30 md:rounded-l-xl md:rounded-none rounded-xl md:mb-0  mb-2 text-white  mt-10 col-span-2 md:w-1/5">
        <h1 className="text-xl font-bold text-slate-300 text-center">
          {project.title}
        </h1>
        <p className="text-sm md:py-1 py-3 text-slate-400 text-center">
          {project.description}
        </p>
        <div className="flex md:py-4 py-3 md:pb-5 pb-2 lg:space-x-1 md:space-x-0 space-x-2">
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-orange-500  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <AiFillHtml5 className="w-full h-full" />
          </span>
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-slate-900  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <TbBrandNextjs className="w-full h-full" />
          </span>
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-blue-500  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <DiCss3 className="w-full h-full" />
          </span>
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-blue-600  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <GrReactjs className="w-full h-full" />
          </span>
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-yellow-500  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <IoLogoJavascript className="w-full h-full" />
          </span>
          <span className="lg:w-8 md:w-6 lg:h-8 md:h-6 p-1 cursor-pointer text-cyan-500  hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out  rounded-full bg-indigo-400/70">
            <SiTailwindcss className="w-full h-full" />
          </span>
        </div>
        <div className="flex md:space-y-4 space-y-2 md:pt-3 pt-2 flex-col">
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              className="flex whitespace-nowrap justify-center items-center bg-indigo-500 px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              <button>See Live </button>
              <span className="ml-2">
                <AiOutlineEye />
              </span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="flex whitespace-nowrap justify-center items-center bg-slate-900 px-6 py-2 rounded-md hover:bg-slate-700"
            >
              <button>Github </button>
              <span className="ml-2">
                <BsGithub />
              </span>
            </a>
          )}
        </div>
      </div>
      <div className=" col-span-5 w-full h-full">
        <Slider item={project} />
      </div>
    </div>
  );
};

export default Project;
