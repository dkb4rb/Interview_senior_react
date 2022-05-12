import React, { useState } from "react";

function up_image(setuploaded, setUpl_Img, img, setimgurl){
	setuploaded(true)
    setimgurl(img.url)
    setUpl_Img(false)
}




const UploadImg= ({setuploaded, setUpl_Img, setimgurl}) => {
    const [img, setimg] = useState(null) 
    const handleChange = async (e) => {
        setimg({
          ...img,
          [e.target.name]: e.target.value,
        });
    };
    return (
  <div className="upl_img">
    <h1 className="h1_up">Upload a profile photo</h1>
    <input type="text" name="url" className="form-control"  placeholder="Enter photo Url" onChange={handleChange} ></input>
    <br/>
    <button type="submit" className="btn btn-dark size_btn ot_size" onClick={() => up_image(setuploaded, setUpl_Img, img, setimgurl)} >Submit</button>
  </div>
);
};

export default UploadImg;