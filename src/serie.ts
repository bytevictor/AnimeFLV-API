
class Serie {
    private _titulo: string;
    private _descripcion: string;
    private _numero_capitulos: number = 0;
    //Array con los links de capitulos que forman la serie
    private _capitulos = new Map<number, string>();

    constructor(titulo: string, descripcion: string){
        this._titulo = titulo;
        this._descripcion = descripcion;
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
        return this._numero_capitulos;
    }

    anadirCapitulo(numero_capitulo: number, link_capitulo: string ){
        if( ! this._capitulos.has(numero_capitulo) ){
            this._capitulos.set(numero_capitulo, link_capitulo);
            this._numero_capitulos++;
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
        throw new Error("not Implemented");
    }

}


export default Serie;