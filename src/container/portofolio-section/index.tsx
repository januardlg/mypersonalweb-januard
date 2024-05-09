import React, { useContext } from "react";

import { PortofolioContent } from "@/components";
import { AppContextType } from "@/pages/app";
import { AppContext } from "@/pages/_app";

export const PortofolioSection = () => {

  const {portofolioRef} = useContext(AppContext) as AppContextType

  return (
    <div ref={portofolioRef} >
      {/* <div className="flex h-full w-full overflow-y-scroll"> */}
        {[0,1,2].map((data: any, index: number) => (
          <div key={data} className="section-container">
            <PortofolioContent  key={data} isOdd={ index % 2 === 1 } />
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};
