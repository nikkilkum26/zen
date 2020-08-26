var isAvailable = /** @class */ (function () {
    function isAvailable(p) {
        this.name = p.name;
        this.age = p.age;
        this.category = p.category;
        this.location = p.location;
        this.history = p.history;
    }
    return isAvailable;
}());
var request = /** @class */ (function () {
    function request(para) {
        this.check = [];
        this.check.push(para);
    }
    return request;
}());
var insert = function (p) {
    var pet = new isAvailable(p);
    return pet;
};
var statusCheck = function (paras) {
    var res = [];
    for (var i = 0; i < 5; i++) {
        res.push(paras[i].status);
    }
    return res;
};
var count = function (p) {
    return p.length;
};
var dog = new isAvailable({
    name: 'abc',
    age: 1,
    category: "dog",
    location: "chennai",
    history: 'new born'
});
var cat = new isAvailable({
    name: 'bak',
    age: 2,
    category: "cat",
    location: "chennai",
    history: 'new born'
});
var fish = new isAvailable({
    name: 'ghj',
    age: 2,
    category: "fish",
    location: "chennai",
    history: 'new born'
});
var dog2 = new isAvailable({
    name: 'abc3',
    age: 5,
    category: "dog",
    location: "chennai",
    history: 'Already owned'
});
var cat2 = new isAvailable({
    name: 'bak2',
    age: 4,
    category: "cat",
    location: "chennai",
    history: 'Already owned'
});
