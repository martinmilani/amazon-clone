import React from "react";

function ImgComp({ src }) {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  };
  return <img src={src} alt="slide-img" style={imgStyles}></img>;
}

export default ImgComp;
