import React from "react";
import Login from "./Login";

function change_page(form, setLogin, page, setUpl_Img,setuploaded , userSuccessRegister){

    if(page == "page-2"){
        if(!form.email || !form.password){
            setLogin(true)
            setuploaded(false)
            setUpl_Img(false)
        }else{
          setLogin(false)
          setuploaded(false)
          setUpl_Img(true)
        }
    }
    if(page == "page-1"){
          setLogin(true)
          setuploaded(false)
          setUpl_Img(false)
    }
    if(page == "upload"){
        setuploaded(true)
        setLogin(false)
        setUpl_Img(false)
    }
   }

  



const RegisterForm = ({ setLogin, setuploaded , setUpl_Img}) => {

    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = async (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };




  
    const userSuccessRegister = (e) => {
      e.preventDefault()
      var formData = new FormData(document.querySelector('form')) //use formData to get values from inputs
      const email = formData.get('email')
      const password = formData.get('password')

      if (!password) {
          alert("La clave")
      }
     
      // write your code here
    }
  
    return (
        
      <React.Fragment>
          <div class="container_registro">
              <form>

                    <h3 class="tittle" >Register with us</h3>
                    <p class="maill">Email address</p>
                    <input type="text" name="email" id="email" onChange={handleChange}></input>
                    <p>Password</p>
                    <input type="password" name="password" id="password" onChange={handleChange} ></input>
                    <br/>
                    <button type="submit" id="submit-btn" className="btn btn-dark size_btn" onClick={() => change_page(form ,setLogin, "page-2",setUpl_Img ,setuploaded, userSuccessRegister)}>Submit</button>
              </form>
        </div>
      </React.Fragment>
    )
  };

  export default RegisterForm;