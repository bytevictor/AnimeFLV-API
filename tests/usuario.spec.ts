import Usuario from '../src/usuario';
import Serie from '../src/serie'
import { expect } from 'chai';

var usuario = new Usuario('Andy');

var serie = new Serie('Fairy Tail', 'Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón.');
var serie2 = new Serie('Dragon Ball Super', 'Después de derrotar a Majin Buu, la vida vuelve a ser tranquila una vez más. Goku vuelve a trabajar otra vez ya que Chichi le ordena que gane dinero, aunque él quiere seguir entrenando. Mientras, Goten, a punto de convertirse en cuñado de Videl, se embarca en un viaje con Trunks para encontrar un regalo para ella.');
var serie3 = new Serie('Death Note', 'Light Yagami es un excelente estudiante japonés que ha tenido una vida aburrida. Esto cambia radicalmente cuando encuentra tirado en el suelo un cuaderno conocido como Death Note.');

serie.anadirCapitulo(1, 'https://www3.animeflv.net/ver/fairy-tail-1');
serie2.anadirCapitulo(1, 'https://www3.animeflv.net/ver/dragon-ball-super-1');
serie2.anadirCapitulo(2, 'https://www3.animeflv.net/ver/dragon-ball-super-2');

usuario.anadirSerie(serie);
usuario.anadirSerie(serie2);



describe('Test para clase Usuario', function() {
    it('Se espera que devuelva el nick del usuairo', function() {
        expect(usuario.nick).equal('Andy');
    });
    it('Se espera que devuelva el nombre del usuario', function() { 
        expect(usuario.nombre).equal('');
    });
    it('Se espera que devuelva la serie', function() {
        expect(usuario.getSerie('Fairy Tail')).equal(serie);
        expect(usuario.getSerie('Dragon Ball Super')).equal(serie2);
     });
    it('Se espera que devuelva un error al no encontrar la serie borrada', function() {
        usuario.borrarSerie(serie);
        expect(function(){usuario.getSerie('Fairy Tail');}).to.throw();
    });
    it('Se espera que devuelva un error al añadir una serie que ya existe', function(){ 
        usuario.anadirSerie(serie);
        expect(function(){usuario.anadirSerie(serie);}).to.throw();
    });
    it('Se espera que devuelva un error al intentar borrar una serie que no tienes', function(){ 
        usuario.borrarSerie(serie)
        expect(function(){usuario.borrarSerie(serie);}).to.throw();
    });

    it('Se espera que la asignación del nombre sea correcta', function(){ 
        var usuario = new Usuario('Lucas');
        //probamos el método setter de nombre
        usuario.nombre = 'Franchesco Virgolini'
        expect(usuario.nombre).equal('Franchesco Virgolini');
    });

    it('Se espera se añada correctamente una serie', function() {
        expect((usuario.listaseries).length).equal(1);

        usuario.anadirSerie(serie3);

        expect((usuario.listaseries).length).equal(2);
    });


    it('Se espera que se devuelvan correctamente las series', function(){ 
        var series = usuario.listaseries;

        expect(series[0].titulo).equal('Dragon Ball Super');
        expect(series[1].titulo).equal('Death Note');
    })


});


