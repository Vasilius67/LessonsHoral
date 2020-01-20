//1.2
alert ("Goral");
//1.3
let v = 1;
let b = 3;
alert (v+" "+b);
 b = v;
 alert (b);
 //1.4
 let isAdult = confirm ("You are over 18,right?")
//1.5.1
let name = "Vasil";
let surname = "Goral";
let traning_group = "JS";
let year_of_birth = 2019;
let marital_status  = true;
//1.5.2
console.log(typeof year_of_birth);
console.log(typeof marital_status);
console.log(typeof traning_group);
//1.5.3
let be = null  ;
let bep ;
console.log(typeof be);
console.log(typeof bep);
//1.6
let login1 = prompt ("your Login?");
let login2 = prompt ("your Email?");
let login3 = prompt ("your Password?");
alert ("Dear_" + login1 + ",your email is" + login2 + ",your password is "+ login3 + ".")
//1.7
let hour1 = ((1*60)*60);
console.log(hour1);
let day1 = hour1*12;
console.log(day1)
let month1 = day1*31;
console.log(month1);
let tt = hour1
let pp = day1
let ff = month1
alert ( tt + "  " + pp + "  " + ff);