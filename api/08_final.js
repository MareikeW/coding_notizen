/**
 * Challenge: 
 * 
 * Part 1: write a `setTimeout` command. Have it wait for 2000 ms before logging "I finally ran!" to the console
 * 
 * Part 2: Move the anonymous in-line function to its own, named function
 */

function callback() {
    console.log("I finally ran!");
}
// callback === eine Callback-Funktion, die nach zwei Sekunden ausgeführt wird.
setTimeout(callback, 2000);



function callback() {
    console.log("I finally ran!");
}
// callback === keine Callback-Funktion. Sie wird sofort ausgeführt.
setTimeout(callback, 2000);