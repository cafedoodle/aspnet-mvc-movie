// myScript.js  

// Function to display a greeting message  
function displayGreeting() {
    alert("Hello! Welcome to our website.");
}  

// WARNING: Vulnerable code for testing purposes
function displayUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); // Source of untrusted data

    if (name) {
        // Sink: innerHTML interprets the string as HTML, triggering a CodeQL XSS alert (CWE-079)
        document.getElementById('greeting').innerHTML = 'Hello, ' + name;
    }
}
// Example of how an attacker might use this:
// https://example.com/page.html?name=<script>alert('XSS Attack!');</script>



$(document).ready(function () {
    alert("This is a specific script for My Page!"); // Your custom JavaScript code  
    //displayGreeting();
    //setupButtonClick();
    //fetchData();
});  