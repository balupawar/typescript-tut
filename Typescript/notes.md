# Typescript
 Strongly typed language

- Explicitly declared
```typescript
let myName: string = 'Dave'
```

- implicitaly declared
```typescript
let myName = 'Dave'
```

**Question mark(?) used in Typescript**
- Mark that variable as optional variable
- whenwe put question mark when declaring variable that variable becomes optional.
- The optional parameter will have value as undefined when unused
- e.g
```typescript
function A(x?: number){
    console.log('number is ${x}');
}
```
**exclamation mark(!) used in Typescript**
- if we define a string-type as **string | null**. it means that the varible holds string or null values.
- but suppose we define a function that accepts only string type value as parameter .
- in that case, the typeScript compiler will reject our variable value ,
- since there is possibillity that it will have a null value.

```typescript
let stringWord: string | null

const number =1
if(number){
  stringWord = “Test word”
}
console.log(stringWord.toUpperCase())
```
- In this case, the following error will appear:

```Error: Object is possibly ‘null’.ts(2531)```
- However, if you use the non-null assertion operator, you can convey to the TypeScript compiler that the stringWord variable is never null or undefined.

```typescript
let stringWord: string | null

const number =1
if(number){
  stringWord = “Test word”
}
console.log(stringWord!.toUpperCase())  // added the exclamation mark
```

## type Alises
**type alises**
```typescript
// type Alises
type stringOrNumber = string | number
```
```typescript
 type stringOrNumberArray = (string | number)[]
```
```typescript
type Guitarist = {
    name?: string;
    active: boolean,
    albums: stringOrNumberArray
}
```
```typescript
 type UserId = stringOrNumber // also work
```
**Literal types**
```typescript
let myName: 'Balu'
// only those values valid for that variable
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Dave'
console.log(userName)
```
## functions

```typescript
const add = (a: number,b: number): number => {
    return a+b
}
```
```typescript
const logMsg = (message: any): void =>{
    console.log(logMsg)
}
```
- calling the function
```typescript
logMsg('Hello');
logMsg(add(2,3))
```
- Another way to writing function
```typescript
let substract = function (c: number, d: number):
number {
    return c - d;
}
```
- Function type defination used in define the function

```typescript
//type defination of mathFunction
type mathFunction = (a: number, b: number)=> number

// mathFunction defination is used in multiply function
let multiply: mathFunction = function(c,d){
    return c * d;
}
```
- call multiply() function
```typescript
logMsg(multiply(2,2))
```
- **Used interface insted of type definiation**
- it also works
```typescript
//using interface
interface mathFunction {
 (a: number, b: number): number
}

// mathFunction defination is used in multiply function
let multiply: mathFunction = function(c,d){
    return c * d;
}
```
- call multiply() function
```typescript
logMsg(multiply(2,2))
```
**Optional Parameter in function**
- Put ? mark to make parameter optional
- that time value will be taken that parameter is ***undefine***

```typescript
const addAll = (a: number, b:number, c?: number):
number => {
    if(typeof c !== 'undefined')
    {
     return a + b + c;
    }
    return a + b;
}
```
**Default value parameter**
- Default value provide to the function parmeter
- if any value not enter the it gets it's default value
```typescript
const sumAll = (a: number, b:number, c: number=2): number => {
     return a + b + c;
}
```
**Rest Parameter**
``` typescript
//Rest Parameter

const total = (...nums: number[]): number =>{
   return nums.reduce((prev,curr)=> prev + curr) 
}

logMsg(total(1,2,3,4)); //10
```
**use of *never* type**
```typescript
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
```
```typescript
console.log(numberOrString(10));
```
- getting custom error
```
    throw new Error(errMsg);
    ^
Error: This should never happen
```