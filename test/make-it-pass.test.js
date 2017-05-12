var test = require('tape');

function sum (a, b) {
    // code to make the test pass sits here
    return a + b;
}

test('sum should return the addition of two numbers', function (t) {
    t.equal(3, sum(1, 2));
    t.end();
});
