import React, {useContext} from "react";

import { AppContext } from "@/pages/_app";

import { IBiodatas } from "./biodatas";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { ICertification } from "./certification";

import { SliderCarousel } from "@/components";
import { AppContextType } from "@/pages/app";
import { STACKS_LOGOS } from "@/data-master/data-master";

export const IntroductionSection = () => {

  const {introductionRef} = useContext(AppContext) as AppContextType
  
  const BIODATAS: Array<IBiodatas> = [
    {
      label: "Phone",
      value: "081******687",
      icon: <FaPhoneAlt fontSize={20} color="white" />,
    },
    {
      label: "Email",
      value: "januargaol48@gmail.com",
      icon: <MdEmail fontSize={20} color="white" />,
    },
    {
      label: "LinkedIn",
      value: "Januard Lumbangaol",
      icon: <FaLinkedin fontSize={20} color="white" />,
    },
    {
      label: "Github",
      value: "januard064",
      icon: <FaGithub fontSize={20} color="white" />,
    },
  ];

  const CERTIFICATION: Array<ICertification> = [
    {
      label: "Next.js & React - The Complete Guide ",
      provider: "Udemy",
      year: "2023",
    },
    {
      label: "Server-side Development with NodeJS, Express and  MongoDB",
      provider: "Udemy",
      year: "2022",
    },
    {
      label: "Front-End Web Development with React",
      provider: "Coursera",
      year: "2021",
    },
  ];


  return (
    <div ref={introductionRef} className="bg-[#1F242C] py-24 px-40 text-white ">
      <div className="font-bold text-[32px]">Januard Pardo Lumbangaol</div>
      <div className="mt-2 text-xl leading-7">
        With more than two years of hands-on experience as a Frontend Developer,
        I&rsquo;m passionate about using cutting-edge technologies to create
        exceptional user experiences. I maintain a commitment to continuous
        learning, and staying up-to-date with the latest trends and
        technologies. This approach ensures that I can readily adapt to new
        challenges and embrace emerging opportunities in this dynamic field.
      </div>
      <div className="mt-6 flex justify-between items-center">
        {BIODATAS.map((biodata, index) => (
          <div key={index} className="flex items-center space-x-4">
            {biodata.icon}
            <div>{biodata.value}</div>
          </div>
        ))}
      </div>
      <div className=" mt-[82px] font-bold text-[32px]">Certification</div>
      {CERTIFICATION.map((certifcation, index) => (
        <div key={certifcation.label + "" + index}>
          <div className="mt-6 font-bold">{certifcation.label}</div>
          <div className="mt-1">
            {certifcation.provider}, {certifcation.year}
          </div>
        </div>
      ))}

    <div className=" mt-[82px] font-bold text-[32px]">Skill Stacks</div>
      <div className="mt-8">
        <SliderCarousel contents={STACKS_LOGOS}  />
      </div>
    </div>
  );
};
