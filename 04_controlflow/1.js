// if statement
//const isUserLoggedIn = true
/*
const temperature =42
if(temperature < 50){
    console.log("less then 50");
} else{
    console.log("greater than 50");
    
}
// <,>,<=,>=,==,!=,===,!==


const score = 200
if(score >100){
    const power ="fly"
    console.log('User power: ${power}');
    
}
    
   const balance =1000
   if(balance>500){
    console.log("test");
    
   }
    */
   const balance =1000
   if(balance < 500){
console.log("less then 500");

   } else if(balance <750){
    console.log("less than 750");
    
   }
   else if(balance < 900){
    console.log("less than 900");
    
   } else{
    console.log("less than 1200");
    
   }

   const userLoggedIn = true
   const debitCard = true
   const LoggedInFromGoogle = true
   const LoggedInFromEmail = true

   if(userLoggedIn && debitCard){
    console.log("allow to buy course");
    
   }
   if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged in");
    
   }