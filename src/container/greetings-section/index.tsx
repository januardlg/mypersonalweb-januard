import React from "react";

import { FaCode } from "react-icons/fa6";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

import profileImage from "../../../public/images/profile.png";
import codeAnimation from "../../../public/animations/code-animation.json";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { Button } from "@/components";
import { PiArrowUpRightBold } from "react-icons/pi";

export const GreetingSection = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex justify-center items-center space-x-16">
        <div>
          <p className="text-4xl leading-[58px]">Hey there,</p>
          <p className="text-5xl font-bold leading-[58px]">
            I’m Januard Lumbangaol,
          </p>
          <div className="flex items-center relative mt-[-10px]">
            <p className="text-4xl font-bold leading-[58px] flex items-center absolute z-10">
              A Frontend Developer
            </p>
            <div className="ml-80 mt-3">
              <Player
                src={codeAnimation}
                autoplay
                loop
                style={{ height: "100px", width: "auto" }}
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button icon={<PiArrowUpRightBold size={20} color="white" />}><p className="text-lg font-bold">Resume</p></Button>
            <BiLogoInstagramAlt size={48} color="#2A2C32" />
            <IoLogoLinkedin size={48} color="#2A2C32" />
          </div>
        </div>
        <div>
          <Image
            src={profileImage}
            width={507}
            height={401}
            alt="inage-profile"
          />
        </div>
      </div>
    </div>
  );
};
