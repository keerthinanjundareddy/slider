import React, { useState } from 'react';
// https://github.com/dtvi2412/use-react-slick-2022/blob/main/src/App.css link of github
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Synthesis.css';
import { dataDigitalBestSeller } from '../data'
// import imgGirl from './assets/images/defaultImage.jpg';

function Synthesis() {
  const [defaultImage, setDefaultImage] = useState({});
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     // linkDefault: imgGirl,
  //   }));
  // };

  return (
    <div className="App">
      <div style={{textAlign:"center",color:"black",textTransform:"uppercase"}}><b>OUR-OFFERS(Brand Strategy Content & Technology)</b></div>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
         <div style={{width:"50px",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}><img src={item.linkImg} alt="imageone" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
              <div style={{color:"black",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",textTransform:"uppercase"}}>{item.price}</div>
              <div className="category" style={{color:"grey",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}}>{item.category}</div>
            {/* </div> */}
          </div>
     
        ))}
      </Slider>
    </div>
  );
}

export default Synthesis;