/**
* Change_page - THis function is to change the usestate method select
* @setLogin: This is the method to select login panel
* @setUpl_Img: This methos is for active the hook to upload image
* @setuploaded: This is method to select and show image upload
* Return: None
*/

function change_page(setLogin, page, setUpl_Img,setuploaded){

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
export default change_page;