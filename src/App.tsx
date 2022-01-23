import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homepage/>
     <About/>
     <Work/>
     <Contact/>
    </div>
  )
}

export default App
