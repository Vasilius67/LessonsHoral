///5.1
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
    if (typeof w !== "number" || typeof h !== "number" ) {
      throw new Error("An error, is not number")} ;
     let area1 = w*h/2; 
     return area1;
    console.log(area1);
};
  
  try {
        calcRectangleArea(2,2);
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    };
  //  5.3 not work
  function checkAge() {
    nn = +prompt ( "HoW OLD ARe YOU?","" ) ;
     if  ( nn <= 14 ||  isNaN(nn) ) {
       throw new Error("The field is empty! Please enter your age")} ;
     console.log(nn);
    } ;
 
  try {
         checkAge();
        
    } catch (exception) {
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    };
    //5.4 working//
    class MonthException {
      constructor(message) {
        this.name = message ;
      }
    };
     
    function showMonthName(month) {
  if ( month <= 0 ||  typeof month == "string" || month >= 13 ) {
    console.log(  new MonthException ('Incorrect month number') ) } ;
  let m = [ "","January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]; 
  let monthString = m[month]; 
           console.log (monthString);
          };
    showMonthName("df");