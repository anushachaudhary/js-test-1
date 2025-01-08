const accountId = 144553
let accountEmail = "chauanusha@google.com"
var accountPassword = "12345"
accountCity = "dhng"
let accountState;

//accountId = 2 //not allowed
accountEmail = "anu@ac.com"
accountPassword = "kailali"
accountCity = "kailali"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])