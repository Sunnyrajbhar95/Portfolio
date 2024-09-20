import React from "react";
import "./pages.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

function Skiil() {
  return (
    <div className="min-w-full flex flex-col items-center py-10 px-5 bg-slate-200">
      <div className="lg:w-[80%] flex flex-col items-center">
        <div className="text-3xl font-semibold text-blue-500 font-sans subpixel-antialiased text-center underline">
          Technologies Stack
        </div>
        <p className="lg:text-[1.2rem] mt-2 font-sans subpixel-antialiased font-semibold text-[#333333] text-center">
          Including programming Languages, frameworks, databses, front-end and
          back-end tools, and APIs.
        </p>
      </div>
      <div className="lg:w-[80%] grid lg:grid-cols-4  gap-5 place-items-center py-10 md:grid-cols-3 sm:grid-cols-2">
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            {/* <TbBrandCpp size={30} /> */}
            <p className="text-3xl font-semibold">C</p>
            <sup>C</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <TbBrandCpp size={30} />
            <sup>C++</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <IoLogoHtml5 size={30} /> <sup>HTML</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <IoLogoCss3 size={30} />
            <sup>CSS</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <IoLogoJavascript size={30} />
            <sup>Javascript</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaReact size={30} />
            <sup>React</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaPython size={30} />
            <sup>Python</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaNodeJs size={30} />
            <sup>Node</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <SiExpress size={30} />
            <sup>Express</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaGit size={30} />
            <sup>Git</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaGithub size={30} />
            <sup>GitHub</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <SiMysql size={30} />
            <sup>MySql</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <DiMongodb size={30} />
            <sup>Mongodb</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <FaBootstrap size={30} />
            <sup>Bootstrap</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <RiTailwindCssFill size={30} />
            <sup>Tailwind</sup>
          </div>
        </div>
        <div className=" w-[180px] h-[70px] rounded-md flex justify-center items-center hover:scale-[1.1] hover:text-[#0D98BA] font-semibold hover:shadow-lg hover:shadow-slate-900 hover:bg-slate-500 transition-all duration-700   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[.2rem]">
          <div className="flex justify-center items-center h-full w-full bg-slate-300 rounded-md">
            <SiPostman size={30} />
            <sup>Postman</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skiil;
