import { Route , Routes } from "react-router-dom";
import Config from "./components/Config";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
     <Config/>
      <Routes>
        <Route path="/user" element={<Detail/>} />
      </Routes>
    
    </>
  );
}

export default App;
