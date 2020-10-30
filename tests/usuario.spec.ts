import Usuario from '../src/usuario';
import Serie from '../src/serie'
import { expect } from 'chai';

var usuario = new Usuario('Andy');
var serie = new Serie('Fairy Tail', 'Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
serie.anadirCapitulo(1, 'https://www3.animeflv.net/ver/fairy-tail-1');

usuario.anadirSerie(serie);

describe('Test para clase Usuario', function() {
    it('Se espera que devuelva el nick del usuairo', function() {
        expect(usuario.nick).equal('Andy');
    });
    it('Se espera que devuelva el nombre del usuario', function() { 
        expect(usuario.nombre).equal('');
    })
    it('Se espera que devuelva la serie', function() {
        expect(usuario.getSerie('Fairy Tail')).equal(serie);
     })
    it('Se espera que devuelva un error al no encontrar la serie borrada', function() {
        usuario.borrarSerie(serie);
        expect(function(){usuario.getSerie('Fairy Tail');}).to.throw();
    })
    it('Se espera que devuelva un error al añadir una serie que ya existe', function(){ 
        usuario.anadirSerie(serie);
        expect(function(){usuario.anadirSerie(serie);}).to.throw();
    })
    it('Se espera que devuelva un error al intentar borrar una serie que no tienes', function(){ 
        usuario.borrarSerie(serie)
        expect(function(){usuario.borrarSerie(serie);}).to.throw();
    })
});


