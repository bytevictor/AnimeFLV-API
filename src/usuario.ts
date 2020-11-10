import Serie from './serie'; 

export default class Usuario {
    //El nick se utiliza como id, es único para cada usuario
    private _nick: string;
    private _nombre: string;
    private _listaseries: Serie[] = [];

    constructor(nick: string, nombre: string = ''){
        this._nick = nick;
        this._nombre = nombre;
    }

    get nick(): string{
        return this._nick;
    }

    get nombre(): string{
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get listaseries(): Serie[]{
        return this._listaseries;
    }

    //devuelve el index de la serie, si no encuentra devuelve -1
    private hasSerie(serie : Serie): number{
        let i : number = 0;
        for( let serie_listada of this._listaseries){
            if( serie.titulo == serie_listada.titulo){
                return i;
            }
            i += 1;
        }
        return -1;
    }

    anadirSerie(serie : Serie){
        if( this.hasSerie(serie) == -1 ){
            this._listaseries.push(serie)
        } else {
            throw new Error("Ya tienes esa serie listada: " + serie.titulo);
        }
    }

    borrarSerie(serie : Serie){
        let index_serie = this.hasSerie(serie);
        if( index_serie >= 0){
            this._listaseries.splice(index_serie, 1);
        } else {
            throw new Error("La serie que intentas borrar no existe: " + serie.titulo);
        }
    }

    getSerie(titulo: string): Serie{
        let serie = new Serie(titulo, "", "");
        let index_serie = this.hasSerie( serie );
        if( index_serie >= 0 ){
            return this._listaseries[index_serie];
        } else {
            throw new Error("No tienes esa serie: " + titulo);
        }
    }

    
}