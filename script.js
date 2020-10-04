//LOCALLY
/* We'd like to create a new HTML element in the index.html file...
So, I've first created a variable (newHeading), that nests inside a new 
element creation. Basically, I tell the program to create a new element (createElement),
which will be a new heading (h1) and then this element will be displayed in the document.


After that, we want the new variable (newHeading) to have a specific id in our HTML file
which will be called "header-new". Specifically, the newHeading (which we declared on line 22)
will be used to create the new id as shown on line 24.

Same, we will use the newHeading variable to edit the inside of the element we created.
So, inside the newHeading, we'll be editing the innerHTML, which will display "This is a new header".



Finally, as the createElement method (Line 22) can't just put the edited and added element
inside the HTML on its own, we use the appendChild method with the newHeading variable to insert the new element into our HTML file.


*/

let newHeading = document.createElement("h1");

newHeading.id = "header-new";
newHeading.innerHTML = "This is a new header";

document.body.appendChild(newHeading);

// The same will go below with the creation of a new paragraph.

let newParagraph = document.createElement("p");

newParagraph.id = "paragraph-new";
newParagraph.innerHTML =
  " Hello and welcome to my new web project. During this project, " +
  "I will be trying to learn more Javascript concepts and try to implement them into my own personal ones." +
  " The main reason I will be covering this project for you, is to make your lives easier on learning Javascript " +
  "because I know that sometimes learning alone can be very hard and frustrating." +
  " Stay tuned for this journey-documentation of me experiencing Javascript and learn along! :D";

// Below, I'm trying to style the paragraph by moving it more at the center (margins).
newParagraph.style.marginLeft = "30%";
newParagraph.style.marginRight = "30%";

// Sometimes, we want to care less about our CSS code or even try to make it appear less
// chaotic when it comes to someone reading our CSS files, so we can just style our components
// right from our JS files. This is what I'm doing here... I'm using my variable (newParagraph)
// to style (newParagraph.style) something that I want...specifically the border.
//Just like using CSS then we just put in our preferred values.
newParagraph.style.border = "1px solid black";
newParagraph.style.fontFamily = "Roboto";
newParagraph.style.padding = "10px";
newParagraph.style.fontSize = "24px";

document.body.appendChild(newParagraph);

let newHr = document.createElement("hr");

newHr.id = "hr-separator";

document.body.appendChild(newHr);

let learningPart = document.createElement("p");

learningPart.id = "learning-paragraph";
learningPart.innerHTML = "In this lesson we'll be learning about: ";
learningPart.style.marginLeft = "30%";
learningPart.style.marginRight = "30%";
learningPart.style.fontSize = "23px";

document.body.appendChild(learningPart);

//Declaring a new variable to create a new element just like we did in the two previous examples.
//This time we'll be creating a list.

/* let listToDo = document.createElement('li');
let secondList = document.createElement('li');
let thirdList = document.createElement('li');



listToDo.id = "todo-list";
listToDo.innerHTML = "How to declare a variable";
secondList.innerHTML = "How to write a function";
thirdList.innerHTML = "How to create an array";



listToDo.style.marginLeft = "30%";
listToDo.style.marginRight = "30%";
listToDo.style.fontFamily = "Times New Roman";

secondList.style.marginLeft = "30%";
secondList.style.marginRight = "30%";
secondList.style.fontFamily = "Times New Roman";

thirdList.style.marginLeft = "30%";
thirdList.style.marginRight = "30%";
thirdList.style.fontFamily = "Times New Roman";


document.body.appendChild(listToDo);
document.body.appendChild(secondList);
document.body.appendChild(thirdList);
*/

let btn = document.createElement("button");

btn.id = "button-new";
btn.innerHTML = "Blue Button";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.marginLeft = "30%";
btn.style.marginRight = "30%";

turnButtonRed = () => {
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
  btn.style.marginLeft = "30%";
  btn.style.marginRight = "30%";
  btn.style.border = "1px solid black";
  btn.style.fontFamily = "Roboto";
  btn.style.fontSize = "18px";
  btn.innerHTML = "Red Button";
};

btn.onclick = turnButtonRed;

document.body.appendChild(btn);

// MATH METHODS
// There are tons of ways to create a program that calculates numbers
// and then chooses a specific one or a random. Such a program
// can be written with the help of math methods.
// Math methods are used to show numbers and also randomize
// their sequence. Let me show you.

