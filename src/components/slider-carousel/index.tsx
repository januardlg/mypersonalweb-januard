import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IStacksList } from "./stakcsList";

// context
import { AppContext } from "@/pages/_app";

// interface
import { AppContextType } from "@/pages/app";

export const SliderCarousel = ({
  contents,
}: {
  contents: Array<IStacksList>;
}) => {
  const { isMobile } = useContext(AppContext) as AppContextType;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on the first render
  }

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: isMobile ? 2 : 7,
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
