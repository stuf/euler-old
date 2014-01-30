/**
 * Project Euler - Problem 014
 * Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers:
 *   n → n/2 (n is even)
 *   n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *   13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem),
 * it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

function findCollatzSeq(upperLimit) {
	'use strict';

	var
		maxChain = 0,
		maxChainStart = 0,
		n = null,
		chain = null,
		i = null;

	for (i = 1; i < upperLimit; ++i) {
		n = i, chain = 0;

		while (n != 1) {
			n = (n % 2 == 0) ? n / 2 : (3 * n + 1);
			++chain;
		}

		if (chain > maxChain) {
			maxChain = chain;
			maxChainStart = i;
		}
	}

	return [maxChainStart, maxChain];
}

var timer = 'collatz:';
console.time(timer);
console.info(findCollatzSeq(1000000));
console.timeEnd(timer);
