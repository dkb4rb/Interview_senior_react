// 1. To import React Hooks use: React.useState()
// 2. To add Fragments use: <React.Fragment></React.Fragment>
// 3. You can use bootstrap 5 and CSS
const {
    // if you want use history.push you should use "withRouter"
   // you can add others functions of react-router-dom here:
   HashRouter
 } = ReactRouterDOM
 
 
 // You can add other components here
 
 function change_page(setLogin, page, setUpl_Img,setuploaded){
 
     if(page == "page-2"){
           setLogin(false)
           setuploaded(false)
           setUpl_Img(true)
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
 
 const NavC = ({setLogin, setUpl_Img, setuploaded}) => {
         
     return (
             <div className="Head">
             <header class="header">
                             <h1 class="logo"><a href="#" class="a_head">MyApp</a></h1>
             <ul class="main-nav">
               <li><a href="#" id="go-to-home" onClick={() => change_page(setLogin, "page-1", setUpl_Img, setuploaded)}  >page-1</a></li>
               <li><a href="#" id="go-to-second-page" onClick={() => change_page(setLogin, "page-2", setUpl_Img, setuploaded)} >page-2</a></li>
             </ul>
         </header> 
             </div>
     );
 };
 
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
 
 const Foot = () => {
         
     return (
             <div className="foot">
     <span>_</span>
             </div>
     );
 };
 
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
 
 
 
 
 const App = () => {
     return (
       <div>
         <Login></Login>
       </div>
     )
 }