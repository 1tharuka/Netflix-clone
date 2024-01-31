import { useState } from "react"
import "./nav.css"
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const[show,setShow] = useState(false);
  const transitionNav = () =>{
    if (window.scrollY > 100){
     setShow(true)
  } else {
     setShow(false)
    }
}
useEffect(()=>(
window.addEventListener("scroll",transitionNav)
),[])
 return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__icons">
          <img
          onClick={() => navigate("/")}
          src="https://th.bing.com/th/id/R.75daf2de0e7b454ee28906a569b6ec19?rik=lD9fkrimZPKCRA&pid=ImgRaw&r=0"
          alt="netflix_logo" 
          className="nav__netflix"/>
          <img 
          onClick={() => navigate("/profile")}
          src="https://th.bing.com/th/id/R.0a5e7a1fa5a0c49f27a55ab285e7d375?rik=zzuvfcCsf4I8vw&pid=ImgRaw&r=0" 
          alt="avter" 
          className="nav__user"/>
      </div>
    </div>
  )
}

export default Nav
