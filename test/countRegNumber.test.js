
const assert = require('assert');
var countRegNumber = require('../countRegNumber');

describe('countRegNumber', function(){


    it('The countRegNumber will split', function(){
        assert.equal(9,countRegNumber('CA 182736'));
    });
    it('The countRegNumber will split', function(){
        // this test will fail - can you fix it?
        assert.equal(9,countRegNumber('CA 182736'));
    });
});
