import React from "react";
import change_page from "./change_page";

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



export default NavC;