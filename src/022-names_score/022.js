/**
 * Project Euler - Problem 022
 * Names scores
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over
 * five-thousand first names, begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for each name, multiply this value by
 * its alphabetical position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order,
 * COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

'use strict';

var fs = require('fs'),
	parser = function parser(err, f) {
		if (err) throw err;

		console.time('lel');

		var total = 0;
		var data = f.toString().replace(/"/g, '').split(',').sort();
		var zero = 64;

		for (var i = 0, len = data.length; i < len; ++i) {
			var nameSum = 0, name = data[i];

			for (var j = 0; j < data[i].length; j++) nameSum += name.charCodeAt(j) - zero;

			total += nameSum * (i + 1);
		}

		console.timeEnd('lel');

		console.info('Total namescore:\t', total)
	},

	names = fs.readFile('names.txt', parser);

