cout
====
[![License](http://img.shields.io/npm/l/cout.svg)](http://img.shields.io/npm/l/cout.svg)
[![Dependencies](http://img.shields.io/david/iwatakeshi/cout.svg)](http://img.shields.io/david/iwatakeshi/cout.svg)
[![Downloads](http://img.shields.io/npm/dm/cout.svg)](http://img.shields.io/npm/dm/cout.svg)
[![Version](http://img.shields.io/npm/v/cout.svg)](http://img.shields.io/npm/v/cout.svg)

[![NPM](https://nodei.co/npm/cout.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cout/)

A basic JavaScript console utility with sprintf and colors support.

##Install

```bash
sudo npm install --save cout
```

##Usage

```js
var cout = require('cout'),
//sprintf(..., ...) or use cout.kawari(..., ...)
sprintf = cout.kawari;

//configure (optional)
cout.config({
	cout: ['warn', 'error']
});

//will print on a single line (no color)
cout("Hello", "World", {hello: "world"}, ['hello', 'world'], 1,2,3).end();
//will print on newlines (can be changed through cout.config()) (no color)
cout("Hello", "World", {hello: "world"}, ['hello', 'world'], 1,2,3).endl();

//will print with new line color (see themes for color/level)
cout("Hello", "World", {hello: "world"}, ['hello', 'world'], 1,2,3).warn();

//you can customize the background and styles (see styles)
cout("Hello", "World", {hello: "world"}, ['hello', 'world'], 1,2,3).warn({bg: 'green', style: 'bold'});

//sprintf from the top level (to keep things simple internally)
cout(sprintf('...', '...')).warn();
```

##Methods

* `end()`
* `endl()`
* `warn()`
* `data()`
* `debug()`
* `error()`
* `help()`
* `info()`
* `input()`
* `prompt()`
* `silly()`
* `verbose()`

##Config
The following are the default values but can be changed

```js
//configure
cout.config({
	....options....
});

{
	//specify which level (Array or String) to display
	//by default '*' means display all levels
	cout: ['*'],
	//default theme/colors/levels
	theme: {
	  data: 'grey',
	  debug: 'blue',
	  error: 'red',
	  help: 'cyan',
	  info: 'green',
	  input: 'grey',
	  prompt: 'grey',
	  silly: 'rainbow',
	  verbose: 'cyan',
	  warn: 'yellow',
	},
	//used for pretty printing json/plain objects
	json:{
	    space: 2
	},
	//specify the number of new lines.
	newline: '\n'
}


```

##Styles

####Usage

```js
//use style key
{style: ...}
```

* reset
* bold
* dim
* italic
* underline
* inverse
* hidden
* strikethrough

##Background color

####Usage

```js
//use bg key
{bg: ...}
```
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white


##Test

From lack of knowledge, I do not know how to test outputs and colors....that said, there is a test.js file but it's a very limited test. If you know the best way to test please let me know @github issues. Thanks!

##Changlog

*0.0.1*

* Initial commit

*0.0.2*

* Cleaned code and removed confusing debug statement.
* Updated readme

*0.0.3*

* Updated readme
* Removed unnecessary comments.

*0.0.4*

* Added node_modules to .gitignore

*0.0.5*

* Added boolean support. You can now set `{cout:...}` to `true` or `false`.
