const accountId = 144553
let accountEmail = "yemekar1999@gmail.com"
var accountPassword = "12345"
accountCity = "Mukramabad"
let accountState;
// accountId = 2  //not  allowed

console.log(accountId);

accountEmail = "abc"
accountPassword = "1122"
accountCity = "Nanded"

/*Prefer not to use var because of issue in block and functional scope .*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])