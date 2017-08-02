
const assert = require('assert');
var yearsAgo = require('../yearsAgo');

describe('yearsAgo', function(){


    it('There are Many yearsAgo', function(){
        assert.equal(2010,yearsAgo('7'));
    });
    it('There are Many yearsAgo', function(){
        // this test will fail - can you fix it?
        assert.equal(2010,yearsAgo('7'));
    });
});
