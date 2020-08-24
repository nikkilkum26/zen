var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var chunk = function (arr, size, n) {
    if (n === void 0) { n = []; }
    var a = __spreadArrays(arr);
    var op = Math.ceil(a.length / size);
    for (var i = 0; i < op; i++) {
        n.push(a.splice(0, size));
    }
    return n;
};
var reduce = function (c) { return c.reduce(function (add, n) { return add + n; }, 0); };
var filter = function (b) { return b.filter(function (n) { return (n % 2 == 0); }); };
var find = function (d) { return d.filter(function (e) { return e == 0; }); };
var sum = function (a) { return a.reduce(function (add, n) { return add += n; }, 0); };
