
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skiil from "./components/Skiil";
import Project from "./components/Project";
import Coding from "./components/Coding";
import { Element } from "react-scroll";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="lg:min-h-full lg:overflow-x-hidden">
      <Header  className="sticky top-0"/>
      <div className="min-h-full lg:overflow-x-hidden">
        
        {/* Wrap each section in an Element tag */}
        <Element name="home">
          <Home />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="skill">
          <Skiil />
        </Element>

        <Element name="project">
          <Project />
        </Element>

        <Element name="coding">
          <Coding />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
        <Element name="education">
          <Education/>
        </Element>
        
      </div>
    </div>
  );
};

export default App;
