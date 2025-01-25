console.log("A");
console.log("N");
console.log("U");
console.log("S");
console.log("H");
console.log("A");
function sayMyName(){
    console.log("A");
console.log("N");
console.log("U");
console.log("S");
console.log("H");
console.log("A");

}
//sayMyName()
//function addtwoNumbers(number1,number2){
  //  console.log(number1 + number2);
//}
function addtwoNumbers(number1,number2){
    //let result =number1+number2
    //return result 
    return number1 +number2
    
}

const result=addtwoNumbers(3,2)
//console.log("Result:", result);
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
//console.log(loginUserMessage("Anusha"))
//
// 
// 
// 
// 
// 
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
 return num1
}
//
// console.log(calculateCartPrice(200,400,500,5000))
const user = {
    username:"anusha",
    price:199
}
function handleObject(anyobject){
    console.log('Username  is ${anyobject.username} and price is ${anyobject.priice}' );

}
//handleObject(user)
handleObject({
    username:"sam",
    price:99
})
const myNewArray = [200,300,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,200,400]));