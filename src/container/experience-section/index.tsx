import React, { useContext } from "react";
import { Stepper } from "@/components";
import { IWorkingExperience } from "./experinces";
import { AppContext } from "@/pages/_app";
import { AppContextType } from "@/pages/app";


export const ExperienceSection = () => {

  const {experienceRef} = useContext(AppContext) as AppContextType

  const WORKING_EXPERIENCES: Array<IWorkingExperience> = [
    {
      id: 0,
      companyName: "Terralogiq Integrasi Solusi",
      duration: "November 2023 - present",
      position: "Frontend Developer",
      jobDescs: [
        {
          id: 0,
          keterangan: "Develop CMS for Tapera Digital Service",
        },
        {
          id: 1,
          keterangan:
            "Housing Application System for Stok Rumah Tapera using Typescript and Next.js",
        },
      ],
    },
    {
      id: 1,
      companyName: "Commsult Indonesia",
      duration: "January 2022 - November 2023",
      position: "Frontend Developer",
      jobDescs: [
        {
          id: 0,
          keterangan:
            "Build new features and implement design changes for web based logistic management applications using React.js, Material-UI, and Here Maps API. ",
        },
        {
          id: 1,
          keterangan:
            "Develop PWA(Progressive Web Application) interface for the ETA system using React.js.",
        },
        {
          id: 2,
          keterangan: "Resolve Frontend related issues.",
        },
      ],
    },
    {
      id: 2,
      companyName: "Indosurya Life",
      duration: "June 2020 - October 2020",
      position: "Web Developer Intern",
      jobDescs: [
        {
          id: 0,
          keterangan: "Learn ASP.NET MVC monitored by supervisor",
        },
        {
          id: 1,
          keterangan:
            "Analyze requirements and build intranet portal system using ASP.NET MVC",
        },
      ],
    },
  ];

  return (
    <div ref={experienceRef} className="bg-[#F4F6F7] section-container py-24 px-40">
      {WORKING_EXPERIENCES.map((experience, index) => (
        <Stepper
          key={`experience-${experience.id}`}
          experience={experience}
          isLast={index === WORKING_EXPERIENCES.length - 1}
        />
      ))}
    </div>
  );
};
