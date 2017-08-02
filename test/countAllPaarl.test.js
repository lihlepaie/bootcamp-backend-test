
const assert = require('assert');
var countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl', function(){

    it('should return countAllPaarl', function(){
        assert.equal(1,countAllPaarl('CJ 2345,Cj 22'));
    });
    it('should return countAllPaarl', function(){
        assert.equal(1,countAllPaarl('CJ 2345,CJ 22'));
    });
});
