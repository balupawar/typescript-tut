// type Alises
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string;
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber // also work


// lIteral types
let myName: 'Balu'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Dave'
console.log(userName);

// funtions
const add = (a: number,b: number): number => {
    return a+b
}

const logMsg = (message: any): void =>{
    console.log(logMsg)
}

logMsg('Hello');
logMsg(add(2,3))

// anoter type writing function

let substract = function (c: number, d: number):
number {
    return c - d;
}

// type mathFunction = (a: number, b: number)=> number
// used interface insted of type
interface mathFunction { 
    (a: number, b: number): number
}
let multiply: mathFunction = function(c,d){
    return c * d;
}

logMsg(multiply(2,2))

// optional parameter

const addAll = (a: number, b:number, c?: number)=>{
    if(typeof c !== 'undefined')
    {
     return a + b + c;
    }
    return a + b;
}

//Rest Parameter

const total = (...nums: number[]): number =>{
   return nums.reduce((prev,curr)=> prev + curr) 
}

logMsg(total(1,2,3,4)); //10

//Explicitly throw error
const createError = (errMsg: string):never => 
{
    throw new Error(errMsg);
}

// use of never type
const numberOrString = (value: number | string):
string =>{
    if(typeof value === 'string') return 'string'
    // if(typeof value === 'number') return 'number'
    return createError('This should never happen');
}

let a = numberOrString(10);