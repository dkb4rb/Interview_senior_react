// 1. To import React Hooks use: React.useState()
// 2. To add Fragments use: <React.Fragment></React.Fragment>
// 3. You can use bootstrap 5 and CSS
const {
  // if you want use history.push you should use "withRouter"
 // you can add others functions of react-router-dom here:
 HashRouter
} = ReactRouterDOM


// You can add other components here

/**
* Change_page - THis function is to change the usestate method select
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: None
*/

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

/**
* Navc - THis the fucntional component to create new Header
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: 
*		- Header with buttons select pages
*/
const NavC = ({setLogin, setUpl_Img, setuploaded}) => {
       
   return (
           <div className="Head">
           <header className="header">
                           <h1 className="logo"><a href="#" className="a_head">MyApp</a></h1>
           <ul className="main-nav">
             <li><a href="#/" id="go-to-home" onClick={() => change_page(setLogin, "page-1", setUpl_Img, setuploaded)}>page-1</a></li>
             <li><a href="#/page-2" id="go-to-second-page" onClick={() => change_page(setLogin, "page-2", setUpl_Img, setuploaded)} >page-2</a></li>
           </ul>
       </header> 
           </div>
   );
};


/**
* Change_pagee - THis function is to change the usestate method select to button login
* @form: it is contain the data inserted
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: None
*/
function change_pagee(form, setLogin, page, setUpl_Img,setuploaded){

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

/**
* ImgCard - THis the fucntional component to render image card 
* @props: This is to properti immg container
* Return: 
*		- New card Image
*/

const ImgCard = (props) => {
   const [imageUrl, setImageUrl] = React.useState(null);

   const printImage = () => {
           var image = document.getElementById("image-url");
           setImageUrl(props);
   };
   const parsed = JSON.stringify(props)
   const url_parsed = (JSON.parse(parsed))
   return (
       <div className="img-card">
       <img src={url_parsed.props}></img>
       <p className="prg">Programing is Fun</p>
       </div>
   );
};

/**
* Foot - THis the fucntional component to create new footer
* Return: 
*		- New footer
*/

const Foot = () => {
       
   return (
           <div className="foot">
       <footer>
   <span>_</span>
         </footer>
           </div>
   );
};

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

/**
* App - THis the App
* Return: 
*		- New App
*/    
const App = () => {
   return (
     <div>
       <Login></Login>
     </div>
   )
}