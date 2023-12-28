import exp from "constants";

export interface Education {
    institute:string;
    course:string;
    duration:string;
    specialization:string;
}

export interface Work {
    role: string;
    company: string;
    duration: string;
    description: string [] ;
}