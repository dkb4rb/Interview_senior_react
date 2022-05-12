import React from "react";

function up_image(setuploaded, setUpl_Img, immg, setimgurl){
    setimgurl(immg)
    setuploaded(true)
    setUpl_Img(false)
}

const UploadImg= ({setuploaded, setUpl_Img, setimgurl}) => {
    const [immg, setimg] = React.useState(null) 
    const handleChange = async (e) => {
        await setimg(e.target.value);
    };
    return (
  <div className="upl_img">
    <h4 class="sm fs-5 fw-bold h1_up">Upload a profile photo</h4>
       		<input id="image-url" name="image-url" type="url" class="form-control input-image mt-2" placeholder="Enter photo Url" onChange={handleChange}></input>

    <br/>
        <button id="submit-img" type="submit" class="btn btn-dark mt-2 px-5 btn_size" onClick={() => up_image(setuploaded, setUpl_Img, immg, setimgurl)}>Submit</button>
      </div>
);
};

export default UploadImg;