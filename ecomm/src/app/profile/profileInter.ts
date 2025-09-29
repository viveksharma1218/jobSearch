export interface profileInt{
    id:number;
    title:string;
    company:string;
    location:string;
    type:string;
    salary:string;
    description:string;
    requirements:string[];
    benefits:string[];
    postedDate:Date;
    experience:string;
    tags:string[];
    applylink:string;
}
export interface Job {
  id: number;
  title: string;
  company: string;
  description: string; // The full information
  salary: string;
}