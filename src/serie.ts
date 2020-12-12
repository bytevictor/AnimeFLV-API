import { obtenerVideofromLink } from './downloader'; 

export default class Serie {
    private _titulo: string;
    private _descripcion: string;
    private _caratula: string; //blob
    //Link de la página principal de la serie
    private _link: string;
    //Array con los links de capitulos que forman la serie
    private _capitulos = new Map<number, string>();

    constructor(titulo: string, descripcion: string, link: string){
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._link = link;
    }

    get titulo(): string{
        return this._titulo;
    }

    get descripcion(): string{
        return this._descripcion;
    }

    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }

    get numero_capitulos(): number{
        return this._capitulos.size
    }

    get map_capitulos(){
        return this._capitulos    
    }

    get link(): string{
        return this._link;
    }
    
    set caratula(caratula: string){
        this._caratula = caratula;
    }

    get caratula(): string{
        return this._caratula;
    }


    anadirCapitulo(numero_capitulo: number, link_capitulo: string ){
        if( ! this._capitulos.has(numero_capitulo) ){
            this._capitulos.set(numero_capitulo, link_capitulo);
        } else {
            throw new Error("Ya existe el capitulo: " + numero_capitulo);
        }
    }

    borrarCapitulo(numero_capitulo: number){
        if( this._capitulos.has(numero_capitulo) ){
            this._capitulos.delete(numero_capitulo);
        } else {
            throw new Error("El capitulo que intentas borrar no existe: " + numero_capitulo);
        }
    }

    getLinkCapitulo(numero_capitulo: number): string{
        if( this._capitulos.has( numero_capitulo )){
            return this._capitulos.get(numero_capitulo);
        } else {
            throw new Error("El capitulo no existe: " + numero_capitulo);
        }
    }

    descargarSerie(){
        for (let [numero, link] of this._capitulos) {
            obtenerVideofromLink(link);
        }
    }

}

