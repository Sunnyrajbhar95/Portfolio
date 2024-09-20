import React from "react";
import { SiLeetcode } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
function Coding() {
  return (
    <div className="w-[100%]  flex flex-col justify-center  items-center bg-slate-200 py-10">
      <div className="text-3xl  font-semibold underline text-blue-600">
        Coding Profile
      </div>
      <div className="w-[100%]  mx-auto mt-5 grid lg:grid-cols-4 gap-8 lg:w-[90%]  md:grid-cols-2 md:w-[80%] sm:w-[90%] sm:grid-cols-2 xm:grid-cols-1 xm:w-[80%]">
        <div className="w-[100%] h-auto border-2 border-yellow-500 flex flex-col items-center  py-5 gap-2 rounded-md  shadow-md shadow-blue-500 md:shadow-indigo-900 hover:scale-[1.1] transition-all duration-[0.6s] bg-white ">
          <SiLeetcode className="text-yellow-600" size={50} />
          <h1 className="text-xl font-semibold mt-3">
            Rated 1680+ in LC Contest
          </h1>
          <h1 className="text-xl font-semibold">Solved 500+ Problems</h1>
          <button className="bg-blue-500 px-2 py-1 rounded-sm text-white mt-3  flex  justify-center items-center gap-1 cursor-pointer hover:bg-yellow-500 hover:text-black">
            <a href="https://leetcode.com/u/sunny9598/" target="_blanket">
              Open Profile
            </a>
            <MdArrowOutward />
          </button>
        </div>
        <div className="w-[100%] h-auto border-2 border-green-500 flex flex-col items-center  py-5 gap-2 rounded-md  shadow-md shadow-blue-500 md:shadow-indigo-900 hover:scale-[1.1] transition-all duration-[0.6s] bg-white ">
          <SiGeeksforgeeks className="text-green-600" size={50} />
          <h1 className="text-xl font-semibold mt-3">
            Coding score 1000+
          </h1>
          <h1 className="text-xl font-semibold">Solved 400+ Problems</h1>
          <button className="bg-blue-500 px-2 py-1 rounded-sm text-white mt-3  flex  justify-center items-center gap-1 cursor-pointer hover:bg-green-500 hover:text-black">
            <a href="https://www.geeksforgeeks.org/user/rajbharsunny9598/" target="_blanket">
              Open Profile
            </a>
            <MdArrowOutward />
          </button>
        </div>
        <div className="w-[100%] h-auto border-2 border-yellow-500 flex flex-col items-center  py-5 gap-2 rounded-md  shadow-md shadow-blue-500 md:shadow-indigo-900 hover:scale-[1.1] transition-all duration-[0.6s] bg-white ">
          <SiCodechef className="text-black-600" size={50} />
          <h1 className="text-xl font-semibold mt-3">
            Contest Rating 1603
          </h1>
          <h1 className="text-xl font-semibold">3* at Codechef</h1>
          <button className="bg-blue-500 px-2 py-1 rounded-sm text-white mt-3  flex  justify-center items-center gap-1 cursor-pointer hover:bg-yellow-500 hover:text-black">
            <a href="https://www.codechef.com/users/sunny9598" target="_blanket">
              Open Profile
            </a>
            <MdArrowOutward />
          </button>
        </div>
        <div className="w-[100%] h-auto border-2 border-green-500 flex flex-col items-center  py-5 gap-2 rounded-md  shadow-md shadow-blue-500 md:shadow-indigo-900 hover:scale-[1.1] transition-all duration-[0.6s] bg-white ">
          <FaHackerrank className="text-yellow-600" size={50} />
          <h1 className="text-xl font-semibold mt-3">
          5* at Hackerrank(c++)
          </h1>
          <h1 className="text-xl font-semibold">5* at Hackerrank(Python)</h1>
          <button className="bg-blue-500 px-2 py-1 rounded-sm text-white mt-3  flex  justify-center items-center gap-1 cursor-pointer hover:bg-green-500 hover:text-black">
            <a href="https://www.hackerrank.com/profile/rajbharsunny9598" target="_blanket">
              Open Profile
            </a>
            <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coding;
