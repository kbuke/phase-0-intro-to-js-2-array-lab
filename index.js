// Write your solution here!

//Define cats in order of Milo, Otis and Grfield
const cats = ["Milo","Otis","Garfield"];

//Create new functiom destructivelyAppendCat 
//This will be the same as variable "cats", but have a cat called Ralph at the end
//The order will be the same
//Use .PUSH() for destructive add on at end
function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph")
}

//Create new function destructivelyPrependCat
//This will be the same as variable "cats", but has a cat called Bob at the beginning
//The order will be the same
//Use .UNSHIFT() for destructive add on at beginning
function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob")
}

//Remove last cat from cats const
//Create function called destructivelyRemoveLastCat
//Use .SPLICE to destuctively split, and use .SPLICE(-1) to rm last element
function destructivelyRemoveLastCat() {
    return cats.splice(-1);
}

//Remove first cat from cats const
//Create function called destructivelyRemoveFirstCat
//Using .SPLICE(0,1) initiates elements at beginning and then only seperates first
function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}

//Create new function appendCat(name)
//Add new cat "Broom" to the bottom of list, without changing const cats
//Use [...cats, "name"] to add the name of the new cat to the bottom
function appendCat(Broom) {
    return [...cats, "Broom"]
}

//Create new function prependCat(name)
//Add new cat "Arnold" to list, without changing const cats
//Use [name,...cats] to add new cat name to beginning
function prependCat(Arnold) {
    return ["Arnold", ...cats]
}

//Create new function removeLastCat()
//Rm last cat on list (Garfield) without altering const cats
//Use .SLICE(0, -1) to rm the last element non-destructively
function removeLastCat() {
    return cats.slice(0, -1);
}

//Create new function removeFirstCat()
//Rm first cat on list (Milo) without altering const cats
function removeFirstCat() {
    return cats.slice(1); //Why do I not need to put (0, 1) like in above?
}