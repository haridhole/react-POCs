import { useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
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

  return (
    <div className="App">
      <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
      <button onClick={uploadImage}>Upload Image</button>
      <Image style={{width:200}} cloudName="dcayfmk9r" publicId="https://res.cloudinary.com/dcayfmk9r/image/upload/v1633418769/gf6px7zv92jmpljd6nsc.png"/>
    </div>
  );
}

export default App;
