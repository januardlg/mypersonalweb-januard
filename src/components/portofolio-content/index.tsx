import { FunctionComponent } from "react";
import { PortofolioContentType } from "./portofolio-content";
import { Button } from "../button";
import { STACKS_LOGOS } from "@/data-master/data-master";
import { IPortolioData, IStacksList } from "@/data-master/data-mater";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export const PortofolioContent: FunctionComponent<PortofolioContentType> = ({
  isOdd,
  data,
}: {
  isOdd: boolean;
  data: IPortolioData;
}) => {
  let usedStacks = STACKS_LOGOS.filter((masterStacs: any) => {
    return data?.techStacks.some((idUsedStacsk: any) => {
      return idUsedStacsk === masterStacs.id;
    });
  });

  return (
    <>
      <div className={clsx("block", "sm:hidden")}>
        <div className="bg-[#F4F6F7] ">
          <Image
            src={data?.portofolioImageUrl}
            alt={data?.name}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
          />
        </div>
        <div className="w-full bg-[#1F242C] text-white px-4 py-10">
          <div>
            <p className="font-bold text-2xl mb-1">{data?.name}</p>
            {/* <Chip label={data?.category} /> */}
            <div className="mt-4">
              {data?.descriptions.length > 1 ? (
                <ul className="list-disc pl-4">
                  {data?.descriptions.map((jobDesc: any) => (
                    <li key={`jobDesc-${jobDesc.id}`} className="leading-8">
                      {jobDesc?.keterangan}
                    </li>
                  ))}
                </ul>
              ) : (
                <div>{data?.descriptions[0].keterangan}</div>
              )}
            </div>
            <div className="mt-4 flex items-center space-x-4">
              {usedStacks.map((usedStack: IStacksList) => (
                <Image
                  key={`stack-${usedStack?.alt}`}
                  src={usedStack?.src}
                  alt={usedStack?.alt}
                  width={30}
                  height={30}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Link href={data?.repoLink} target="_blank">
                <Button variant="Underline">Repository</Button>
              </Link>
              <Link href={data?.demoLink} target="_blank">
                <Button variant="Underline">View Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className={clsx("hidden", "sm:grid sm:grid-cols-2 sm:h-full")}>
        {isOdd ? (
          <>
            <div className="w-full bg-[#1F242C] h-full text-white flex items-center px-[60px]">
              <div>
                <p className="font-bold text-2xl mb-1">{data?.name}</p>
                {/* <Chip label={data?.category} /> */}
                <div className="mt-4">
                  {data?.descriptions.length > 1 ? (
                    <ul className="list-disc pl-4">
                      {data?.descriptions.map((jobDesc: any) => (
                        <li key={`jobDesc-${jobDesc.id}`} className="leading-8">
                          {jobDesc?.keterangan}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>{data?.descriptions[0].keterangan}</div>
                  )}
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  {usedStacks.map((usedStack: IStacksList) => (
                    <Image
                      key={`stack-${usedStack?.alt}`}
                      src={usedStack?.src}
                      alt={usedStack?.alt}
                      width={30}
                      height={30}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <Link href={data?.repoLink} target="_blank">
                    <Button variant="Underline">Repository</Button>
                  </Link>
                  <Link href={data?.demoLink} target="_blank">
                    <Button variant="Underline">View Demo</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#F4F6F7] ">
              <Image
                src={data?.portofolioImageUrl}
                alt={data?.name}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#F4F6F7] ">
              <Image
                src={data?.portofolioImageUrl}
                alt={data?.name}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
            <div className="w-full bg-[#1F242C] h-full text-white flex items-center px-[60px]">
              <div>
                <p className="font-bold text-2xl mb-1">{data?.name}</p>
                {/* <Chip label={data?.category} /> */}
                <div className="mt-4">
                  {data?.descriptions.length > 1 ? (
                    <ul className="list-disc pl-4">
                      {data?.descriptions.map((jobDesc: any) => (
                        <li key={`jobDesc-${jobDesc.id}`} className="leading-8">
                          {jobDesc?.keterangan}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>{data?.descriptions[0].keterangan}</div>
                  )}
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  {usedStacks.map((usedStack: IStacksList) => (
                    <Image
                      key={`stack-${usedStack?.alt}`}
                      src={usedStack?.src}
                      alt={usedStack?.alt}
                      width={30}
                      height={30}
                    />
                  ))}
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <Link href={data?.repoLink} target="_blank">
                    <Button variant="Underline">Repository</Button>
                  </Link>
                  <Link href={data?.demoLink} target="_blank">
                    <Button variant="Underline">View Demo</Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
