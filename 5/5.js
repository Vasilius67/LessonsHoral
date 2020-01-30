//5.1
function testThrow() {
      let a = prompt("", "An error happened");
      if (a==='An error happened') {
           throw new Error('An error happened');
      }
      return a;
  }
  try {
      let result = testThrow();
      console.log(result);
  } catch (exception) {
      console.log(exception.name);
      console.log(exception.message);
      console.log(exception.stack);
  }
  //5.2 is not work
  function calcRectangleArea(w,h) {
    let area1
    if (typeof w == number ) {let ww = true} else {let ww = false};
    if (typeof h == number ) {let hh = true} else {let hh = false};
    let star = ww + hh ;
    if (star == 2 ) { let area1 = w*h/2; }  else {let area1 = "No"};
    
    if (typeof star != 2 ) {
       throw new Error("An error, is not number")} else { console.log("Area triangl are - " + area1)};
     return area1;
};
  
  try {
        calcRectangleArea(2,2);
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    };
  //  5.3 not work
  function checkAge(nn) {
      nn = prompt ( "HoW OLD ARe YOU?","" ) ;
      let tt = typeof nn ;
      let ff = ( nn <= 14 || tt !== number || nn == "");
     if  ( ff == true ) {throw new Error("The field is empty! Please enter your age")
    } else  { 
      let tre = "ok"
      console.log(tre) }
  };
  
  try {
        let result = checkAge();
        console.log(result);
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    };
    //5.4 working//
    class MonthException {
      constructor(message ) {
        this.message  = message ;
        alert(`Created a coffee-machine, power: ${power}` );
      }
    }
    function showMonthName(month) {
      if ( month <=0 || month >= 13 == true ) {
        throw new Error("errorN Month")} else {console.log("ok")
      let m = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]; 
           let monthString = m[month]; 
           console.log (monthString);
          };

    };
    showMonthName(1);