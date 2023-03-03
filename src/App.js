import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mt-10 pt-10">
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
        <Work />
      </div>
      <div className=" border-t-2 border-gray-400">
        <Contact />
      </div>
    </div>
  );
}

export default App;
