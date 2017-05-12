var test = require('tape');

test('should return -1 when the value is not present in Array', function(t) {
    t.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in the array so this test passes
    t.end();
});
