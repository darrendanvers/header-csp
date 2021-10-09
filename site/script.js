function _init() {
    console.log("Loaded script.js file.");

    // If you want to run code based on DOM events and do not add unsafe-inline
    // to the Content-Security-Policy header, you have to add them this way.
    window.addEventListener('DOMContentLoaded', () => loadToFill());

    // This may or may not work depending on the settings of the Content-Security-Policy header.
    // unsafe-eval must be set for this to run.
    runEval();
}

// Used to demonstrate executing JavaScript based on DOM events by calling
// the window.addEventListener() method.
function loadToFill() {
    document.getElementById("to-fill").innerText = "Loaded script.js";
}

// Used to demonstrate adding an event listener with JavaScript inline in the HTML.
function showAlert() {
    alert('Running showAlert');
}

// Used to demonstrate allowing or disallowing the eval() method.
function runEval() {
    eval("console.log('running eval')");
}

_init()