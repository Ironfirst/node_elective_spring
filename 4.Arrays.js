// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
console.log("The letter positioned in array letters at index 1 is: " + letters[1]);
console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

//tilføjer et enkelt object til array
friends.push("Henriette");

//tilføjer flere objecter i et enkelt push til array 
friends.push("Soeren","Louise");

console.log(friends[0], friends[1], friends[2]);
// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

//const found = significantMathNumbers.find(element => element = 1729);
//console.log(found);

console.log(significantMathNumbers.indexOf(1729,0));
console.log(significantMathNumbers[significantMathNumbers.indexOf(1729,0)]);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
//iterere igennem og printer array indhold
console.log("Before splice method element add");
for( i=0; i <= diet.length-1;i++)
{
console.log(diet[i]);
}
// tilføjer de 2 elementer op array placering 2 
diet.splice(2, 0, "hamburger", "soda and pizza");
// iterere igennem og printer array indhold for at teste om elementerne er tilføjet korrekt
console.log("after splice method element add");
for( i=0; i <= diet.length-1;i++)
{
console.log(diet[i]);
}

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

// pop method removes last index og array
diet.pop();
console.log("after pop method removes last index element");
for( i=0; i <= diet.length-1;i++)
{
console.log(diet[i]);
}

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const copyDiet = diet.slice();
console.log("The new array copy using slice method");
for( h=0; h <= copyDiet.length-1;h++)
{
console.log(copyDiet[h]);
}

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
console.log("the letter for loop from b");
for(i=1;i<=lettersExpanded.length-1;i++)
{
    console.log(lettersExpanded[i])
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

console.log("print of the logged numbers from for loop iteration of array");
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]>6 || numbers[i]<0)
    {
        console.log(numbers[i]);
    }
    else
    {
        discardedNumbers.push(numbers[i]);
    }

}

console.log("Print of the discarded numbers array after");
for(i=0;i<=discardedNumbers.length-1;i++)
{
    console.log(discardedNumbers[i])
}
// --------------------------------------


