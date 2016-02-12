(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.findMissing = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"find-missing":[function(require,module,exports){
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
},{}]},{},["find-missing"])("find-missing")
});