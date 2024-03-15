//Array -> ordered list of data
//syntac ===>  let arrayName: type[]
let numbers: number[] = [12,37,34,94]
// numbers.push(10)
console.log(numbers);
console.log(numbers[2]);
numbers[2] = 100;
console.log(numbers);

// num array conteains only number value data
let num: number[] = numbers.map((item)=>{
    return item = item % 2
})
console.log(num) // 0, 1, 0, 0
console.log(numbers.length)

// array -> is type is object
console.log(num.join('/'))

numbers.forEach(ele => { // contextual typing
    console.log(ele)
});

num.map((i)=>{
    console.log(i);  
})

// create Tuple
let tupleElement: [number,string,boolean]; // only three values considered order of type
tupleElement = [100,"value",true]

// destructuring tuple
let[x,y,z] = tupleElement
console.log(x); // 100
console.log(y); // value
console.log(z); // true

// using union type you can store multiple type value
let mixed: (string | number | boolean)[]

mixed = ['one','two','three', 23, true]

mixed.forEach(value=>{
    if(typeof value === 'string'){
        console.log()
    }
})
console.log(mixed);
