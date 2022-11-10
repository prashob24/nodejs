//node j
//build in  modules can be imported using 'require' keyword in nodejs
//3rd party modules can be imported by typing "npm install module_ name" in the terminal and then importing them as local modules using 'require' keyword.




const http = require("http"); //importing the build in http module;
const express = require("express"); //3rd party module imported using npm insall express in terminal and then as local module here.
const send = require("./app"); //importing the exported function from the module app.js
const os = require("os");
const fs = require("fs");//in fs asynchronus and synchronous method will be in pairs . try using asynchronous method all the time
const path = require("path");



function helloWorld() {
    console.log("Hello World");//printing the  hello world.  In the terminal type 'node index.js' or 'node .' 
}
helloWorld(); //use 'node .' only if coding in "main" as mentioned in package.json. 

send('hi'); //calling the send variable.

console.log(__filename);// to get the complete path of the file;

console.log(__dirname);//to get the complete path  of the directory.

// os module

var totalMem = os.totalmem();
console.log(`the total memory is : ${totalMem}`);//using the template string. no concatenation in template string

var freeMem = os.freemem();
console.log(`the total memory is : ${freeMem}`)

//fs module

var writeFi = fs.writeFile("calc.js","Hi there",(err, data) => {
    console.log(writeFi); //creates a new file-calc.js with the content 'hi there'
})


var writeFiAsyn = fs.writeFile("calc.js","old data deleted",(err, data) => { // the function will be called after the writing is completed as its an asynconous process.
    console.log("write completed"); //here the old data is overwritten.
});

var readFileAsyn = fs.readFile("calc.js", (err, data) => {
    console.log(data.toString()); // the data will be logged in console in binary,so toString() used to convert that to a string.
});

var appendFile = fs.appendFile("calc.js", "appending the data", (err, data) => {
    console.log("appending completed");//appending is adding the data to the previous data in the mentioned file
});

// var deleteFile = fs.deleteFile("dele.js",(err, data) => {
//     console.log("deleted");//deleting the mentioned file.
// });

var readDir = fs.readdir("./", (err, data) => {
    console.log("directory read")
});
console.log(readDir);// shows the files in this folder

//path module

var pathPar = path.parse(__filename);//formats a path string into a path object.
console.log(pathPar);

var baseName = path.basename("users/index.js");//shows the last part of a path.
console.log(baseName);

var pathResolve = path.resolve("calc.js");//shows the absolute path  of the file .
console.log(pathResolve);

var pathJoin = path.join("/a", "b");
console.log(pathJoin);