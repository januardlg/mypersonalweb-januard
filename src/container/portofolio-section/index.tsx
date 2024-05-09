import React, { useContext } from "react";

import { PortofolioContent } from "@/components";
import { AppContextType } from "@/pages/app";
import { AppContext } from "@/pages/_app";

export const PortofolioSection = () => {

  const {portofolioRef} = useContext(AppContext) as AppContextType

  return (
    <div ref={portofolioRef} className="section-container">
      <div className="flex h-full w-full overflow-y-scroll">
        {[0,1].map((data: any) => (
          <div key={data} className="h-full">
            <PortofolioContent />
          </div>
        ))}
      </div>
    </div>
  );
};
