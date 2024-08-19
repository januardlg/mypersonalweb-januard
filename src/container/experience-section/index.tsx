import React, { useContext } from "react";
import { Stepper } from "@/components";
import { AppContext } from "@/pages/_app";
import { AppContextType } from "@/pages/app";

import { motion, Variants } from "framer-motion";

// master data
import { WORKING_EXPERIENCES } from "@/data-master/data-master";
import clsx from "clsx";

export const ExperienceSection = () => {
  const { experienceRef } = useContext(AppContext) as AppContextType;

  const fadeUpVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 10,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <div
      ref={experienceRef}
      className={clsx("bg-[#F4F6F7]  py-[60px] px-4", "sm:py-24 sm:px-40")}
    >
      {WORKING_EXPERIENCES.toSorted((a, b) => b.id - a.id).map(
        (experience, index) => (
          <motion.div
            key={`experience-${experience.id}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={fadeUpVariants}>
              <Stepper
                key={`experience-${experience.id}`}
                experience={experience}
                isLast={index === WORKING_EXPERIENCES.length - 1}
              />
            </motion.div>
          </motion.div>
        )
      )}
    </div>
  );
};
