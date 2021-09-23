import React, { useState } from "react";
import { Link,BrowserRouter  } from "react-router-dom";
import "./App.css"
function Navbar(){
const [navbarstate,Setnavbarstate]=useState(false);
const [navbarclass,Setnavbarclass]=useState("collapse navbar-collapse");
const [open,Setopen]=useState("")
const menus= [
	{
	  id: 1,
	  text: "Home",
	  url: "/"
	},
	{
	  id: 2,
	  text: "OCR",
	  url: "/ocr"
	},
	{
	  id: 3,
	  text: "Conveter",
	  url: "/conveter"
	},
	{
	  id: 4,
	  text: "Reducer",
	  url: "/reducer"
	}
  ]
const navbarToggler=()=>{
	if(navbarstate){
		Setnavbarstate(false);
		Setnavbarclass("collapse navbar-collapse")
		Setopen("")

	}else{
		Setnavbarstate(true);
		Setnavbarclass("collapse navbar-collapse show")
		Setopen("open")
	}
	}
	return(
	<>
	<nav className="navbar navbar-expand-sm navbar-inverse ">

        <Link to="/" className="navbar-brand ml-5">
          <img src="./pro.png" alt="Logo" width="170px" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={navbarToggler}
		  style={{outline:"none"}}
        >

		  <div id="nav-icon2" className={open}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

        </button>
        <div className={navbarclass}>
          <ul className="navbar-nav ml-auto mr-5 text-center">
            {menus.map((menu) => {
              return (
                <li key={menu.id} className="nav-item borderLeftRight">

                  <Link to={menu.url} className="nav-link text-black " style={{color:"#193a6a",fontWeight:"bolder"}}>
                    {menu.text}
                  </Link>

                </li>
              );
            })}
          </ul>
        </div>
      </nav>
	</>
)
}


export default Navbar