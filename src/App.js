import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Company from "./components/Company";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="flex flex-col bg-[#061327]">
      <Navbar />
      <div className="pt-20">
      {/* my-20 py-20 */}
        <Home />
      </div>
      <div className=" border-t-2 border-gray-400">
        <About />
      </div>
      <div className=" border-t-2 border-gray-400">
        <Skills />
      </div>
       <div className=" border-t-2 border-gray-400">
        <Experience />
      </div>
      <div className=" border-t-2 border-gray-400">
        <Work />
      </div>
       {/* <div className=" border-t-2 border-gray-400">
        <Company />
      </div> */}
      <div className=" border-t-2 border-gray-400">
        <Contact />
      </div>
    </div>
  );
}

export default App;
