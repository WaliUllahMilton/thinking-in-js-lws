## how the web works :

when a user hit any website browser make a request to DNS(Domain Name System) for IP(Internet Protocol) address(where
website is hosted or lived),
DNS give the IP address to browser after that browser make a request to Server with this IP address and Server send
the copy of the code to the browser as a response and browser download it in DOM tree structure then
browser show the website from DOM

when someone go to [www.facebook.com](http://www.facebook.com/)

1. browser make a req to DNS for real IP (192.23.34.34)
2. after getting the real IP browser make a HTTP req to the Server.
3. Server send the response to the Browser.
4. browser download the code and show to the user.

## why JS :

1. browser only can execute JS that's why all the language has to converter to js for web
2. JS is most popular and widely used language.
3. JS is omnipresent that's mean JS can be used in website,mobile app,desktop app
4. JS is IOT
5. JS have huge ecosystem and support in the world
6. fullstack web development can be done by JS
7. performance and scability
8. best for microservice architecture(Node.js)

Js performance was very slow but after launching Google chrome at 2008 js got boost because google chrome was came with v8 engine for execute js code which was fast from others,node.js was introduce at 2009 for sever side and then
js got the super boost and popularity.node.js uses v8 engine to execute js code.

## Microservice Architechture :

before microservice architecture everything was Monolithic [architecture.In](http://architecture.in/) Monolithic architecture every part of the program
is connected with each other.therefore,if any of the code get crash full program will be crashed

problems in Monolithic architecture :

1. Large and complex application : in large project it get complex.because there are huge code in large project and if any parts of the program crash full
program will be crashed.
2. Slow development : in team work monolithic is slow.
3. Block continuous development : after publishing the project when we want to update any parts of the program the we have
to update full program.

on the other hand Microservice works differently,in Microservice all the parts of the code will be separate and no one is
connected with each other.that's why if any parts crash full program will not crashed everything will run expect the
crashed [parts.in](http://parts.in/) microservice all the service is independent.

## Node.js is best :

1.I/O speed : I/O speed means when we sent a req to the server for any data from the server or we do somethin from file
system this kind of tasks known as I/O(input/output).(Node.js fast)
2.start-up time : the time during start or restart the server.(Node.js fast)
3.Memory Usage : Memory or RAM is costly for server.Node.js take less memory to run.

## what is JS :

JS is a high-level interpreted Just-in time compiled dynamically type multi-paradigm single threaded non-blocking
asynchronous prototype base programming language which follow the ECMAScript specification.

## High-level language :

we know that computer doesn't know any thing without 0 and 1, when we write a program in js,it converted into Assembly
language and then it converted to Machine code and then perform the task which we command.js is far away from the machine
code and those programming language are called high level language which are away from machine code.

JS code -> Assembly Language -> Machine code -> Hardware

## Interpreter :

interpreted convert the program into machine code line by line and after that run the code line by line.that's why
interpreter is slow but easy to debug cause when a program run line by line we can find the error easily.

## compiler :

compiler take the whole program and convert into the machine code all together and after that run the code.compile is very
fast but hard to debug.

## Just-in time :

Just-in time compiler is a combination of interpreter and compiler,program is breaked by instruction and all the
instruction are goes into compiler and then run the code after compilation.right now js is JIT compiled language
which makes js so fast and easy to debug.

## Dynamically Typed :

every programmming language check the types of data either during compilation neither during running time.which
programming language are check the types during compilation is known as Static Typed Language and those language are check
the types during run time is known as dynamically typed laguage. js check the type during running time that's why js is
dynamically typed language.

## Prototype :

js don't have classes, js is made with prototype. js inherit the data and methods from it's parent by prototype.in programming
language we made object from class but in js we made object from constructor function

## Multi-thread-blocking-synchronous :

suppose in a restaurent there are three waiter(thread) now 3 customer(instruction) came in restaurent all of the waiter goes to the customer and take the order
and all the waiter give the order(task) to cheif and waiting(block) for the order ready.during this time if anymore customer come then the customer will have to wait
because all of the waiter is blocked [now.so](http://now.so/),no one can take the order.restaurent have to increase their customer for don't waiting the [customer.in](http://customer.in/) multi thread there have
many thread and one thread will do task after complete the task the thread will goes to next.

## Single-thread-non-blocking-asynchronous :

in single there will be a single thread and take the task to compiler and don't wait for the complete thread(non-block) will go and bring another task.

# **v8 engine:**

google introduce v8 engine at 2009 in google chrome browser.before v8 js was interpreted language but v8 engine implements JIT compilation and make js faster.v8 engine written in c++

## Node.js :

node.js is server run time environment made in c++ run with v8 engine.node.js follow the microservice architecture.node js make programmer to perform server side tasks with js.

# **js scope :**

outside of any function or block(carly braces) anything is written will present in global scope, 

inside the function the  scope is function scope,function scope has the permision of access to it’s parent's scope.the way is scope connected is known as scope chain.there are an another typpe of scope which is block scope({ carly braces }).only child can access the parents scope but parents will not able to access it’s child scope.

# **JS var,let,const :**

before es6 we can only create variable with var.but there was some issue with var.var can be declare as many as. var is function scope

let and const was introduce in es6 let cannot be redeclare but can be reassign as many as want 

const variable have declare and assign the value in same time.const cannot be reassign.

let and const are block scope.

# closure :

when a function return another function,the returned function will remember the data usage from it’s parent function in the closure and which data are not used in child those will be move to the gerbage collection.with closure programmer can hide the data.

# Hoisting :



# prototype :

js is prototype based language.child inherit all the methods from parent’s. all the parents method are present in prototype.we can add prototype with name.prototype = function(){}.the process of child to parent, parent to grand parent’s prototype is called prototype chain.
new keyword use for making new array or object.

# prototype inheritance : 

function Person(name,)


![alternate image text](/Capture.PNG)