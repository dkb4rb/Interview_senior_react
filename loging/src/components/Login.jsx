import React from "react"
import "./Login.css"
import NavC from "./NavC"
import RegisterForm from "./RegisterForm"
import UploadImg from "./UploadImg"
import ImgCard from "./ImgCArd"
import Foot from "./Foot"

/**
* Login - THis the fucntional component contain form register
* Return: 
*		- New login
*/        
         
const Login = () =>{
  const [Upl_Img, setUpl_Img] = React.useState(false)  
    const [uploaded, setuploaded] = React.useState(false)
    const [Login, setLogin] = React.useState(true)
    const [imgurl, setimgurl] = React.useState(null)
  return (
    
      <div>
      
       <NavC setLogin={setLogin} setUpl_Img={setUpl_Img} setuploaded={setuploaded} ></NavC>
      {Upl_Img && <UploadImg setuploaded={setuploaded} setUpl_Img={setUpl_Img} setimgurl={setimgurl}/>}
       {Login && <RegisterForm setLogin={setLogin} setuploaded={setuploaded} setUpl_Img={setUpl_Img}/>}
      {uploaded && <ImgCard props={imgurl}/>}
      <Foot>_</Foot>
      </div>
    )
 }

export default Login;