
const assert = require('assert');
var countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown', function(){


    it('should check countAllFromTown startsWith', function(){
        assert.equal(1,countAllFromTown('CL 22'));
    });
    it('should check countAllFromTown startsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(1,countAllFromTown('CL 22'));
    });
});
