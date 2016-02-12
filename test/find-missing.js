'use strict';

let test        = require('tape');
let findMissing = require('../src/find-missing');

test('return from', t => {
    let missing = findMissing(1, 10, [5]);
    
    t.equal(missing, 1, 'should return from');
    t.end();
});

test('all contains pair number of elements', t => {
    let missing = findMissing(1, 6, [1, 2, 3, 5, 6]);
    
    t.equal(missing, 4, 'should return missing');
    t.end();
});

test('all contains unpaired number of elements', t => {
    let missing = findMissing(1, 5, [1, 2, 3, 5]);
    
    t.equal(missing, 4, 'should return missing');
    t.end();
});


test('arguments: no from', t => {
    t.throws(findMissing, /from should be number!/, 'should throw when from not number');
    t.end();
});

test('arguments: no to', t => {
    let fn = () => findMissing(1);
    
    t.throws(fn, /to should be number!/, 'should throw when to not number');
    t.end();
});

test('arguments: from bigger then to', t => {
    let fn = () => findMissing(10, 1);
    
    t.throws(fn, /from could not be bigger then to!/, 'should throw when from bigger then to');
    t.end();
});

test('arguments: no all', t => {
    let fn = () => findMissing(1, 2);
    
    t.throws(fn, /all should be an array!/, 'should throw when all not array');
    t.end();
});
