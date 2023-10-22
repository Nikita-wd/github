let bread1 = prompt("which bread would you like to have:-");
let veggies1 = prompt("what are your favorite veggies");
let sauce1 = prompt ("which sauch would you like to have:-");

function makesandwich(bread1, veggies1, sauce1){
    let sandwich = bread1 + "bread1" + veggies1+ "" +sauce1+ "sandwich ";
    return sandwich;
}

let vegsandwich = makesandwich(bread1, veggies1, sauce1);