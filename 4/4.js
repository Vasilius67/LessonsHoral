//4.1
function propsCount() {
  let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
currentObject  = Object.keys(mentor).length
console.log(currentObject)
}
propsCount();
//4.2
let car = { 
  wheels: "Mountains", 
  magnitola: "Toshiba",
  brakes: "BJ" ,
  lights: "LightSB" ,
  motor: "BMW" 
};
function showProp () {
  
  console.log(Object.getOwnPropertyNames(car));
  console.log(Object.values(car));
};
showProp()
//4.3
class Worker {
  constructor(){}
}