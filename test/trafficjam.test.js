var http = require('http'),
    assert = require('assert'),
    tokenator = require('../lib/trafficjam');

describe('Making a get request', function(){
  describe('without a query string', function(){
    it('should get return a 200 response', function(done){
      http.get( { 
        port: '3000'
      }, function(res){
        assert.strictEqual(res.statusCode, 200);
        done();
      })
    })
    it('should return the correct body content', function(done){
      http.get( { 
        port: '3000'
      }, function(res){
        var body = '';
        res.on('data', function (chunk) {
          body += chunk;
        });
        res.on('end', function () {
          assert.strictEqual(body, 'Response from Traffic Jam');
          done();
        });
      })
    })
  })
  describe('with a valid delay query string', function(){
    it('should get return a 200 response', function(done){
      http.get( { 
        path: '/?delay=1000',
        port: '3000', 
      }, function(res){
        assert.strictEqual(res.statusCode, 200);
        done();
      })
    })
    it('should return the correct body content', function(done){
      http.get( { 
        path: '/?delay=1000',
        port: '3000', 
      }, function(res){
        var body = '';
        res.on('data', function (chunk) {
          body += chunk;
        });
        res.on('end', function () {
          assert.strictEqual(body, 'Response from Traffic Jam with 1000ms delay');
          done();
        });
      })
    })
  })
  describe('with a valid delay query string', function(){
    it('should get return a 200 response', function(done){
      http.get( { 
        path: '/?delay=foobar',
        port: '3000', 
      }, function(res){
        assert.strictEqual(res.statusCode, 422);
        done();
      })
    })
    it('should return the correct body content', function(done){
      http.get( { 
        path: '/?delay=foobar',
        port: '3000', 
      }, function(res){
        var body = '';
        res.on('data', function (chunk) {
          body += chunk;
        });
        res.on('end', function () {
          assert.strictEqual(body, 'delay must be a number');
          done();
        });
      })
    })
  })
})  
