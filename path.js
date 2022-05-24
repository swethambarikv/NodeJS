var path = require('path');
path1="/home/aspirenav172/Desktop/myCodes-main/NodeJs/path.js";
console.log("Base name of given path : ",path.basename(path1),"\n");
console.log("Directory name of given path : ",path.dirname(path1),"\n");
console.log("Extension name of given path : ",path.extname(path1),"\n");


let pathString = path.format({
    dir: '/home/aspirenav172/Desktop/myCodes-main/NodeJs',
    base: 'path.js'
});

console.log("The path string is : ",pathString,"\n");
console.log("If it is absolute path? : ",path.isAbsolute("/home/"),"\n");    //If the path contains the complete details needed to locate a file.

let pathJoin = path.join('/home', 'aspirenav172', 'Desktop', 'myCodes-main','path.js');
console.log("The joined path is : ",pathJoin,"\n");

let pathObjects = path.parse('/home/aspirenav172/Desktop/myCodes-main/NodeJs/path.js');
console.log("Path Objects are : ",pathObjects,"\n");

let pathNormalize = path.normalize('//home/aspirenav172///Desktop/myCodes-main/NodeJs//path.js');
console.log("Normalized path : ",pathNormalize,"\n");

let pathRelative = path.relative('/home/aspirenav172/NodeJs/path.js','/home/aspirenav172/HTML,CSS/custom.js')
console.log("Relative path : ",pathRelative,"\n");

console.log("Current working directory:", __dirname);
console.log("Using Resolve : ",path.resolve());     //returns the directory
