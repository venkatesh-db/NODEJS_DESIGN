console.log("APPRAOCH1")

function gratitude( name ){        // data  is visible only in this function
    var  person = "sathish"
    console.log(person , name )
}

gratitude("mother")

function happiness( name ){   // data  is visible only in this function is returned to another variables
     return name

}

ret=happiness ("love marriage")
console.log("ret value",ret)


console.log("APPRAOCH2")

var happiness = new Array()

happiness.push("1 lakh per month")

let happines = ["love marriage", "2 cr", "1 lakh per month"];

console.log("APPROACH2",happiness,happines)

console.log("APPRAOCH3")

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };


 let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key


console.log("APPROACH3",user,map)

console.log("APPRAOCH7")


// Defining object
let persons = {
    first_name: 'Mukul',
    last_name: 'Latiyan',
    
    //method
    getFunction: function () {
    return (`The name of the person is
    ${persons.first_name} ${persons.last_name}`)
    },
    //object within object
    phone_number: {
    mobile: '12345',
    landline: '6789'
    }
    }
    console.log(persons.getFunction());
    console.log(persons.phone_number.landline);


    const friends = [
        {
          name: "Marc",
          isMember: true,
        },
        {
          name: "John",
          isMember: false,
        },
        {
          name: "Kris",
          isMember: true,
        },
        {
          name: "Elizabeth",
          isMember: true,
        },
      ]
    
      console.log( friends[0].name )



      hello = function() {
        return "Hello World!";
      }
      
      hello1 = () => {
        return "smiling  World!";
      }
    
     ret= hello()
     ret1= hello1()
     console.log( ret,ret1)
    
    console.log("APPRAOCH10")




function myDisplayer(some) {
  
     console.log("APPRAOCH12" , some )
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


  myCalculator(15, 15,  function (some) {
  
    console.log("APPRAOCH12" , some )
 } );


console.log("APPRAOCH13")


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);

console.log("APPRAOCH14")


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"

}

f();



NODE JS FORMULA1: 

PROCESS : object creation , method calls,  function passing in methods

var fs = require("fs");  
var writerStream = fs.createWriteStream('output.txt');  
writerStream.write(data,'UTF8');  
writerStream.end(); 
writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  

NODE JS FORMULA2:  Nested arrow functions 

const net = require('net');  
var server = net.createServer((socket) => {  
  socket.end('goodbye\n');  
}).on('error', (err) => {  
  // handle errors here  
  throw err;  
});  
// grab a random port.  
server.listen(() => {  
  address = server.address();  
  console.log('opened server on %j', address);  
});  


NODE JS FORMULA3:  API 

var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});

server.listen(5000); //3 - listen for any incoming requests


NODE JS FORMULA4:  API TYPES 

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});


