import React from "react";
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


export default ImgCard;