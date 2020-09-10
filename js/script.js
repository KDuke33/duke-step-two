    let yield = 50
let rain = prompt("How many inches of rain fell?");
let rainfall = "*";
console.log(rainfall.repeat(rain))

if (rain >= 20) {
    yield = 45
}

if (rain < 10){
    yield = 40
}

let fertilizer = prompt("Did you use fertilizer?")
if (fertilizer === "yes"){
     prem = prompt("Did you use premium or regular fertilizer?")
} else{
    console.log("The yield should be " + yield, "bushels per acre.")
}

if (prem === "premium"){
    yield = yield * 1.15
} else{
    yield = yield * 1.10
}

console.log("The yield should be " + yield, "bushels per acre." )