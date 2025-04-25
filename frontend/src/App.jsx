import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Signup from "./components/Signup";
import ContactUs from "./pages/ContactUs";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./components/AuthProvider";


const App =()=> {


  const [authUser, setauthUser] = useAuth();
  console.log(authUser);


  return (
   <>
      {/* <Home /> Yeh galat hai. Isse Home har jagah render hoga */}

       <div className=" dark:bg-slate-900 dark:text-white ">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>}   />

      </Routes>
      <Toaster />

       </div>
    
   </>
  );
}

export default App;