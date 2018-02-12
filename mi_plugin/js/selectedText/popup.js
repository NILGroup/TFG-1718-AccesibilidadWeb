var selectedText = "";

function setSelectedText(details) {
    //document.getElementById('output').innerText = details.summary;
    //callingWebService(details.summary);
    selectedText = details.summary;
    localStorage.setItem("text", selectedText);
    alert(selectedText);
    //callingWebService(selectedText)
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(setSelectedText);
        // The XMLHttpRequest API is asynchronous
    });
});
