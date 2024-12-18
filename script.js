
//prototype inheritance

// function Person(name,age){//parent class
//     this.name = name
//     this.age = age
// }

// function Cricketer(type,country,name,age){// sub class
//     Person.call(this) // call the person with the value of this(Cricketer) object
//     this.name = name
//     this.age = age
//     this.type = type
//     this.country = country
// }

// Person.prototype = { //add custom prototype in person object
//     eat : function(){
//         console.log(this.name)
//     }
// }
// Cricketer.prototype = Object.create(Person.prototype); //inherit the all prototype of Person  in Criceter class
// Cricketer.prototype.constructor = Cricketer //over write the constructor

// const shakib = new Cricketer("all rounder","BD","shakib",34);

// console.log(shakib)
// shakib.eat()


// that's how js inheritance work in object but in es6 js introduce class which behind the scene work like  prototype
//inheritance. (js don't have class. class is just a syntax in js)

//class inheritance

// class Person { //parents class
//     constructor(name,age){
//         this.name = name;
//         this.age =age;
//     }
//     eat(){ 
//         console.log(this.name);
//     }
// }

// class Cricketer extends Person{ //child class
//     constructor(name,age,type,country){
//         super(name,age) //calling the parents class
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
// }

// const tamim = new Cricketer("tamim",35,"Bats man","BD")
// console.log(tamim)
// tamim.eat()
//this is how class inheritance work in js. but behind the scene it converted into prototype inheritance

// class Person { 
//     constructor(name,age){
//         this.name = name; //property
//         this.age =age;
//     }
//     eat(){ //method
//         console.log(this.name);
    // }
    // get getName(){ //getter 
    //     return this.name
    // }
    // set setName(name){  //setter
    //     this.name = name
    // }
//     static isAgeEqual(person1,person2){ //there are no relation between static method and object(messi or ronaldo).
//         console.dir(this)  // in static method this will means direct person class
//         console.log(person1.age === person2.age)
//     }
// }

// let messi = new Person("Messi",37)
// let ronaldo = new Person("Ronaldo",40)
// // console.log(messi.getName)
// // messi.setName = "leo"
// console.log(messi)
// Person.isAgeEqual(messi,ronaldo)


//polymorphism : 

// if any inherited class(child class) modified the any method of parents class is known as polymorphism.

// class Person { //parents class
//     constructor(name,age){
//         this.name = name;
//         this.age =age;
//     }
//     eat(){ 
//         console.log(this.name);
//     }
// }

// class Cricketer extends Person{ //child class
//     constructor(name,age,type,country){
//         super(name,age) //calling the parents class
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     eat(){//over write the method of parent class,if now we want also the properties or method of parent class then 
//         // we can call super function
//         super.eat()//now parent's method will also run 
//         console.log("shakib")
//     }
// }

// const tamim = new Cricketer("tamim",35,"Bats man","BD")
// console.log(tamim)
// tamim.eat()

{/*------------------------------------------------------------------------------------------*/}
//this keyword :

//this keyword help a function to reuse in difference context

//rules of use this-implicit binding, explicit bindin, new binding, window binding


//implicit binding- we have to go to the function call line and on the left side of function call before dot(.) notation
//will be the root and this will indicate this root
// let messi = {
//     name : "messi",
//     age : 37,
//     printPlayerName : function(){
//         console.log(this.name)
//     }
// }

// messi.printPlayerName() //here root is messi.so, this will indicate to messi.this is how implicit binding works in this
//importants *** only works in normal function in arrow function implicit binding will not works

// explicit binding-  call,apply,bind

// var printName = function(a,b){
//     console.log(this.name)
//     console.log(a)
//     console.log(b)
// }

// let messi ={
//     name : "messi"
// }
// let ron = {
//     name : "ronaldo"
// }
// printName.call(messi,34,33) // in call method first argument will be the "this",after that any arguments can be pass.and it's return the result. here messi object is this and 34 is exta argumentss\
// printName.call(ron)


// printName.apply(messi,[22,44]) // apply and call are similar the different is apply take the all extra arguments as array
//but in call take just the value


// const res= printName.bind(messi,55,55) //bind is similar to taking arguments call but its return the whole function
// console.log(res())


// new binding 

// function Person(name,age){//it's a constructor function
//     //suppose let this = Object.create(null)(it's just imagination of how new keyword works)
//     this.name = name;
//     this.age = age
//     console.log(name,age)
//     //return this
// }

// const messi = new Person("messi",37) // when js a function call by new keyword it's makes object with "this" name and return the obj (line 172 and 176)


//window binding
//when we will not use any of these method js will bind this to window object

// function Person(name){
//     this.name=name
//     console.log(this.name)
// }

// Person()// output will be undefined cause there are no value inside the name in window object


//2,3,4,5-
//sunday -2,3,4,5
//html,css //basic fundamentals




//##data stracture
//recursion(bfs,dfs),
//function,
//1.stack,
//2.queue
//


// function Person(name,age){
//     let person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age;
//     return person; 
// }
// Person.prototype = {
//     eat(){
//         console.log("Person is eating")
//     },
//     sleep(){
//         console.log("Person is Sleeping")
//     }
// }
// let tamim = Person("tamim",33)
// console.log(tamim)
// tamim.eat()