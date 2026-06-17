// const temperature = 90;
// const timeOfDay = "morning";
// let soilMoisture = 30;

let temperature = 90;
let timeOfDay = "morning";
let soilMoisture = 0;

//using if-else to check temperature

if (temperature > 80){
    console.log("Watering on")
} else{
    console.log("Watering off");
}
//use if-else to check time of day
if (timeOfDay == "evening or night"){
    console.log("lights on");
}//else if (timeOfDay === "night"){
 //   console.log("Lights on");
//}
else {
    console.log("Lights off");
}
//use while to increment value of soil moisture

//let soilMoisture = 0;

while (soilMoisture <= 40){
    console.log(soilMoisture);
    soilMoisture+= 5;
}
