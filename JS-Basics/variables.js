const accId=155467;
let accEmail="kush@google.com";
var accPassword="kush@patel";
accCity="Delhi";
let accState;

// accId=69; -> Not Possible
accEmail="heloo@js.com";
accPassword="pass@123";
accCity="Ahmedabad";

// var has functional and block issue - prefer not to use

// console.table([accEmail,accPassword,accId,accCity,accState]);

let isLoggedIn="kush"   // -> true
// let isLoggedIn=""    -> false
// let isLoggedIn= 1    -> true ; >1 -> true   ; <1 -> true ; only 0=false
let check = Boolean(isLoggedIn)
console.log(check);
