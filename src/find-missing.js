'use strict';

module.exports = (from, to, all) => {
    check(from, to, all);
    
    const includes = number =>
        ~all.indexOf(number);
    
    const getMissing= numbers =>
        numbers.filter(number=> !includes(number))[0];
    
    const half = Math.round((to - from + 1) / 2);
    const middle = from + half - 1;
    
    if (!includes(half))
        return half;
    
    for(;from < middle, to > middle; ++from, --to) {
        let free = getMissing([from, to]);
        
        if (free)
            return free;
    }};

function check(from, to, all) {
    if (typeof from !== 'number')
        throw Error('from should be number!');
    
    if (typeof to !== 'number')
        throw Error('to should be number!');
    
    if (from > to)
        throw Error('from could not be bigger then to!');
    
    if (!Array.isArray(all))
        throw Error('all should be an array!');
}

