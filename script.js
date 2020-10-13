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

// ARRAYS

/*

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle
Let’s now write this list in JavaScript, as an array:

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:

let concepts = ['creating arrays', 'array structures', 'array manipulation']

*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

/*
One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Remember from the previous exercise, arrays can store any data type — we can have an array that holds all the same data types or an array that holds different data types.

Diagram outlining an array literal that has 3 separate elements, a comma separates each element (a string, a number, and a boolean) and the elements are wrapped with square brackets
Let’s take a closer look at the syntax in the array example:

The array is represented by the square brackets [] and the content inside.
Each content item inside an array is called an element.
There are three different elements inside the array.
Each element inside the array is a different data type.
We can also save an array to a variable. You may have noticed we did this in the previous exercise:

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
*/

// ACCESSING ELEMENTS

/*

Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0.

*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);

// Error code (prints undefined, as there is no
// fourth element to display)
console.log(famousSayings[3]);

/*
In the previous exercise, you learned how to access elements inside an array or a string by using an index. Once you have access to an element in an array, you can update its value.

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
In the example above, the seasons array contained the names of the four seasons.

However, we decided that we preferred to say 'Autumn' instead of 'Fall'.

The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.
*/

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);

// ARRAYS WITH LET AND CONST

/*

You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.

*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);


// THE .LENGTH PROPERTY

/*

One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings. Check the example below:

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
In the example above, we log newYearsResolutions.length to the console using the following steps:

We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.
Then we log the length of newYearsResolution to the console.
Since newYearsResolution has two elements, so 2 would be logged to the console.
When we want to know how many elements are in an array, we can access the .length property.

*/

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// THE .PUSH METHOD

/*
Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push() allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
So, how does .push() work?

We access the push method by using dot notation, connecting push to itemTracker with a period.
Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
If you’re looking for a method that will mutate an array by adding elements to it, then .push() is the method for you!
*/

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('watch TV', 'Go outside');
console.log(chores);

// THE .POP() METHOD

/*
Another array method, .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
.pop() does not take any arguments, it simply removes the last element of newItemTracker.
.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
.pop() is a method that mutates the initial array.
When you need to mutate an array by removing the last element, use .pop().
*/

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores1.pop();
console.log(chores1);


// MORE ARRAY METHODS

/*
There are many more array methods than just .push() and .pop(). You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation.

.pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check MDN to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.

Below, we will explore some methods that we have not learned yet. We will use these methods to edit a grocery list. As you complete the steps, you can consult the MDN documentation to learn what each method does!
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Removes the first item from an array
groceryList.shift();
console.log(groceryList);

// Adds an item to the beginning of an array
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
/* Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.
*/
console.log(groceryList);

// Finds the exact place of an item inside an array
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// MUTATED ARRAYS

/*
Throughout the lesson we went over arrays being mutable, or changeable. Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
Let’s go over what happened in the example:

The flowers array that has 3 elements.
The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
We call addFlower() with an argument of flowers which will execute the code inside addFlower.
We check the value of flowers and it now includes the 'lily' element! The array was mutated!
So when you pass an array into a function, 
if the array is mutated inside the function, 
that change will be maintained outside the function 
as well. You might also see this concept explained as 
pass-by-reference since what we’re actually passing the 
function is a reference to where the variable memory 
is stored and changing the memory.
*/

const concept = ['arrays', 'can', 'be', 'mutated'];

const fruits = ['apple', 'orange', 'pear'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

fruitAdd = (newFruit) => {
fruits.push('banana');
};

fruitAdd(fruits);
console.log(fruits);

changeArr(concept);

console.log(concept);

removeElement = (newArr) => {
newArr.pop();
};

removeElement(concept);
console.log(concept);

// NESTED ARRAYS

/*
Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

const nestedArr = [[1], [2, 3]];
To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
In the second console.log() statement, we have 
two bracket notations chained to nestedArr. 
We know that nestedArr[1] is the array [2, 3]. 
Then to grab the first element from that array, 
we use nestedArr[1][0] and we get the value of 2.
*/

const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];
console.log(target);


