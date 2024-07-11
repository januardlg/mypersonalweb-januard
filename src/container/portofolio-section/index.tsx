import React, { useContext } from "react";

import { PortofolioContent } from "@/components";
import { AppContextType } from "@/pages/app";
import { AppContext } from "@/pages/_app";
import { PORTOFOLIO_DATAS } from "@/data-master/data-master";
import { IPortolioData } from "@/data-master/data-mater";
import clsx from "clsx";

export const PortofolioSection = () => {
  const { portofolioRef } = useContext(AppContext) as AppContextType;

  return (
    <div ref={portofolioRef} className={clsx("space-y-16","sm:space-y-0")}>
      {/* <div className="flex h-full w-full overflow-y-scroll"> */}
      {PORTOFOLIO_DATAS.map((portofolio: IPortolioData, index: number) => (
        <div key={portofolio.id} className={clsx("", "sm:section-container")}>
          <PortofolioContent data={portofolio} isOdd={index % 2 === 1} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};
