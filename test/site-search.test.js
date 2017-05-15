var test = require('tape');
var siteSearch = require('../lib/search-sort.js');
var mySiteSearch = new siteSearch();

test('searchSort should return Sup', function(t) {
    var result = mySiteSearch.searchSort();
    var expected = 'Sup';
    t.deepEqual(result, expected);
    t.end();
});

// to run
// node test/change-calculator.test.js
