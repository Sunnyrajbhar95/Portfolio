import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './pages.css'

function Home() {
  return (
    <div className="xs:w-[100%] p-8 flex flex-col sm:w-[100%] h-[100%]  bg-slate-200" name="">
      <div className="xm:w-[100%] mx-auto flex flex-col items-center mt-24 sm:w-[80%] md:w-[70%] ">
        <h1 className="xm:text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"> I am Sunny Rajbhar.</h1>
        <p className="xm:text-md sm:text-xl md:text-2xl  text-wrap font-serif  text-gray-700 leading-relaxed mb-4 mt-4 text-base text-center">
          I am a Fullstack developer and data Scientist. I like dabbling in
          various parts of Fullstack Development and like to learn new
          technologies, write technical articles or simply play games in my free
          time.
        </p>
      </div>
      <div className="xm:w-[100%] mx-auto flex  justify-center gap-3 mt-10 ">
      <a href="https://github.com/Sunnyrajbhar95" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-[1s] duration-200 delay-100 rounded-full shadow-md shadow-black p-2 bg-slate-200">
          <FaGithub className="text-blue-600 hover:text-black duration-150 " size={30} />
        </a>
      <a href="https://www.linkedin.com/in/sunny-rajbhar-67880b252/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-[1s] duration-200 delay-100 rounded-full shadow-md shadow-black p-2 bg-slate-200">
          <FaLinkedin className="text-blue-600 hover:text-black duration-150 " size={30} />
        </a>
      <a href="https://www.instagram.com/s_u_n_n_y6389/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-[1s] duration-200 delay-100 rounded-full shadow-md shadow-black p-2 bg-slate-200">
          < FaSquareInstagram className="text-blue-600 hover:text-black duration-150 " size={30} />
        </a>
      <a href="https://www.facebook.com/profile.php?id=100070953351511" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-[1s] duration-200 delay-100 rounded-full shadow-md shadow-black p-2 bg-slate-200">
          <FaFacebookSquare className="text-blue-600 hover:text-black duration-150 " size={30} />
        </a>
      <a href="https://x.com/rajbhar_su4580" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-[1s] duration-200 delay-100 rounded-full shadow-md shadow-black p-2 bg-slate-200">
          <FaTwitter className="text-blue-600 hover:text-black duration-150" size={30} />
        </a>
      </div>
    </div>
  );
}

export default Home;
