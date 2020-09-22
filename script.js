//GITHUB
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

let newHeading = document.createElement('h1');

newHeading.id = "header-new";
newHeading.innerHTML = "This is a new header";

document.body.appendChild(newHeading);

// The same will go below with the creation of a new paragraph.

let newParagraph = document.createElement('p');

newParagraph.id = "paragraph-new";
newParagraph.innerHTML = " Hello and welcome to my new web project. During this project, " + 
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

let newHr = document.createElement('hr');

newHr.id = "hr-separator";

document.body.appendChild(newHr);

let learningPart = document.createElement('p');

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
let button = document.getElementById('textButton');
let text = document.getElementById('textarea');

// Secondly, we'd like to generate a new number everytime 
// we push the button. So, everytime we click (button.onclick)
// the button, a function will fire.
// The function will contain a variety of things.

button.onclick = function() {
    // This is a variable that contains an array of numbers from 1 to 6.
    
    let numbers = ['1', '2', '3', '4', '5', '6'];
    
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

