import React, {  useState } from 'react';
import imageCompression from 'browser-image-compression';
import './App.css';
import Home from "./Home"
function ReduceImage() {
	const [image,setimage]=useState(null)
	const [imageblob,setblob]=useState(null)
	const [original,SetOriginal]=useState(null)
	const [Reduce,Setreduce]=useState(null)
	const [display,SetDispaly]=useState(false)

	const [compressImage,SetCompresImage]=useState("")
	const change=(e)=>{

		setimage(e.target.files[0])
		console.log(e.target.files[0]);
		SetOriginal(e.target.files[0].size);
		setblob(URL.createObjectURL(e.target.files[0]))
	  }


  const download=()=>{
	var options = {
		maxSizeMB: 5,
		maxWidthOrHeight: 500,
		useWebWorker: true
	  }
	  imageCompression(image, options)
.then(function (compressedFile) {
	Setreduce(compressedFile.size);
	SetCompresImage(URL.createObjectURL(compressedFile))

	SetDispaly(true)

})




  }
	return(
		<div className="container">
		 <section className=" myButton">
  <h1>Reduce Image Size</h1>
  <p>Select Image And Reduce image size and Download word file <span className="text-danger">click on reduce image for  download </span></p>

<br></br>

  <input type="file" id="file" onChange={change} name="myimage" />
  <label htmlFor="file" className="btn-3">
    <span>Select Image</span>
  </label>



<div className="col-sm-3 d-flex justify-content-center">

<button onClick={download} class="btn  btn-lg" style={{background:"#193a6a",color:'white' }}>Reduce Image Size</button>

</div>
<div className="row  d-flex justify-content-center" >
  <div className="col-sm-3 p-3 " style={{display:display?"block":"none",width:"500px",height:"500px"}}>
  <p>Original Image size {original/1000} kb

  </p>
  <a> <img src={imageblob} alt="" className="img-thumbnail"/></a>

  </div>
  <div className="col-sm-3 p-3 " style={{display:display?"block":"none",width:"500px",height:"500px"}}>
  <p>Reduced Image {Reduce/1000} kb</p>

  <a id="img" href={compressImage}  download>
	<img src={compressImage} alt="" className="img-thumbnail"/>
	</a>
  </div>

</div>

</section>
<Home/>
    </div>
	)


}

export default ReduceImage;
