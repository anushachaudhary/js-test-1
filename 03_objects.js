// Object literals
const mySym = Symbol("key1"); // Corrected typo from Symbole to Symbol
const JsUser = {
    name: "Anusha",
    "full name": "anusha chaudhary",
    [mySym]: "mykey1", // Using Symbol as a property key
    age: 20,
    location: "kailali",
    email: "anusha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email); // Access email directly
console.log(JsUser["email"]); // Access email using a string key
console.log(JsUser["full name"]); // Access "full name" with quotes
console.log(JsUser[mySym]); // Access Symbol property

JsUser.email = "hitesh@chatgpt.com"; // Change email
Object.freeze(JsUser); // Freeze object to prevent further modifications
JsUser.email = "hitesh@microsoft.com"; // This will not change the email because the object is frozen
console.log(JsUser); // Output the final state of the object
