import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {  useState } from 'react'
import Footer from "./components/common/Footer";
import TestPage from "./pages/TestPage";
import QuestionsStyle from "./components/AIQuestion/QuestionsStyle";
import DownloadFormate from "./components/download/DownloadFormate";
import About from "./pages/About";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  

  return (
    <div className=" relative">
      <Navbar />

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/testpage" element = {<TestPage/>} />
        <Route path="/questions" element = {<QuestionsStyle/>} />
        <Route path="/downloadformate" element = {<DownloadFormate/>} />

      </Routes>
      <Footer/>
    </div>
    )
}

export default App;
