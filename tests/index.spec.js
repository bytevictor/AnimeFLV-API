var expect = require('chai').expect;

const request = require('supertest');
app = require('../src/index.js');


describe( "Probando creacion de serie", function() {
    it('Deberia devolver un error porque faltan parametros', function (done) {
      request(app)
       .post('/anadirserie/Fairy%20Tail')
       .send({descripcion:'Fairy tail es un gremio de magos'})
       //, link='https://www3.animeflv.net/anime/fairy-tail'})
       .expect(400)
       .end(function(err, res) {
        expect(res.text).equal('Parametros Invalidos');
        done();
      });
       
    });
    it('Deberia devolver un json con la nueva serie', function (done) {
        request(app)
         .post('/anadirserie/Fairy%20Tail')
         .send({descripcion:'Fairy tail es un gremio de magos', link:'https://www3.animeflv.net/anime/fairy-tail'})
         .expect(200)
         .end(function(err, res) {
          var respuesta = JSON.stringify(res.body);
          expect(respuesta).equal('{"OK":"Fairy Tail"}');
          done();
        });
         
    });
});

describe( "Probando put de capitulo", function() {
    it('Deberia devolver una confirmacion con la informacion del capitulo', function (done) {
      request(app)
       .put('/anadircapitulo/Fairy%20Tail/1/animeflv.net.fairytail.1')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"OK":"1","link":"animeflv.net.fairytail.1"}');
        done();
      });
       
    });

    it('Deberia devolver una confirmacion con la informacion de otro capitulo', function (done) {
        request(app)
         .put('/anadircapitulo/Fairy%20Tail/2/animeflv.net.fairytail.2')
         .expect(200)
         .end(function(err, res) {
          expect(res.text).equal('{"OK":"2","link":"animeflv.net.fairytail.2"}');
          done();
        });
         
      });
});

describe( "Probando delete de capitulo", function() {
    it('Deberia devolver un mensaje de confirmacion', function (done) {
      request(app)
       .delete('/borrarcapitulo/Fairy%20Tail/2')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"DELETED":"2"}');
        done();
      });
       
    });
});

describe( "Probando get de serie", function() {
    it('Deberia devolver la informacion de la serie', function (done) {
      request(app)
       .get('/getserie/Fairy%20Tail')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"_capitulos":"{\\"1\\":\\"animeflv.net.fairytail.1\\"}","_titulo":"Fairy Tail","_descripcion":"Fairy tail es un gremio de magos","_link":"https://www3.animeflv.net/anime/fairy-tail"}');
        done();
      });
       
    });
});

describe( "Probando delete de serie", function() {
    it('Deberia devolver un mensaje de confirmacion', function (done) {
      request(app)
       .delete('/borrarserie/Fairy%20Tail')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"DELETED":"Fairy Tail"}');
        done();
      });
       
    });
});

