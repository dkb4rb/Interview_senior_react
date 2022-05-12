import React from "react";
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
    console.log(props)
    return (
        <div className="img-card">
        <img alt="Imagen cargada" src={url_parsed.props}></img>
        <p className="prg">Programing is Fun</p>
        </div>
    );
};


export default ImgCard;