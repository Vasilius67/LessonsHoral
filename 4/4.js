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
  constructor(fullName,dayRate,workingDays){
    this.fullName = fullName ;
    this.dayRate = dayRate ;
    this.workingDay = workingDays ;
  }
  showSalary() {
    console.log( this.dayRate *  this.workingDay );
  }
  _showExp = 1.2 
  showSalaryWithExperience () {
  console.log( this.dayRate *  this.workingDay );
  console.log( this._showExp );
  let tt = this.dayRate *  this.workingDay
  return tt
 }
 get showExp () {
   return this._showExp
 }
 set showExp (value) {
   this._showExp = 1.5
}
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName + "salary:" +  worker1.showSalaryWithExperience () );
console.log("New experience: " + worker1.showExp);                 
worker1.showSalary();

worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
//4.4
class Person {
constructor(name,surname){
  this.fullName = fullName ;
  this.dayRate = dayRate ;
  this.workingDay = workingDays ;
}
showFullName(){} 
};