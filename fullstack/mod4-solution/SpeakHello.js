(function (window) {
    // Create object
    var helloSpeaker = {};
    var speakWord = "Hello";

    // Attach function to object
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // Expose object to window
    window.helloSpeaker = helloSpeaker;

}) (window); // Immediately invoke function