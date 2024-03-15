// set of instruction for perform specific task

/**
 * syntax::
 * 
 * function nameOfFunction(a:type, b:type,...):
 * returnType
 * {
 * //instructions
 * }
 */

function simpleFunc(rs: number, name:string):number{
    console.log("what can i do?");
    return rs;
}

let fun = simpleFunc(15,"balu");
let hug = simpleFunc(16,"mahesh");
console.log(fun);
console.log(hug);
