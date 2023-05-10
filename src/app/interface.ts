export interface Dato{
    id?:number;
    img:string;
    title:string;
    detail:string;
    nombreApellido?:string;
    logo?:string;
}

export interface DB {
    header:    Dato[];
    aboutMe:   Dato[];
    works:     Dato[];
    education: Dato[];
}

