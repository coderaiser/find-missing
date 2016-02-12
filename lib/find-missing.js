'use strict';

module.exports = function (from, to, all) {
    check(from, to, all);

    var includes = function includes(number) {
        return ~all.indexOf(number);
    };

    var getMissing = function getMissing(numbers) {
        return numbers.find(function (number) {
            return !includes(number);
        });
    };

    var half = Math.round((to - from + 1) / 2);
    var middle = from + half - 1;

    if (!includes(half)) return half;

    for (; from < middle, to > middle; ++from, --to) {
        var free = getMissing([from, to]);

        if (free) return free;
    }
};

function check(from, to, all) {
    if (typeof from !== 'number') throw Error('from should be number!');

    if (typeof to !== 'number') throw Error('to should be number!');

    if (from > to) throw Error('from could not be bigger then to!');

    if (!Array.isArray(all)) throw Error('all should be an array!');
}