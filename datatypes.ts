// null , undefine, any

let userName = null
console.log(userName); // null // null always resolves false
console.log(typeof userName); //  object // => null is object type value

let userPassword;
console.log(userPassword); // undefine // By default store undefine value, when we not store value in 
console.log(typeof userPassword); //undefine // undefine resolves false // it is unitialized value

if(userName){
    console.log('True username');
}
else{
    console.log('False username');
    
}

//? any  => this is used the (skip the type checking use any)
//! >> avoid any datatype
let networkData: any = "this is data";
networkData = 123;
console.log(networkData); // 123 

let networkInfo: any ={
    productName: "Samsung TV",
    price: 25999,
    discountPrice: 1234
}

console.log(networkInfo)
console.log(networkInfo.price);
console.log(networkInfo.isActive); //undefined




