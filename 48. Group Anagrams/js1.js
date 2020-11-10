/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let state = [];
    for(let s of strs){
        const sorted = s.split('').sort().join('');
        state[sorted] = state[sorted] ? [...state[sorted],s] :[s]
    }
    return Object.values(state)
};