// PROJECT

/*
Using array methods, you will transform an array of strings into a secret message!

You should consult the Mozilla Developer Network (MDN) 
for reference on any method with which you are not 
familiar.

1.
Use an array method to remove the last string of the array secretMessage.

2.
Great! You can check your work by logging the .length of the array.
At this point, the length should be 1 less than the original length.

3.
Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.

4.
Change the word easily to the word right by accessing the index and replacing it.

5.
Use an array method to remove the first string of the array.

6.
Use an array method to add the string Programming to the beginning of the array.

7.
Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.


Answer down below:
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'Program');

secretMessage[7] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,8, 'know, but');
console.log(secretMessage);
console.log(secretMessage.join());


// LOOPS

// THE FOR LOOP

/*
Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
an iteration statement is used to update the iterator variable on each loop.
The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
In this example, the output would be the following:

0
1
2
3
Let’s break down the example:

The initialization is let counter = 0, so the loop will start counting at 0.
The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.
This for loop makes it possible to write 0, 1, 2, and 3 programmatically.
*/

// Write your code below
for (let counter = 5; counter < 11; counter++)
{
  console.log(counter);
}

// DOING THE EXACT OPPOSITE

/*
What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a backward for loop, we must:

Set the iterator variable to the highest desired value in the initialization expression.
Set the stopping condition for when the iterator variable is less than the desired amount.
The iterator should decrease in intervals after each iteration.

*/

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// LOOPING THROUGH ARRAYS

/*
for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

Check out the example below to see how for loops iterate on arrays:

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
This example would give you the following output:

Grizzly Bear
Sloth
Sea Lion
In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

With for loops, it’s easier for us to work with elements in arrays.

*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++)
{
  console.log('I would like to visit ' + vacationSpots[i]);
};


// NESTED LOOPS

/*
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop:

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
Let’s think about what’s happening in the nested 
loop in our example. For each element in the outer 
loop array, myArray, the inner loop will run in its 
entirety comparing the current element from the outer 
array, myArray[i], to each element in the inner array, 
yourArray[j]. When it finds a match, it prints a string 
to the console.
*/


let bobsFollowers = ['Mary', 'Jason', 'Ken', 'Daniel'];

let tinasFollowers = ['John', 'Jason', 'Ken'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let x = 0; x < tinasFollowers.length; x++)
  {
    // If both arrays have some string in common, push
    // the strings in common into the mutualFollowers
    // array
    if (bobsFollowers[i] === tinasFollowers[x])
    {
      mutualFollowers.push(bobsFollowers[i]);
    }
      }
}
console.log('Both people have ' + mutualFollowers + ' as friends');

// WHILE LOOP

/*
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
Let’s break down what’s happening with our while loop syntax:

The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.
What would happen if we didn’t increment counterTwo inside our block? If we didn’t include this, counterTwo would always have its initial value, 1. That would mean the testing condition counterTwo < 4 would always evaluate to true and our loop would never stop running! This is called an infinite loop and it’s something we always want to avoid. Infinite loops can take up all of your computer’s processing power potentially freezing your computer.

So you may be wondering when to use a while loop! The syntax of a for loop is ideal when we know how many times the loop should run, but we don’t always know this in advance. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade')
{
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// DO...WHILE LOOPS

/*
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
*/

let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded);


// BREAK

/*
Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
This is the output for the above code:

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!
break statements can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.
*/

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++)
{
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
};

  console.log("And if you don't know, now you know.");

// HIGHER-ORDER FUNCTIONS

