import React from "react";
import change_page from "./change_page";



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

export default NavC;