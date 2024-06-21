import { StaticImageData } from "next/image";


export interface IPortolioData {
    id: number,
    name:string,
    category: number,
    descriptions: Array<{
        id: number;
        keterangan: string;
    }>;
    techStacks:Array<number>,
    repoLink: string,
    demoLink: string,
    portofolioImageUrl: StaticImageData
}


export interface IStacksList {
    id: number,
    alt: string,
    src: StaticImageData
}

export interface ILinkData{
    CV: string,
    LinkedIn:string
    Github: string
}

export interface IWorkingExperience {
    id: number;
    companyName: string;
    duration: string;
    position: string;
    jobDescs: Array<{
      id: number;
      keterangan: string;
    }>;
  }
  