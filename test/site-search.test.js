const test = require('tape');
const siteSearch = require('../lib/site-search.js');
const mySiteSearch = new siteSearch();

test('searchSort should return Sup', (t) => {
    const result = mySiteSearch.searchSort();
    const expected = 'Sup';
    t.deepEqual(result, expected);
    t.end();
});

test('searchSort should return the sum', (t) => {
    const result = mySiteSearch.searchOkay(1,2);
    const expected = 3;
    t.deepEqual(result, expected);
    t.end();
});

// to run
// node test/change-calculator.test.js
