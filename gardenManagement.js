const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


//using if-else to check temperature

if (temperature > 80){
    console.log("Watering on");
} else{
    console.log("Watering off");
}
//use if-else to check time of day
if (timeOfDay === "evening" || timeOfDay === "night"){
    console.log("lights on");
}
else {
    console.log("Lights off");
}
//use while to increment value of soil moisture

while (soilMoisture < 40){
    soilMoisture+= 5;
    console.log(soilMoisture);

}
