console.log("Hello");
var a = 42;
var b = "I am a String";
var c = true;
//by default print as a string
console.log(a+b);//42I am a String
console.log(a+c);//42true
console.log(b+c);//I am a Stringtrue
//Math Oerator
var a = 2;
var b = 3;
var c = 4;
var d = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log(a++);
console.log(a--);
a=42;
var anotherA = "42";
var justTrue = "true";
var deepTrue = true;
//equality Operator
// shallow Equality
console.log(a==anotherA);
console.log(justTrue==deepTrue);
//deep Equality
console.log(a===anotherA);
console.log(justTrue===deepTrue);
//maths equality
console.log(a<b);
console.log(c<=d);
//logical operations
console.log(a<b && c<d);
//values which are permissable in js for now we will talk about only numbers,strings and booleans
//coercion
var e = true;
var f = false;
console.log(a+e);//implicit coercion
//i.e a=3 and e->true=1 by js internally and thus will be 4
console.log(a+"some string");
//i.e here a = number and some string is some string and thus we will see that number is converted into string
//ans = 3some string
//explixit coericon
console.log(a+Number(e));
console.log(String(a)+"some string");
