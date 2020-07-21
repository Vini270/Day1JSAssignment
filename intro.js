//alert("click me to proceed");
console.log("Hey i am learning javascript");

// comments in javascript
//single line comments are using //
// multi line comment are using /* */

var a = {name: "Vinita",age:25, city: "Nagpur"}
var b = {name: "Kanchan",age:24, city: "Mumbai"}
var c = {name: "Shaunak",age:27, city: "Nagpur"}

//console.time()method
console.time('Time taken') ;  
console.log("hey")
//console.error() method
console.error("An error occured!");
//console.warning() method
console.warn("Hey this is a warning");
//console.log({a,b,c})
console.table({a,b,c})
console.log('%c Custom message','color:blue;')
console.timeEnd('Time taken');
// console.clear() method  
console.clear();
// console.count() method 
for(let i=0;i<5;i++){ 
	console.count(i); 
} 


