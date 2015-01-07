$(document).on('ready', function() {
  
});
// // Ternary
// // if name is john, assign "hello " messge.  else assign 
// // var message =(name === "john") ? "Hello" : "nice to meet you";


// // function vs proceedureal and both

// var names = ['chris', 'sean', 'rain'];
// console.log(names.join(', ') );

// // for(var i = 0; i<names.length; i++) {
// // 	var firstLetter = names[i][0];
// // 	var rest = names[i].slice(1);
// // 	names[i] = firstLetter.toUpperCase() + rest;
// // }
// // console.log(names.join(', ') );


// // var inputNames = ['chris', 'sean', 'rain'];
// // console.log(inputNames.join(', ') );

// // ************this is function vs procedural which is above
// var capitalizeNames = function(inputNames) {
// 	var outputNames = [];
// 	for(var i = 0; i<inputNames.length; i++) {
// 		var firstLetter = inputNames[i][0];
// 		var rest = inputNames[i].slice(1);
// 		outputNames.push( firstLetter.toUpperCase() + rest);
// 	}
// 	return outputNames;
// }


// console.log(capitalizeNames(names).join(', ') );

// var capitalizeName = function(name) {
// 	var firstLetter = name[0];
// 	var rest = name.slice(1);
// 	return firstLetter.toUpperCase() +rest;

// }
// var capitalNames = names.map(capitalizeName);
// console.log(names.map(capitalizeName).join(', '));


// var capitalNames = names.map(function(item){
// 	var firstLetter = item[0];
// 	var rest = item.slice(1);
// 	return firstLetter.toUpperCase() +rest;
// });
// console.log(capitalNames);


// ***************** filter vs map**************


// Similar to map, filter takes a list of values and returns a new list. But filter invokes a function that returns a boolean result. If the function returns true, the value is added to the new list, values that return a falsey result are filtered out.


var names = ['Chris', 'Cara', 'Joe', 'Samantha'];
console.log(names);
console.log(names.filter(function(name) {
	return name.length >4;
}) );





