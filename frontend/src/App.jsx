import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Signup from "./components/Signup";
import ContactUs from "./pages/ContactUs";

const App =()=> {
  return (
   <>
      {/* <Home /> Yeh galat hai. Isse Home har jagah render hoga */}

       <div className=" dark:bg-slate-900 dark:text-white ">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>}   />

      </Routes>

       </div>
    
   </>
  );
}

export default App;