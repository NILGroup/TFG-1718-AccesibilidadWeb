/*
Hay declarar su página de fondo (event.js) y los permisos relativos en manifest.json
*/

function onPageDetailsReceived(details) {
	document.getElementById('output').innerText = details.summary;
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        var selectedText = onPageDetailsReceived;
        //eventPage.getPageDetails(onPageDetailsReceived);
        eventPage.getPageDetails(selectedText);
    });
});
