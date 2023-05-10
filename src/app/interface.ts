export interface Dato{
    id?:number;
    img:string;
    title:string;
    detail:string;
    nombre?:string;
    logo?:string;
}
export interface Banner{
    urlImgBanner:string;
    tituloBanner:string;
    detalleBanner:string;
}
export interface DB {
    header:    Dato[];
    aboutMe:   Dato[];
    works:     Dato[];
    education: Dato[];
}

