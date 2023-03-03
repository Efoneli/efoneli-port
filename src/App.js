import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="my-20 py-20">
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div className="mb-50">
        <Skills />
      </div>
      <div className="py-20">
        <Work />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
