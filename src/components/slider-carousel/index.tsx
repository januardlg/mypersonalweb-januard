import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IStacksList } from "./stakcsList";

export const SliderCarousel = ({contents}:{contents: Array<IStacksList>}) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Slider {...settings}>
        {contents?.map((item: any) => (
          <div key={item.id}>
            <Image
              src={item?.src}
              alt={item?.alt}
              style={{
                display: "flex",
                //   margin: "0px auto",
                height: "96px",
                objectFit: "scale-down",
                width: "96px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
