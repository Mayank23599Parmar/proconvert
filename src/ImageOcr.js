import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import { saveAs } from "file-saver";
import { ProgressBar } from "react-bootstrap";
import {Document,Packer, Paragraph,} from "docx";
import './App.css';
import Home from "./Home"

function ImageOcr() {
  const [ocr, setOcr] = useState(null);
  const [image,setimage]=useState(null)
const [text,settext]=useState("")
const [display,SetDispaly]=useState("none")

  const worker = createWorker({
    logger: m => lol(m),

  });
  const lol=(m)=>{
    console.log(m)
if(m.status === "recognizing text"){
  setOcr(m.progress)

}
  }
  const change=(e)=>{
    setimage(URL.createObjectURL(e.target.files[0]))
console.log(e.target.files[0]);


  }
const doOCR = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(image);

  settext(text)
  SetDispaly("block")
};
const Convert=()=>{

  const doc = new Document();
  doc.addSection({
    children: [new Paragraph("Website name"), new Paragraph(text)]
  });
  Packer.toBlob(doc).then(blob => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
  setimage(null)
  settext("")
}
useEffect(()=>{
  doOCR();

},[image])


  return (
    <div className="container">
    <section className=" myButton">
  <h1>Image to Text Conveter</h1>
  <p>Select Image And Convert to text and Download word file</p>

<br></br>

  <input type="file" id="file" onChange={change} name="myimage"/>
  <label htmlFor="file" className="btn-3">
    <span>Select Image</span>
  </label>
  <br></br>
  <div style={{display:image?"block":"none",width:'50%'}}>
  <ProgressBar now={~~(ocr*100)}  animated label={`${~~(ocr*100)}%`} />
  </div>

<br></br>
<div className="row  d-flex justify-content-center text-center">
  <div className="col-sm-3 p-3 shadow-sm p-3 mb-5 bg-light  rounded " style={{display:~~(ocr*100)===100?"block":"none"}}>
  <img src={image}   alt="" className="img-thumbnail"/>
  </div>
  <div className="col-sm-3 p-3 shadow-sm p-3 mb-5 bg-light  rounded  "  style={{display:~~(ocr*100)===100?"block":"none"}}>
  <p>{text}</p>
  </div>

</div>


<div className="col-sm-3 d-flex justify-content-center">
<button onClick={Convert} className="btn  btn-lg arrowScrollDown" style={{display:display,background:"#193a6a",color:'white' }}>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20"><path d="M7.5 0a.5.5 0 01.5.5v16.17l4.44-4.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71l-6.13 6.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22L.15 13.64a.5.5 0 010-.71l.7-.71a.49.49 0 01.7 0L6 16.67V.5a.5.5 0 01.5-.5z"></path></svg>
Download word file</button>
</div>
</section>

<br></br>
<Home/>
    </div>
  );
}

export default ImageOcr;