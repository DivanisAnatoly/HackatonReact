import internal from "stream";

export interface SendResumeRequest {
    candidate:CandidateDTO;
    resume:ResumeDTO;
}

export type CandidateDTO = {
    name:string;
    phone:string;
}

export type ResumeDTO = {
    position:number;
    skillsInfo: { [key: string]: string; };
}