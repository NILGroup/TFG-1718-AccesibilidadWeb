/*
event.js no siempre se está ejecutando, pero se activará cuando otra vista en la extensión (por ejemplo, una ventana emergente)
llame a runtime.getBackgroundPage, al igual que el código en popup.js
*/

// This function is called onload in the popup code
function getPageDetails(callback) {
    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'js/selectedText/content.js' });
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  {
        // Call the callback function
        callback(message);
    });
};
