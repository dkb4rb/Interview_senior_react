import React from "react";

/**
* Change_pagee - THis function is to change the usestate method select to button login
* @form: it is contain the data inserted
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: None
*/
function change_pagee(form, setLogin, page, setUpl_Img,setuploaded){

  if(page === "page-2"){
        setLogin(false)
        setuploaded(false)
        setUpl_Img(true)
      
  }
  if(page === "page-1"){
        setLogin(true)
        setuploaded(false)
        setUpl_Img(false)
  }
  if(page === "upload"){
      setuploaded(true)
      setLogin(false)
      setUpl_Img(false)
  }
 }

/**
* RegisterForm - THis the fucntional component to exec new register
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: 
*		- New login and redirect to hook upload
*/
const RegisterForm = ({ setLogin, setuploaded , setUpl_Img}) => {

  const [form, setForm] = React.useState({
      email: '',
      password: ''
  })

  const handleChange = async (e) => {
    e.preventDefault()
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
  };
  const userSuccessRegister = (e) => {
    e.preventDefault()
    change_pagee(form ,setLogin, "page-2",setUpl_Img ,setuploaded)
    var formData = new FormData(document.querySelector('form')) //use formData to get values from inputs
    const email = formData.get('email')
    const password = formData.get('password')
  }

  return (
      
    <React.Fragment>
        <div className="container_registro">
            <form>

                  <h3 className="tittle" >Register with us</h3>
                  <p class="maill">Email address</p>
                  <input className="form-control my-input" type="text" name="email" id="email" onChange={handleChange}></input>
                  <p>Password</p>
                  <input className="form-control my-input" type="password" name="password" id="password" onChange={handleChange} ></input>
                  <br/>
                  <button type="submit" id="submit-btn" className="btn btn-dark size_btn" onClick={(e) =>userSuccessRegister(e)}>Submit</button>
            </form>
      </div>
    </React.Fragment>
  )
};


  export default RegisterForm;