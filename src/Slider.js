import React, { useState } from "react";
import "./Slider.css";
import ImgComp from "./ImgComp";
import slideimg1 from "./img/slideimg1.jpg";
import slideimg2 from "./img/slideimg2.jpg";
import slideimg3 from "./img/slideimg3.jpg";
import slideimg4 from "./img/slideimg4.jpg";
import slideimg5 from "./img/slideimg5.jpg";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Slider() {
  let sliderArr = [
    <ImgComp src={slideimg1} />,
    <ImgComp src={slideimg2} />,
    <ImgComp src={slideimg3} />,
    <ImgComp src={slideimg4} />,
    <ImgComp src={slideimg5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <NavigateBeforeIcon style={{ fontSize: 60, color: "white" }} />
      </button>
      <button id="goRight" onClick={goRight}>
        <NavigateNextIcon style={{ fontSize: 60, color: "white" }} />
      </button>

      {/*  <div className="slider">
          <figure>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              alt=""
            />
          </figure>
        </div> */}
    </div>
  );
}

export default Slider;
