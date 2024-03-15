// lIteral types
var myName;
var userName;
userName = 'Dave';
console.log(userName);
// funtions
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(logMsg);
};
logMsg('Hello');
logMsg(add(2, 3));
// anoter type writing function
var substract = function (c, d) {
    return c - d;
};
var multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameter
var addAll = function (a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Rest Parameter
var total = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(1, 2, 3, 4)); //10
//Explicitly throw error
var createError = function (errMsg) {
    throw new Error(errMsg);
};
// it is used in numberorString Function
var numberOrString = function (value) {
    if (typeof value === 'string')
        return 'string';
    // if(typeof value === 'number') return 'number'
    return createError('This should never happen');
};
var a = numberOrString(10);
