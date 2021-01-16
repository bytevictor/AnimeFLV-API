var expect = require('chai').expect;

const request = require('supertest');
app = require('../src/index.js');

describe( "Probando status", function() {
  it('Deberia devolver un status correcto', function (done) {
    request(app)
     .get('/status')
     .expect(200)
     .end(function(err, res) {
      expect(res.text).equal('{ status: "OK" }');
      done();
    });
     
  });
});

describe( "Probando creacion de serie", function() {
    it('Deberia devolver un error porque faltan parametros', function (done) {
      request(app)
       .post('/serie/Fairy%20Tail')
       .send({descripcion:'Fairy tail es un gremio de magos'})
       //, link='https://www3.animeflv.net/anime/fairy-tail'})
       .expect(400)
       .end(function(err, res) {
        expect(res.text).equal('Parametros Invalidos');
        done();
      });
       
    });
    it('Deberia devolver un json con la nueva serie y el URI en el header', function (done) {
        request(app)
         .post('/serie/Fairy%20Tail')
         .send({descripcion:'Fairy tail es un gremio de magos', link:'https://www3.animeflv.net/anime/fairy-tail'})
         .end(function(err, res) {
          var respuesta = JSON.stringify(res.body);
          expect(respuesta).equal('{"OK":"Fairy Tail"}');
          expect(res.header.location).equal('/serie/Fairy%20Tail')
          expect(res.status).equal(201)
          done();
        });
         
    });
});

describe( "Probando post de capitulo", function() {
    it('Deberia devolver una confirmacion con la informacion del capitulo y el URI en el header', function (done) {
      request(app)
       .post('/capitulo/Fairy%20Tail/1')
       .send({link:'https://www3.animeflv.net/ver/fairy-tail-1'})
       .end(function(err, res) {
        expect(res.text).equal('{"OK":"1","link":"https://www3.animeflv.net/ver/fairy-tail-1"}');
        expect(res.header.location).equal('/capitulo/Fairy%20Tail/1')
        expect(res.status).equal(201)
        done();
      });
       
    });

    it('Deberia devolver una confirmacion con la informacion de otro capitulo y el URI en el header', function (done) {
        request(app)
         .post('/capitulo/Fairy%20Tail/2')
         .send({link:'https://www3.animeflv.net/ver/fairy-tail-2'})
         .end(function(err, res) {
          expect(res.text).equal('{"OK":"2","link":"https://www3.animeflv.net/ver/fairy-tail-2"}');
          expect(res.header.location).equal('/capitulo/Fairy%20Tail/2')
          expect(res.status).equal(201)
          done();
        });
         
      });
});

describe( "Probando delete de capitulo", function() {
    it('Deberia devolver un mensaje de confirmacion', function (done) {
      request(app)
       .delete('/capitulo/Fairy%20Tail/2')
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
       .get('/serie/Fairy%20Tail')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"_capitulos":"{\\"1\\":\\"https://www3.animeflv.net/ver/fairy-tail-1\\"}","_titulo":"Fairy Tail","_descripcion":"Fairy tail es un gremio de magos","_link":"https://www3.animeflv.net/anime/fairy-tail"}');
        done();
      });
       
    });
});

describe( "Probando delete de serie", function() {
    it('Deberia devolver un mensaje de confirmacion', function (done) {
      request(app)
       .delete('/serie/Fairy%20Tail')
       .expect(200)
       .end(function(err, res) {
        expect(res.text).equal('{"DELETED":"Fairy Tail"}');
        done();
      });
       
    });
});

