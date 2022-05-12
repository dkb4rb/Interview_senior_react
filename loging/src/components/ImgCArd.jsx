import React from "react";

/**
* ImgCard - THis the fucntional component to render image card 
* @props: This is to properti immg container
* Return: 
*		- New card Image
*/

const ImgCard = (props) => {
    // eslint-disable-next-line 
    const [imageUrl, setImageUrl] = React.useState(null);
    // eslint-disable-next-line 
    const printImage = () => {
        // eslint-disable-next-line 
        var image = document.getElementById("image-url");
            setImageUrl(props);
    };
    const parsed = JSON.stringify(props)
    const url_parsed = (JSON.parse(parsed))
    return (
        <div className="img-card">
        <img alt="charged"  src={url_parsed.props}></img>
        <p className="prg">Programing is Fun</p>
        </div>
    );
 };


export default ImgCard;