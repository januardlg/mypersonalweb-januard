import React, { useContext } from "react";

import { AppContext } from "@/pages/_app";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

import profileImage from "../../../public/images/profile.png";
import codeAnimation from "../../../public/animations/code-animation1.json";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { Button } from "@/components";
import { PiArrowUpRightBold } from "react-icons/pi";
import { AppContextType } from "@/pages/app";

export const GreetingSection = () => {

  const {greetingRef} = useContext(AppContext) as AppContextType

  return (
    <div ref={greetingRef} className="bg-[#F4F6F7] section-container">
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
            <Button variant="Primary" icon={<PiArrowUpRightBold size={20} color="white" />}>
              <p className="text-lg font-bold">Resume</p>
            </Button>
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
