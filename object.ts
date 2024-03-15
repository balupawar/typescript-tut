let student:{
    name: string,
    address: string,
    phone: number,
    isActive: boolean
} = {
    // write property here
    name:"balu",
    address:"hadapsar pune",
    phone: 1234567890,
    isActive: true
};

console.log(student);
console.log(student.name);

type Person = {
    names: string;
    age: number;
};

let people: Person[] = [
    {names:'balu', age:24},
    {names: 'rahul', age:21}
]