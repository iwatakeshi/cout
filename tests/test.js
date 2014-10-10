var cout = require('../cout.js');

cout.config({
	cout: ['silly', 'warn']
})
cout("Hello", "World", {hello: "world"}, ['hello', 'world'], 1,2,3).end();
cout(['one', 'two', 2], {hello:"world"},['hello', 'world']).warn({bg:'black', style:'bold'});
cout(['one', 'two', 2], {hello:"world"},['hello', 'world']).data();
cout(['one', 'two', 2], {hello:"world"},['hello', 'world']).silly({bg:'white'});
cout(cout.kawari('I\'m known as %s', "iwatakeshi")).warn();