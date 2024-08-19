import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

import { AppContext } from "@/pages/_app";
import { AppContextType } from "@/pages/app";

// component
import { Player } from "@lottiefiles/react-lottie-player";

import clsx from "clsx";

// assets
import profileImage from "../../../public/images/profile.png";
import codeAnimation from "../../../public/animations/code-animation1.json";
import { IoLogoLinkedin } from "react-icons/io";
import { PiArrowUpRightBold } from "react-icons/pi";
import { FaGithubSquare } from "react-icons/fa";

// component
import { Button } from "@/components";

// master data
import { LINK_MASTER_DATA } from "@/data-master/data-master";
import Typewriter from "@/components/typewriter";

export const GreetingSection = () => {
  const { greetingRef } = useContext(AppContext) as AppContextType;

  return (
    <div ref={greetingRef} className="bg-[#F4F6F7] section-container">
      <div
        className={clsx(
          "h-full w-full p-4 block items-center space-y-10  ",
          "sm:flex sm:justify-center sm:space-x-16 sm:space-y-0"
        )}
      >
        <div className="greeting-content h-[50%] sm:h-full">
          <div>
            {/* <p className="text-4xl leading-[58px]">Hey there,</p> */}
            <Typewriter text="Hey there," />
            <p className="text-5xl font-bold leading-[58px] mt-6">
              I’m Januard Lumbangaol,
            </p>
            <div className="flex items-center relative mt-[-10px]">
              <p
                className={clsx(
                  "text-2xl font-bold leading-[58px] flex items-center absolute z-10",
                  " sm:text-4xl"
                )}
              >
                Frontend Developer
              </p>
              <div className={clsx("ml-[172px]  mt-3", "sm:ml-[280px]")}>
                <Player
                  src={codeAnimation}
                  autoplay
                  loop
                  style={{ height: "100px", width: "auto" }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href={LINK_MASTER_DATA.CV} target="_blank">
                <Button
                  variant="Primary"
                  icon={<PiArrowUpRightBold size={20} color="white" />}
                >
                  <p className="text-lg font-bold">Resume</p>
                </Button>
              </Link>
              <Link href={LINK_MASTER_DATA.LinkedIn} target="_blank">
                <IoLogoLinkedin size={48} color="#2A2C32" />
              </Link>
              <Link href={LINK_MASTER_DATA.Github} target="_blank">
                <FaGithubSquare size={42} color="#2A2C32" />
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx("greeting-content h-[50%]", "sm:ml-[280px]")}>
          <div>
            <Image
              src={profileImage}
              width={507}
              height={401}
              alt="image-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
