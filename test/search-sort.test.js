var test = require('tape');
var searchSort = require('../lib/search-sort.js');

test('searchSort should return Sup', function(t) {
    var result = searchSort();
    var expected = 'Sup';
    t.deepEqual(result, expected);
    t.end();
});

// to run
// node test/change-calculator.test.js
