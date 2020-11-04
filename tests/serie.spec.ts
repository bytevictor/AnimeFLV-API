import Serie from '../src/serie';
import { expect } from 'chai';

var serie = new Serie('Fairy Tail', 'Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
serie.anadirCapitulo(1, 'https://www3.animeflv.net/ver/fairy-tail-1');
serie.anadirCapitulo(2, 'https://www3.animeflv.net/ver/fairy-tail-2');

describe('Test para clase Serie', function() {
    it('Se espera que devuelva el titulo de la serie', function() {
        expect(serie.titulo).equal('Fairy Tail');
    });
    it('Se espera que devuelva la descripción de la serie', function() { 
        expect(serie.descripcion).equal('Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
    });
    it('Se espera que devuelva el numero de capitulos de la serie', function() {
        expect(serie.numero_capitulos).equal(2);
     });
    it('Se espera que devuelva el link del capitulo 1', function() {
        expect(serie.getLinkCapitulo(1)).equal('https://www3.animeflv.net/ver/fairy-tail-1');
    });
    it('Se espera que devuelva un error al buscar un capitulo inexistente', function(){ 
        expect(function(){serie.getLinkCapitulo(5);}).to.throw();
    });

    it('Se espera que devuelva la nueva descripción al cambiarla', function() {
        serie.descripcion = "El gremio de magos Fairy Tail es el más temido de todo el reino. Allí conviven los magos más duros, los más atrevidos… y los más destructivos. Lucy es una chica que quiere ingresar en Fairy Tail, para poder desarrollar sus poderes mágicos y cumplir los encargos que le puedan salir desde el gremio."
        expect(serie.descripcion).equal('El gremio de magos Fairy Tail es el más temido de todo el reino. Allí conviven los magos más duros, los más atrevidos… y los más destructivos. Lucy es una chica que quiere ingresar en Fairy Tail, para poder desarrollar sus poderes mágicos y cumplir los encargos que le puedan salir desde el gremio.');
    });

    it('Se espera que devuelva un error al añadir un capítulo duplado', function() {
        expect(function(){serie.anadirCapitulo(1, 'https://www3.animeflv.net/ver/fairy-tail-1');}).to.throw();
    });

    it('Se espera que se borre correctamente un capítulo si existe', function() {
        expect(serie.numero_capitulos).equal(2);
        serie.borrarCapitulo(2)
        expect(serie.numero_capitulos).equal(1);
     });

     it('Se espera que se devuelva error al borrar un capítulo si no existe', function() {
        expect(function(){serie.borrarCapitulo(2);}).to.throw();
     });

     it('Se espera que se devuelva error descargar una serie ya que no está implementado', function() {
        expect(function(){serie.descargarSerie();}).to.throw();
     });


});


