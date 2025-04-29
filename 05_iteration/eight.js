const myNums=[1,2,3]


//const myTotal = myNums.reduce(function (acc,currval){
  //  console.log(`acc:${acc} and currval: ${currval}`);

    //return acc + currval
//},0)

//console .log(myTotal);




//myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
///console.log(myTotal)


const shoppingCart = [
    {
        itemName:"js"
        price:5677
    },
    {
        itemName:"python"
        price:80000
    },
    {
        itemName:"java"
        price:9000
    }
]

const priceToPay=shoppingCart.reduce((,accitem)=> acc +item.price,0)
console.log(priceToPay);