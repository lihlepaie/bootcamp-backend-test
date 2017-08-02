
const assert = require('assert');
var transportFee = require('../transportFee');

describe('transportFee', function(){


    it('should return free transportFee',function(){
        assert.equal('R20',transportFee('morning'));
    });
    it('should return free transportFee ',function(){
        assert.equal('R20',transportFee('morning'));
    });
});
