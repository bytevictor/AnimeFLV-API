import Serie from '../src/serie';
import { expect } from 'chai';

var serie = new Serie('Fairy Tail', 'Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
serie.anadirCapitulo(1, 'https://www3.animeflv.net/ver/fairy-tail-1');

describe('Test para clase Serie', function() {
    it('Se espera que devuelva el titulo de la serie', function() {
        expect(serie.titulo).equal('Fairy Tail');
    });
    it('Se espera que devuelva la descripción de la serie', function() { 
        expect(serie.descripcion).equal('Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
    })
    it('Se espera que devuelva el numero de capitulos de la serie', function() {
        expect(serie.numero_capitulos).equal(1);
     })
    it('Se espera que devuelva el link del capitulo 1', function() {
        expect(serie.getLinkCapitulo(1)).equal('https://www3.animeflv.net/ver/fairy-tail-1');
    })
    it('Se espera que devuelva un error al buscar un capitulo inexistente', function(){ 
        expect(serie.getLinkCapitulo(5)).to.throw();
    })
});