/*
JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. Let’s pretend this function does important work and needs to be called repeatedly!

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
What if we wanted to rename this function without sacrificing the source code? We can re-assign the function to a variable with a suitably short name:

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name and methods such as .toString(). You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data. Let’s get some practice doing that!
*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();
// Here we check, what's the name of the function we took the name is2p2 from?!
console.log(is2p2.name);


// forEach Method

/*
The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
Diagram outlining the parts of an array iterator including the array identifier, the section that is the iterator, and the callback function

The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().

groceries.forEach() calls the forEach method on the groceries array.
.forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
The return value for .forEach() will always be undefined.
Another way to pass a callback for .forEach() is to use arrow function syntax.

groceries.forEach(groceryItem => console.log(groceryItem));
We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.
*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

function printFruits (fruits)
{
  console.log('I want to eat a ' + fruits);
}

fruits.forEach(printFruits);
// I remind you that we can always do the same thing with a for loop, but in this example I'm showing you
// the use of the functions and forEach method...









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
    } 
    else {
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

// FACTORY FUNCTIONS

/*
So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!
*/

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);

tinCan.beep();


// We can also do the exact same thing by leaving the object keys by themselves
// without changing anything...For example...

/*

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

*/

// DESTRUCTURED ASSIGNMENT

/*
We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
If we wanted to extract the residence property as a variable, we could using the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
Look back at the vampire object’s properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

We can even use destructured assignment to grab nested properties of an object:

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

An example:
*/

const superRobot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

// We put the name functionality that currently represents the third key of our 
// object call superRobot.
const {functionality} = robot;

// We then call the const just above to recall the beep method...
functionality.beep();

// BUILT-IN OBJECT METHODS

/*
In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.

Let’s get acquainted with some of these methods and their documentation.
*/

const lastRobot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});

console.log(newRobot);

// TEAM STATS PROJECT

/*
We want to create and extract information about your favorite sports team.
Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: 
arrays, objects, etc.

Once created, you can manipulate these data structures as well 
as gain insights from them. For example, you might want to get the 
total number of games your team has played, or the average score of all 
of their games.

Steps:

1.
We want a data structure to store the information about our team. 
Create an empty team object.

2.
Our team has players, and the team plays games. We want to represent both of these. 
Add two properties to your team object. A _players property and a _games property 
that are both initialized to empty arrays.

3.
Populate the empty array that corresponds to the _players key in your team 
object with three actual players. They should be in the following format:

{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}
You should put each player on a new line to prevent the line from getting too long.

4.
Populate the empty array that corresponds to the _games key in 
your object with three actual games. They should be in the following format:

{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}

5.
Create getter methods for your _players and _games keys. 
You do not need to create setter methods, because we don’t want 
anyone to change the values saved to these keys.

6.
We want to add a new player to your team. 
Add a method addPlayer to your team object. 
This method should take in three parameters: firstName, 
lastName, and age. It should create a player object, 
and add them to the team‘s players array.

7.
Below your team object, invoke your addPlayer method on the following players:
Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.

Print out the team‘s players to check they were all properly added.

8.
The scorekeeper has some new information for us! 
Add a similar method for recording game results called addGame that:

takes in an opponent’s name,
your team’s points,
the opponent’s points,
creates a game object,
adds the game object to your team‘s games array.

9.
Invoke your addGame method on three games and print the team‘s updated games array.

The answer to the project is down below...
*/

const team = {
  _players: [{
    firstName: 'Harry',
    lastName: 'King',
    age: 23,
    firstName2: 'John',
    lastName2: 'Doe',
    age2: 21,
    firstName3: 'Bob',
    lastName3: 'Ross',
    age3: 22
  }],
  get players() {
    return this._players;
  },

  _games: [{
    opponent: 'Arrows',
    teamPoints: 42,
    opponentPoints: 40,
    
    opponent2: 'Eagles',
    teamPoints2: 50,
    opponentsPoints2:40,

    opponent3: 'Bobcats',
    teamPoints3: 49,
    opponentPoints3: 39
  }],
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
const player = {
  firstName: firstName,
  lastName: lastName,
  age: age
};
this.players.push(player);
  },

  addGame(opponentName, teamPoints, opponentPoints) {
const game = {
  opponentName: opponentName,
  teamPoints: teamPoints,
  opponentPoints: opponentPoints
};
  this.games.push(game);
}
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Bucks', 82, 69);
team.addGame('Knicks', 43, 52);
team.addGame('Hawks', 83, 15);
console.log(team.games);

// This was the project of "Team Stats", 
// where you test your object, method, logging
// and key knowledge...







