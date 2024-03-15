// null , undefine, any
var userName = null;
console.log(userName); // null // null always resolves false
console.log(typeof userName); //  object // => null is object type value
var userPassword;
console.log(userPassword); // undefine // By default store undefine value, when we not store value in 
console.log(typeof userPassword); //undefine // undefine resolves false // it is unitialized value
if (userName) {
    console.log('True username');
}
else {
    console.log('False username');
}
// any  => this is used the (skip the type checking use any)
var networkData = "this is data";
networkData = 123;
console.log(networkData); // 123 
var networkInfo = {
    productName: "Samsung TV",
    price: 25999,
    discountPrice: 1234
};
console.log(networkInfo);
console.log(networkInfo.price);
console.log(networkInfo.isActive);