// Math.random() => Generates a decimal between 0 and 1
// Math.floor() => Rounds the decimal to the closest whole number.

// For example we'd like to make a program generate a number
// between 1 and 6

// We first "collect" the ids from each element we'd like to edit
let button = document.getElementById("textButton");
let text = document.getElementById("textarea");

// Secondly, we'd like to generate a new number everytime
// we push the button. So, everytime we click (button.onclick)
// the button, a function will fire.
// The function will contain a variety of things.

button.onclick = function () {
  // This is a variable that contains an array of numbers from 1 to 6.

  let numbers = ["1", "2", "3", "4", "5", "6"];

  // The randomNumbers variable contains the methods
  // we used above in the previous example (random & floor)
  // With this way, we generate a random number from 1 to 6
  // and then we take this number and reduce it to the clearest decimal.
  // After we do that, the number will be changed in the innerHTML in the whole sentence.

  var randomNumbers = Math.floor(Math.random() * numbers.length + 1);
  text.innerHTML = "The generated number is " + randomNumbers;
};

// At last, we append everything to be displayed in the HTML file.

document.body.appendChild(button);
document.body.appendChild(text);
document.body.appendChild(numbers);
document.body.appendChild(randomNumbers);

//UNDERSTANDING OBJECTS AND HOW THEY WORK

/* In this example, I'm going to be making a short tutorial on
* What is an object
* Object Syntax
* Short Example

Objects can be assigned to variables just like any JavaScript type.
We use curly braces, {}, to designate an object literal:

let spaceship = {}; ** spaceship is an empty object

We fill an object with unordered data. 
This data is organized into key-value pairs. 
A key is like a variable name that points to a location in memory 
that holds a value.

** An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

The spaceship object has two properties Fuel Type and color.
'Fuel Type' has quotation marks because it contains a space character.

Let's get into some examples...This time we're going 
to make another type of 'Fuel Type', the Turbo Power
*/

// This is an object, called fasterShip...
const fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  name: "Jonathan"
};

/* There are two ways we can access an object’s property. 
Let’s explore the first way— dot notation, ..

You’ve used dot notation to access the properties and methods 
of built-in objects and data instances: 

'hello'.length; ** For example, this returns 5

We can do the exact same thing with an object and its keys...

For example...
*/

fasterShip.color;
fasterShip["Fuel Type"];

// The upper two examples will give us a result of silver and Turbo Fuel
// But, if we enter a key that is not defined in the object model
// then, the result will be "undefined".
// We can always log the results if we need to see the results

//CHANGING OBJECT ATTRIBUTES

/* During a project, there might be some times, where 
we must change some things into our code or assign 
new values into some of our objects. 
 
That's why there are a couple of commands we can create,
to assign and delete values from within an object.

For example:

** We assign a new object, called spaceship

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

** We then log the object into the console and we get
** what the whole object contains...

console.log(spaceship);

** But, if we log an objects name and change it to another,
** the new name will be assigned as the new one ('Mars')
spaceship.homePlanet = 'Mars';
console.log(spaceship);


** The same goes with the name...
spaceship.name = 'Jonathan';
console.log(spaceship);

** We can delete an object key by typing this command:
delete spaceship.name;

** And this will delete the whole name key...
*/

/* Besides the normal (as we've seen) object syntax,
we can also put a whole function into an object 
*/

const cafeteria = {
 greeting() {
  console.log('Hello and welcome to our cafeteria!');
}
};
cafeteria.greeting;

//OBJECT PASS BY REFERENCE

/* Often we can declare an object with the "let" keyword
and then be able to change the whole object and its keys
with a brand new one. Objects are passed by reference. 
This means when we pass a variable assigned to an object
into a function as an argument, the computer interprets 
the parameter name as pointing to the space in memory 
holding that object. As a result, functions which change 
object properties actually mutate the object permanently 
(even when the object is assigned to a const variable).

**EXAMPLE**

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

Down here, we'll create a live example of an object 
reassignment

*/

//This is a simple object
let Thespaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// We create a new function with the obj(object's name)
// and as a parameter, we type in the key we'd like to 
// change...In this case, we'd like to change the 
// Fuel Type into 'Avocado Oil'
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

// We then create another function, that assigns a new key
// instead of changing one, as we did above...
let remotelyDisable = obj => {
  obj.disabled = true;
}

// Referencing the two functions, we'll get a whole new 
// object, with new keys...
greenEnergy(Thespaceship);
remotelyDisable(Thespaceship);
console.log(Thespaceship);

