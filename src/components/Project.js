import React from "react";
import "./pages.css";

function Project() {
  return (
  <div className="w-full flex flex-col items-center">
    <div className="text-3xl font-semibold text-blue-500 underline mt-10">Projects</div>
<div className="lg:w-full grid lg:grid-cols-4 gap-4 p-10 md:grid-cols-2 ">
    
  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
    <img
      className="w-full h-40 object-cover"
      src="https://img.freepik.com/free-vector/twitter-logo-design_1035-8934.jpg?size=626&ext=jpg&ga=GA1.1.1427001867.1718912892&semt=ais_hybrid"
      alt="Twitter Logo"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Twitter Clone</h3>
      <div className="mb-4 flex justify-center flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          React.js
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          Redux
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          Express
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          MongoDB
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          Tailwind
        </span>
      </div>
      <a
        href="your-project-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>

  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
    <img
      className="w-full h-40 object-cover"
      src="https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg"
      alt="TODO List"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">TODO List</h3>
      <div className="mb-4 flex justify-center flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          React
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          Redux
        </span>
      </div>
      <a
        href="https://github.com/Sunnyrajbhar95/Todo_list"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>

  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
    <img
      className="w-full h-40 object-cover"
      src="https://static.vecteezy.com/system/resources/previews/012/066/499/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png"
      alt="Weather App"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Weather App</h3>
      <div className="mb-4 flex justify-center flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          React
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          Redux
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          Firebase
        </span>
      </div>
      <a
        href="https://github.com/Sunnyrajbhar95/Weather_forcast_web_app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>

  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden m-4">
    <img
      className="w-full h-40 object-cover"
      src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png"
      alt="Blog"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Blog</h3>
      <div className="mb-4 flex justify-center flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          React
        </span>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
          Redux
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          Firebase
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded">
          Tailwind
        </span>
      </div>
      <a
        href="https://github.com/Sunnyrajbhar95/Blog-App"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  </div>
</div>
</div>

  );
}

export default Project;
