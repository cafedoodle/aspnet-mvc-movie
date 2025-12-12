// myScript.js  

// Function to display a greeting message  
function displayGreeting() {
    alert("Hello! Welcome to our website."); //test
}  

function displayDemo() {
    // Example of a JavaScript file with potential security issues  
    const userInput = "2 + 2"; // This could be any user-controlled input  
    const result = eval(userInput); // Using eval can lead to security vulnerabilities

    document.getElementById('greeting').innerHTML = eval(userInput);
    console.log("The result is: " + result);
    // Call the vulnerable function to demonstrate XSS
}


$(document).ready(function () {
    alert("This is a specific script for My Page!"); // Your custom JavaScript code
    //displayGreeting();
    //setupButtonClick();
    //fetchData();

    

});  