/* 
RESULT

{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }

  
*/

//LOOPING THROUGH OBJECTS 
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  },

  engines: {
    bigEngine: {
      name: 'Lotus',
      power: '120PS'
    },

    mediumEngine: {
      name:'Macro',
      power:'100PS'
    },

    smallEngine: {
      name: 'Minor',
      power:'80PS'
    }
  }
}; 

// What we do basically is, that we create a new variable in order for us to have access to the whole crew with one variable...
//For example, we declared variable 'crewMember', that represents everything in the object(the small inherited objects('captain, 'chief officer', medic, translator))
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

//The exact same thing we're doing here with the inversed order...
for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}

for (let enginesStuff in spaceship.engines) {
  console.log(`${enginesStuff}: ${spaceship.engines[enginesStuff].name}`);
}

// ADVANCED OBJECTS

/*
Objects are collections of related data and functionality. We store that functionality in methods on our objects:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

goat.makeSound(); // Prints baaa
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore
The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.

Let's see an example:
*/

// We first create a simple object with two simple keys and
// a function, called provideInfo()
// The function will return a specific phrase, which 
// will contain the other two keys (model & energyLevel)
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return 'I am ' + this.model + ' and my current energy level is ' + this.energyLevel;
  }
};

console.log(robot.provideInfo());

// ARROW FUNCTIONS AND THIS.

/*
We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined
In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that in the .diet() is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

To read more about either arrow functions or the global object check out the MDN documentation of the global object and arrow functions.

The key takeaway from the example above is to avoid using arrow functions when using this in a method!

Let's use the same example, but with a different
name:
*/

const advancedRobot = {
  energyLevel: 100,
  checkEnergy()  {
    console.log('Energy is currently at ' + advancedRobot.energyLevel + '%')
  }
}

advancedRobot.checkEnergy();

// PRIVACY

/* As I was reading the Codecademy documentation on 
Javascript objects, I found out an interesting thing about 
some things called getters and setters (We'll find out
what these are in the next lessons).

Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000
}
In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;

In later exercises, we’ll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have setters or getters.

Example below:
*/

const anotherRobot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

anotherRobot._energyLevel = 'high';
console.log(anotherRobot.recharge());

// This returns: 

// Recharged! Energy is currently at high30%.
// undefined

// Notice that a funky string is printed to the console!
// This is known as a side-effect of type-coercion. 
// No need to worry about what this means for now, but 
// it’s important to understand that you can cause unwanted
// side-effects when mutating objects and their properties.

 // GETTERS
 
 /*
 Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

person.fullName; // 'John Doe'
Notice that in the getter method above:

We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand.
Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

Okay, so let's check on an example:
 */

 // Here we have our object, called advancedObjectRobot
const advancedObjectRobot = {
  // Our robot has a model and an energyLevel
  _model: '1E78V2',
  _energyLevel: 100,
  // It also has a single method inside it
  get energyLevel() {
    // So here, we check if the energyLevel
    // (which apparently is 100 is a number)
    // If it's a number, then the function will
    // return a string
    if ( typeof this._energyLevel === 'number')
    {

    
    return 'My current energy level is ' + this._energyLevel;
    }
    // If not, the function will return another
    // string
    else {
      return 'System malfunction: cannot retrieve energy level';
    }
  },

  // I created a brand new getter here, that gets the
  // model of the robot and if it's valid, it logs
  // that the model number is valid in the console
  get model() {
    if (this._model === '1E78V2')
    return 'Model Number Valid'

    else 
    return 'Model Number Invalid, try again...'
  }
};

// Here we simply log the methods from the objects...
console.log(advancedObjectRobot.energyLevel);
console.log(advancedObjectRobot.model);

// SETTERS

/*
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
Notice that in the example above:

We can perform a check for what value is being assigned to this._age.
When we use the setter method, only values that are numbers will reassign this._age
There are different outputs depending on what values are used to reassign this._age.
Then to use the setter method:

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

person._age = 'forty-five'
console.log(person._age); // Prints forty-five

Another example:

*/

const theBestRobot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
if (typeof num === 'number' && num >= 0)
{
  this._numOfSensors = num;
}
else 
console.log('Pass in a number that is greater than or equal to 0');
  }
};

theBestRobot.numOfSensors = 38;
console.log(theBestRobot.numOfSensors);
console.log(theBestRobot._model);
console.log(theBestRobot._energyLevel);


