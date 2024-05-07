import React from "react";

import { PortofolioContent } from "@/components";

export const PortofolioSection = () => {
  return (
    <div className="section-container">
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
