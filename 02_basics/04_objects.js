//const tinderUser  = new Object()
const tinderUser ={}
    tinderUser.id="123as"
    tinderUser.name ="sunny"
    tinderUser.isLoggedIn = false


console.log(tinderUser);
const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "anusha",
            lastname:"chy"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 = Object.assign(obj1,obj2)
const obj4 ={...obj1,...obj2}
console.log(obj4);
const users =[{
    id:1,
    email:"anu@gmail.com"
},{

},
{

}]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Anusha"
}
//course.courseInstructor
const {courseInstructor} =course
console.log(courseInstructor);
const {courseInstructor: instructor} =course
console.log(instructor);

