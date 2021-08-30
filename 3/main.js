"use strict"

// var a = 'Test1';
// let b = 'Test2';

function testVar(){
	var a = 30;
	if(true){
		var a = 50;
		console.log(a);
	}
	console.log(a);
}

function testLet(){
	let a = 30;
	if(true){
		let a = 50;
		console.log(a);
	}
	console.log(a);
}

for(var i = 0; i < 10; i++){
	console.log(i);
}

console.log(i);
