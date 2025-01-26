//var c =300
let a=300
if(true){
    let a = 10
    const b = 20
    var c =30
  //console.log("inner:",a);
}



//console.log(a);
// console.log(c);
// console.log(b);


function one(){
    const username ="anusha"
    function two(){
        const website ="youtube"
        console.log(username);
    }
  //console.log(website);
    two()
}
one()

if(true){
    const username ="anusha"
    if(username==="anusha"){
        const website="youtube"
        console.log(username+website);
    }
  //console.log(website);

}//console.log(username);
//++++++++++++++interesting+++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}


const addtwo = function(num){
    return num +2
}
addtwo(5)