var x = 1;
var y = 2;
// 2.1.1
var res1 = (""+x + y);
console.log(res1);
console.log(typeof res1);
//2.1.2
var res2 = ("true"+2)
console.log(res2); // "true2"
console.log(typeof res2); // "string"
//2.1.3
var res3 = true
console.log(res3); 
console.log(typeof res3); 
//2.1.4
var res4 = NaN
console.log(res4); // NaN
console.log(typeof res4); // "number"
//2.2.1
let chekerN = prompt("set number");
let tt
let ff
 if (chekerN == 7 ) {
  tt = true} else {
    tt = false};
  if ( chekerN & 1 ) {ff = "false"} else {ff = "true"};
console.log (ff);
console.log (tt);
//2.3
let isAdult = confirm ("DO you have more 18 years?");
console.log(isAdult);
let tr
if (isAdult == true) {tr = "Your are an Adult"} else  {tr = "You're too Yong"};
alert (tr);
//2.4
let Len_A = prompt ( "Length Triangle - A","2") ;
let Len_B = prompt ( "Length Triangle - B","3" ) ;
let Len_C = prompt ( "Length Triangle - C","4" ) ;
let Len_AN = Number(Len_A) ;
let Len_BN = Number(Len_B) ;
let Len_CN = Number(Len_C) ;
//perimetr
//a
let perS1 = (Len_AN + Len_BN + Len_CN)/2;
//console.log ( perS1);
let perS2 = perS1 *(perS1-Len_AN)*(perS1-Len_BN)*(perS1-Len_CN) ;
//console.log ( perS2);
let perS3 = Math.sqrt(perS2)
console.log ( perS3.toFixed(3));
//b
let rectT1
let rectT2
 if (Len_AN === Len_BN ) {recT1=true}else(recT1=false);
 if (Len_AN === Len_CN ) {recT2=true}else(recT2=false);
 let rectT3 = recT1 && recT2
//console.log (rectT3);
if (rectT3 === true) {console.log ("triangl is rectagular")} else{console.log ("triangl is'not rectagular")}
//c
if (Len_AN < 0 ) {console.log ("Incorect Data")};
if (Len_BN < 0 ) {console.log ("Incorect Data")};
if (Len_CN < 0 ) {console.log ("Incorect Data")};
//2.5
let hours1 = new Date().getHours();
console.log ( hours1);
////let timeGet = hours1 >= 12 ? "pm" : "am";
///console.log (timeGet);
if (hours1 > 23 && hours1 <= 5) {console.log ("good night")};
if (hours1 >= 5 && hours1 <11) {console.log ("good morning")};
if (hours1 >=11 && hours1 <17) {console.log ("good afternoon")};
if (hours1 > 17 && hours1 <=23) {console.log ("good evening")};
//2.6
let randomM =[];
randomM[0]= 22;
randomM[1]= "test";
randomM[2]= true ;
randomM[3]= null;
console.log ( randomM);
randomM[4]= prompt ("set random","ran");
console.log ( randomM[4]);




