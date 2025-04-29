const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
for (const key in myObject){
    console.log(myObject[key]);
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ["js","rb","py"]

for (const key in programming){
   // console.log(key);
}
for (const key in programming){
   // console.log(programming[key]);
}



//const map =new Map()
//map.set('IN',"India")
//map.set('ne',"nepal")
//map.set('ch',"china")
///map.set('IN',"india")

//for (const key in map){
  //  console.log(key);
//}