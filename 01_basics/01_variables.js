const accountId = 156248
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Dharamshala" // xxxx 
let accountState; // undefined

console.log(accountId);

// accountId = 23456 --> assignment to constant variable not allowed

accountEmail = "efg@gmail.com"
accountPassword = "56789"
accountCity = "Palampur"


/* Prefer not to use var -> nvecause of issue in block scope and functional scope   */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])