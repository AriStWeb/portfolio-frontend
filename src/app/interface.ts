export interface Dato {
    id?: number;
    url: string;
    title: string;
    detail: string;
    nombreApellido?: string;
    logo?: string;
    telefono?: string;
    direccion?: string;

}

export interface Persona {
    id: number;
    urlFotoPerfil: string;
    titulo: string;
    edad: string;
    sobreMi: string;
    nombreApellido: string;
    telefono: string;
    direccion: string;
}

export interface Banner {
    id: number;
    tituloBanner: string;
    fraseBanner: string;
    urlImgBanner: string;
}

export interface ExperienciaLaboral {
    id: number;
    nombreExpLab: string;
    descripcionExpLab: string;
    anioInicioExpLab: number;
    anioFinExpLab: number;
    nombreLugarExpLab: string;
    imgExpLab: string;
}

export interface Educacion {
    id: number;
    nombre_educ: string;
    descripcionEduc: string;
    anioInicioEduc: number;
    anioFinEduc: number;
    nombreOrgEduc: string;
    imgEduc: string;
}

export interface Tecnologia {
    id: number;
    nombreTecn: string;
    nivel: number;
    urlImgTecn: string;
}

export interface Proyecto{
   id: number;
   nombreProyecto: string;
   descripcionProyecto: string;
   urlImgProyecto: string;
}

export interface DB {
    header: Dato[];
    aboutMe: Dato[];
    works: Dato[];
    education: Dato[];
}

