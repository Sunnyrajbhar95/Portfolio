import React from "react";
import iertlogo from "../assets/iert.png";
import spvpnb from "../assets/lis.jpg";
// import codingTime from "../assets/portfolios/education.jpg";


const Education = () => {
  const education = [
    {
      id: 1,
      src: iertlogo,
      college: "Institute of Engineering and Rural Technology, Prayagraj",
      course:
        "Bachelor of Technology - BTech, CSE",
      time: "Nov 2020 - Jul 2024",
      date: "Grade: 7.77 CGPA",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: spvpnb,
      college: "Lalsa International School, Ghazipur",
      course:
        "High School, CBSE Board",
      time: "Apr 2016 - Mar 2017",
      date: "Grade: 10 CGPA",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: spvpnb,
      college: "Lalsa International School, Ghazipur",
      course:
        "Intermediate, CBSE Borad",
      time: "Apr 2018 - Mar 2019",
      date: "Grade: 81.8%",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div name="education" className="w-full  bg-slate-200">
      <div className="max-w-screen-xl mx-auto p-12 flex flex-col justify-center w-full h-full relative">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <p className="text-3xl font-semibold underline text-blue-500 border-b-4">
            Education
          </p>
        </div>
        {/* Education Items */}
        <div className="w-full py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {education.map(({ id, src, college, course, time, date, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 transition-transform duration-300 py-4 rounded-lg flex items-center bg-white ${style}`}
            >
              <img src={src} alt={college} className="h-24 w-24 ml-4 rounded-md shadow-md" />
              <div className="ml-6">
                <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{college}</h2>
                <p className="text-md bg-gradient-to-r from-blue-700 to-black text-transparent bg-clip-text">{course}</p>
                <p className="text-sm bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{time}</p>
                <p className="text-md italic bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Education;