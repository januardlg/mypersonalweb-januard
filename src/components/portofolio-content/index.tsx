import { FunctionComponent } from "react";
import { PortofolioContentType } from "./portofolio-content";

export const PortofolioContent: FunctionComponent<PortofolioContentType> = ({
  isOdd,
}) => {
  return (
    <div className="grid grid-cols-2 h-full">
      {isOdd ? (
        <>
          <div className="w-full bg-[#1F242C] h-full text-white flex items-center px-[60px]">
            <div>
              <p className="font-bold text-2xl">TourId</p>
              <div>Keterangan</div>
            </div>
          </div>
          <div>Image</div>
        </>
      ) : (
        <>
          <div>Image</div>
          <div className="w-full bg-[#1F242C] h-full text-white flex items-center px-[60px]">
            <div>
              <p className="font-bold text-2xl">TourId</p>
              <div>Keterangan</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
