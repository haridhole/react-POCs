import { useState, Profiler } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import MyComp from "./MyComp";
import './App.css';

function App() {

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () =>{
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "react_demo");

    Axios.post("https://api.cloudinary.com/v1_1/dcayfmk9r/image/upload", formData)
      .then(response=>console.log(response));

    console.log("file", imageSelected);
  }

  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  )=> {
    console.log("id",id);
    console.log("phase",phase);
    console.log("actualDuration",actualDuration);
    console.log("baseDuration",baseDuration);
    console.log("startTime",startTime);
    console.log("commitTime",commitTime);
    console.log("interactions",interactions);
  }

  return (
    <div className="App">
      <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
      <button onClick={uploadImage}>Upload Image</button>
      <Image style={{width:200}} cloudName="dcayfmk9r" publicId="https://res.cloudinary.com/dcayfmk9r/image/upload/v1633418769/gf6px7zv92jmpljd6nsc.png"/>
      <Profiler id="Navigation" onRender={onRenderCallback}>
        <MyComp />
      </Profiler>
    </div>
  );
}

export default App;
