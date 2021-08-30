"use strict"

function *g1(){
	console.log('Hello');
	yield 'yield 1 Run...';
	console.log('World');
	yield 'yield 2 Run...';
	return 'Returned..';
}

var g = g1();

/*
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
*/

for(let val of g){
	console.log(val);
}