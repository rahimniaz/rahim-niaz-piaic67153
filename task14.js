var a = 2 ;var b = 1 ;
var result = --a - --b + ++b + b--;
         //   1      0     1    1   
// --a = 1
// --b = 0 
// --a - --b = 0
// ++b = 1
// --a - --b + ++b = 1
// b-- = 1 
//  --a - --b + ++b + b-- = 1

document.write("a is" + a +"<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result)

