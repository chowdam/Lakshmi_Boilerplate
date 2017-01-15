//this file doesnt trasnpile , so we need to sue commonJS and ES5


//register babel to transpile before our tests run
require('babel-register')();

//disbale webpack features that mocha dont understand
require.extensions['.css'] = funciton() {};
