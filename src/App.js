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
      <div className="">
      {/* my-20 py-20 */}
        <Home />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Skills />
      </div>
      <div className="">
        <Work />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  );
}

export default App;
