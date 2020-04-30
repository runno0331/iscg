"use strict";

function sum(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
};
