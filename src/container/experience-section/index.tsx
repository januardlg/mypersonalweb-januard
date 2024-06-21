import React, { useContext } from "react";
import { Stepper } from "@/components";
import { AppContext } from "@/pages/_app";
import { AppContextType } from "@/pages/app";

// master data
import { WORKING_EXPERIENCES } from "@/data-master/data-master";


export const ExperienceSection = () => {

  const {experienceRef} = useContext(AppContext) as AppContextType

  

  return (
    <div ref={experienceRef} className="bg-[#F4F6F7] py-24 px-40">
      {WORKING_EXPERIENCES.toSorted((a,b) => b.id - a.id).map((experience, index) => (
        <Stepper
          key={`experience-${experience.id}`}
          experience={experience}
          isLast={index === WORKING_EXPERIENCES.length - 1}
        />
      ))}
    </div>
  );
};
