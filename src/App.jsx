import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Formsd from "./pages/Formsd";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About/>} />
      <Route path="/formsd" element={<Formsd/>}/>
    </Routes>
    </>
  )
}

export default App