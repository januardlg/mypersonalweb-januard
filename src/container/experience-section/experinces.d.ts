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
