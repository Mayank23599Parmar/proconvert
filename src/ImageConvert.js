import React, { useState } from 'react';
import { saveAs } from "file-saver";
import './App.css';
import Home from "./Home"

function ImageConvert() {
	const [image,setimage]=useState(null)
	const[Extention,SetExtention]=useState("")
	const [display,SetDispaly]=useState("none")
	const change=(e)=>{
		setimage(URL.createObjectURL(e.target.files[0]))
		SetDispaly("block")

if(e.target.files[0].type==="image/png"){
	SetExtention("jpg")
}else{
	SetExtention("png")
}
	  }


  const download=()=>{

		  saveAs(image, `Output.${Extention}`)



  }
	return(
		<div className="container">

<section className="myButton">
<h1>Convert image to PNG and JPG Formats</h1>
  <p>Select Image And Convert to png and jpg Formats and Download word file</p>
  <br></br>
  <input type="file" id="file" onChange={change} name="myimage" />
  <label htmlFor="file" className="btn-3">
    <span>Select Image</span>
  </label>

<br></br>
  <div className="col-sm-3 p-3 ">
  <img src={image} alt="" className="img-fluid  mx-auto d-block" width="100%"/>
  </div>
<br></br>
 <div className="col-sm-3 d-flex justify-content-center">
<button onClick={download} className="btn  btn-lg btn-block arrowScrollDown" style={{display:display,background:"#193a6a",color:'white' }}>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"></path></svg>
Convert  to  {Extention?Extention:""}</button>
</div>
</section>
<Home/>
    </div>
	)


}

export default ImageConvert;
