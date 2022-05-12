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
export default change_page;