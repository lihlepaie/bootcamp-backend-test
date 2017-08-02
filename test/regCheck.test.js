
const assert = require('assert');
var regCheck = require('../regCheck');

describe('regCheck', function(){


    it('should check if the regNumber endsWith', function(){
        assert.equal(true,regCheck('52 EC'));
    });
    it('should check if the regNumber endsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(true,regCheck('52 EC'));
    });
});
