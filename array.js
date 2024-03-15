//Array -> ordered list of data
//syntac ===>  let arrayName: type[]
var numbers = [12, 37, 34, 94];
// numbers.push(10)
console.log(numbers);
console.log(numbers[2]);
numbers[2] = 100;
console.log(numbers);
// num array conteains only number value data
var num = numbers.map(function (item) {
    return item = item % 2;
});
console.log(num); // 0, 1, 0, 0
console.log(numbers.length);
// array -> is type is object
console.log(num.join('/'));
numbers.forEach(function (ele) {
    console.log(ele);
});
num.map(function (i) {
    console.log(i);
});
// create Tuple
var tupleElement; // only three values considered order of type
tupleElement = [100, "value", true];
// destructuring tuple
var x = tupleElement[0], y = tupleElement[1], z = tupleElement[2];
console.log(x); // 100
console.log(y); // value
console.log(z); // true
// using union type you can store multiple type value
var mixed;
mixed = ['one', 'two', 'three', 23, true];
console.log(mixed);
