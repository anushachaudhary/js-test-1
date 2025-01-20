const name = 'anusha'
const repoCount = 50
//console.log(name+repoCount+"Value");
console.log('Hello my name is ${name} and my repo count is ${repoCount}');
const gameName = new String('anusha')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));


const newString = gameName.substring(0,4)
console.log(newString);



const newStringone = "  hitesh "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','_'));
console.log(url.includes('sundar'));
console.log(gameName.split('_'));
