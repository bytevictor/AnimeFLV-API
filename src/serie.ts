class Serie {
    private _titulo: string;
    private _descripcion: string;
    private _numero_capitulos: number = 0;
    //Array con los links de capitulos que forman la serie
    private capitulos: string[];

    constructor(titulo: string, descripcion: string, numero_capitulos: number){
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._numero_capitulos = numero_capitulos;
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

    anadirCapitulo(){
        throw new Error("not Implemented");
    }

    descargarSerie(){
        throw new Error("not Implemented");
    }

}