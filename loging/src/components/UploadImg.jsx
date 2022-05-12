import React from "react";

/**
* up_image - THis function is to change the state the next methods and charge new image
* @immg: it is contain the url to image inserted
* @setimgurl: This is the method to charged new url in to hook immg
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: None
*/
function up_image(setuploaded, setUpl_Img, immg, setimgurl){
  setimgurl(immg)
  setuploaded(true)
  setUpl_Img(false)
}

/**
* UploadImg - THis the fucntional component to upload new image
* @setimgurl: This is the method to charged new url in to hook immg
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: 
*		- New login and redirect to hook upload
*/

const UploadImg = ({setuploaded, setUpl_Img, setimgurl}) => {
  const [immg, setimg] = React.useState("https://media.istockphoto.com/photos/profile-side-view-of-brunet-bearded-guy-ceo-boss-chief-executive-picture-id1163541557?b=1&k=20&m=1163541557&s=170667a&w=0&h=DuZLBp8MUHxRgqtWb06i9-OBGkhRihxUa6nVVR9DFLM=") 
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