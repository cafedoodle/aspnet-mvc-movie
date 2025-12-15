// myScript.js  

// Function to display a greeting message  
function displayGreeting() {
    alert("Hello! Welcome to our website."); //test
}

// WARNING: Vulnerable code for testing purposes
function displayUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); // Source of untrusted data

    if (name) {
        // Sink: innerHTML interprets the string as HTML, triggering a CodeQL XSS alert (CWE-079)
        document.getElementById('greeting').textContent = 'Hello, ' + name;
        // Potential XSS vulnerability if 'name' contains malicious code
    }
}
// Example of how an attacker might use this:
// https://example.com/page.html?name=<script>alert('XSS Attack!');</script>

function displayDemo() {
    // Example of a JavaScript file with potential security issues  
    const urlParams = new URLSearchParams(window.location.search);
    const userInput = urlParams.get('userInput'); // Source of untrusted data

    //const userInput = "2 + 2"; // This could be any user-controlled input  
    //const result = eval(userInput); // Using eval can lead to security vulnerabilities

    //document.getElementById('greeting').innerHTML = eval(userInput);
    console.log("The result is: " + result);
    // Call the vulnerable function to demonstrate XSS
}

$(document).ready(function () {
    //add feature 1
    //add feature 2
    //add feature 3
    alert("This is a specific script for My Page!"); // Your custom JavaScript code
    //displayGreeting();
    //setupButtonClick();
    //fetchData();
});