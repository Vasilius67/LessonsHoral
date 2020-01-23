//3.1
//a
var arr = [1,2,3,4,5];
var sum1 = 1;
for (var i = 0; i < arr.length;i++) {sum1= arr[i]*sum1}
  console.log(sum1);
//b
let arr = [1,2,3,4,5];
var sum1 = 1;
let i = 0;
while (i < arr.length)  {
  sum1 = arr[i]*sum1 
 i++
 };
  console.log(sum1);
  //3.2
  for (var i = 0; i <= 15;i++) {
    if (i&1) {sum1 = i + " is odd"} else  {sum1 = i+" is even"};
    console.log(sum1);
  };
  //3.3
  function randArray(k) {
    let r=[];
    for (let i = 0; i <= k;i++) {
     let ran = Math.floor(Math.random() * i);
     let arr= r.push(ran) ;
    };
    console.log(r);
  }
  randArray(5);
  //3.4
  function raiseTodegre(a,b) {
    rezult = a ** b 
    console.log(rezult);
  }
  let a = prompt ( "Get number a","3")
  let b = prompt ( "Get number b","4")
  raiseTodegre(a,b);
   //3.5
   