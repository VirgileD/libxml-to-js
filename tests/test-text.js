var parser = require('../');

var fs = require('fs');
var assert = require('assert');

parser(fs.readFileSync('data/text.xml').toString(), function (err, res) {
	assert.ifError(err);
	assert.deepEqual({
		'news': [{
			"auteur": "Bizzard5",
			"date": "17 Août 2008",
			"text": {}
		}, {
			"auteur": "Little",
			"date": "18 Août 2007",
			"text": {
				"test": "test"
			}
		}, {
			"auteur": "Bizzard5",
			"date": "17 Août 2008",
			"text": "C'est un teste"
		}, {
			"auteur": "Little",
			"date": "18 Août 2007",
			"text": "Allo"
		}, {
			"auteur": "Little",
			"date": "18 Août 2007",
			"text": {
				"text": "test"
			}
		}]
	},
	res);
});

parser(fs.readFileSync('data/text.xml').toString(), '//nouvelle/news', function (err, res) {
	assert.ifError(err);
	assert.deepEqual({
		"auteur": "Bizzard5",
		"date": "17 Août 2008",
		"text": {}
	},
	res[0]);
});
