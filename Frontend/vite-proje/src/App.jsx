import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Navbar from "./Components/Navbar";


function App() {


  return (
    <>

    <Navbar/>
     <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/Add" element={<Add/>}/>
     </Routes>
    </>
  )
}

export default App
