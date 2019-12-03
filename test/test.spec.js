var chai = require('chai');
var should = chai.should();

const calc = require('../lib/calc');

describe('Suite 1', function () {

    it('Test 1', function (done) {
        calc.devideBy10(50)
            .then((result) => {
                result.should.equal(5);
                calc.multiplyBy2(result)
                    .then((result2) => {
                        result2.should.equal(10);
                        done();
                    })
                    .catch((err) => {
                        done(err);
                    });
            })
            .catch((err) => {
                done(err);
            });
    })

    it('Test 2', async function () {
            const result1 = await calc.devideBy10(50);
            result1.should.equal(5);
            const result2 = await calc.multiplyBy2(result1);
            return result2.should.equal(10);
    })
})