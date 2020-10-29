/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = n => n.toString(2).split("").filter(v=>v === '1').length;