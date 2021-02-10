// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

console.log("The value in the object key >message< is:");
console.log(myObj.message);


// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const object = {
    "name": "Daniel Petersen",
    "age" : "32"
};
console.log("my object information is:");
console.log(object.name);
console.log(object.age);
// --------------------------------------
// Exercise 3 - Add a property 
// har tilføjet property direkte til objektet uden at gøre det gennem kode.
const stackOverflow = {"Propertykey": "value"};
// har tilføjet property til objektet med object.property syntax
stackOverflow.propertyOne = "foo";
console.log(stackOverflow.propertyOne);
// make a rule called isAllowed and let the value be true
function isAllowed()
{

    return true;
};
console.log(isAllowed());
if(isAllowed()==true){
    console.log("the rule value: true");
}
else if(isAllowed==false){
    console.log("the rule value: not true?!");
}
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
console.log(thisSong.description);
delete thisSong.description;
// laver check på om objectet's property har fået undefined sin værdi samt console.log tilsvarende
if((thisSong.description)==undefined){
    console.log("the property was deleted / set to undefined")
}
else if((thisSong.description)!=undefined){
    console.log("the property was not deleted / set to undefined ?");
}
console.log(thisSong.description);
//tilføjer property til object og console.log() det
thisSong.about = "Just a tribute.";
console.log(thisSong.about);
// --------------------------------------


