import { link } from 'fs';
import { obtenerVideofromLink } from '../src/downloader'; 
import { obtenerCaratulaSerie } from '../src/downloader'; 
import { expect } from 'chai';

describe('Test para módulo downloader', function() {
    it('Se espera que devuelva un error ya que aún no está funcional', function() {
        var link_capitulo: string = "https://www3.animeflv.net/ver/fairy-tail-1";
        expect(function(){obtenerVideofromLink(link_capitulo);}).to.throw();
    });

    it('Se espera que devuelva un error ya que aún no está funcional', function() {
        var link_serie: string = "https://www3.animeflv.net/anime/fairy-tail";
        expect(function(){obtenerCaratulaSerie(link_serie);}).to.throw();
    });
});