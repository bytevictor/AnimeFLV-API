class Serie {
    titulo: string;
    descripcion: string;
    numero_capitulos: bigint;

    constructor(titulo: string, descripcion: string, numero_capitulos: bigint){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.numero_capitulos = numero_capitulos;
    }

    descargarSerie(){
        throw new Error("not Implemented");
    }

}