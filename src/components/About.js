import React from "react";
import Sunny from "../images/Sunny.jpg";
import "./pages.css";
import { IoIosArrowForward } from "react-icons/io";

function About() {
  return (
    <div className="md:w-[100%] py-10   xm:w-[100%] lg:w-[100%] border-t-2  flex flex-col justify-center items-center">
        <div className="text-blue-600 text-3xl font-semibold underline">About Us</div>
      <div className="md:w-[90%] lg:w-[70%] xm:w-[100%] mx-auto grid md:grid-cols-2 gap-10 p-10 my-10 sm:grid-cols-1  sm:place-items-center xm:place-items-center">
        <div className="flex flex-col lg:items-start md:items-start xm:flex xm:flex-col xm:items-center xm:w-[100%] md:order-first justify-start ">
          <h2 className="sm:text-2xl  md:text-4xl font-bold text-blue-700 xm:text-xl  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">Fullstack Developer</h2>
          <p1 className="md:text-[1.1rem] mt-5 font-sans sm:text-[1.2rem]xm:text-[1rem] subpixel-antialiased font-semibold text-gray-700  ">
            Hi, I'm Sunny Rajbhar! I'm a Fullstack developer with a passion for
            crafting seamless and visually stunning user experiences on the web.
            My expertise lies in translating design concepts into interactive
            and responsive websites. I love working on new and exciting
            technologies emerging nowadays. I have a keen interest in Web
            Development and I am always looking for new opportunities to learn
            and grow.
          </p1>
          <div className="mt-5 flex gap-3">
            <button className="bg-red-500 text-white p-2 rounded-sm text-[1.1rem] hover:bg-blue-800 transition-all duration-300 ">
              <a href="https://www.linkedin.com/in/sunny-rajbhar-67880b252/" className="flex  items-center gap-1" target="_blanket">
                Read more <span><IoIosArrowForward /></span>
                
              </a>
            </button>
            <button className="bg-red-500 text-white p-2 rounded-sm text-[1.1rem] hover:bg-blue-800 transition-all duration-300"> <a href="https://drive.google.com/file/d/1PbkDWvN1yQ8yqMgvYFbwjjD734deezJ9/view" className="flex  items-center gap-1" target="_blanket">
                Resume <span><IoIosArrowForward /></span>
                
                
              </a></button>
          </div>
        </div>
        <div className="md:w-[35vw] lg:w-[25vw]  p-1 sm:order-first xm:order-first sm:w-[35vw] xm:w-[60vw]  ">
          <img className="rounded-lg shadow-lg shadow-blue-500 border-4 border-white"
            src={Sunny}
            alt="Erro"
            loading="lazy"
            style={{ display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
