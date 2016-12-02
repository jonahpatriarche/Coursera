// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
    Hello Yaakov
    Good Bye John
    Good Bye Jen
    Good Bye Jason
    Hello Paul
    Hello Frank
    Hello Larry
    Hello Paula
    Hello Laura
    Good Bye Jim
*/

// Wrap the entire contents of script.js inside of an IIFE
( function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using the 'speak' method or either helloSpeaker's or byeSpeaker's
    // 'speak' method.
    for (var x in names) {
        var name = names[x];

        // Retrieve the first letter of the current name in the loop.
        var firstLetter = name.charAt(0).toLowerCase();


        // Compare the 'firstLetter' to lower case 'j'.
        // If the same, call byeSpeaker's 'speak' method with the current name
        // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
        // name in the loop.
        if (firstLetter === 'j') {
            byeSpeaker.speak(name);
        }
        else {
            helloSpeaker.speak(name);
        }
    }
}) (window);
