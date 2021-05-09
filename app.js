function sum(op, ...values) {
    let sum = 0;
    for (let n of values) {
        sum += n;
    }
    return sum;
}
let s = sum("Sum", 44, 55, 64, 3232, 3);
console.log(s);
////////////////////////////////////////////////////////
var eventOne = document.getElementById("eventOne");
eventOne.addEventListener("click", () => {
    eventOne.innerHTML = "Hello From Event One";
});
////////////////////////////////////////////////////////
let msg = "Hello Typescript";
alert(msg);
////////////////////////////////////////////////////////
let infoOne = {
    "Name": "mohmad",
    "Age": 24
};
let { Name: UserName, Age } = infoOne;
////////////////////////////////////////////////////////
let a = 2;
let b = 3;
[a, b] = [b, a];
////////////////////////////////////////////////////////
let interName = "mohmad";
let interAge = 24;
console.log(`Hello ${interName} your age is ${interAge}`);
////////////////////////////////////////////////////////
let jobs = ["developer", "admin", "tester"];
for (let job of jobs) {
    console.log(`Title Job Is: ${job}`);
}
////////////////////////////////////////////////////////
// Variable in Typescript
// Variable Immutable ==> Can Not Manification on it
let myName;
myName = "mohmad";
let myAge;
myAge = 24;
let married;
married = false;
// Variable mutable ==> Can Manification on it
let myInfo = [];
myInfo.push("Front End Developer");
myInfo.push(24);
////////////////////////////////////////////////////////
function test(name, age) {
    return `Hello ${name} your Age Is: ${age}`;
}
function testTow(first, second) {
    if (typeof (first) === "string") {
        return `Hello Info Fisrst Is ${first} And Second Info Is: ${second}`;
        console.log("The First Has Type Of  String");
    }
    else {
        return `Hello Info Fisrst Is ${first} And Second Info Is: ${second}`;
        console.log("The First Has Type Of  Other");
    }
}
