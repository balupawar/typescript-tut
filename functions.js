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
function simpleFunc(rs, name) {
    console.log("what can i do?");
    return rs;
}
var fun = simpleFunc(15, "balu");
fun = simpleFunc(29, 'ram');
var hug = simpleFunc(16, "mahesh");
console.log(fun);
console.log(hug);
