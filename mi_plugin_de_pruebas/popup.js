/*
Hay declarar su página de fondo (event.js) y los permisos relativos en manifest.json
*/


function callingWebService(selectedText) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', 'http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/' + selectedText);
    //xmlHttpRequest.open('GET', 'http://sesat.fdi.ucm.es:8080/servicios/rest/pictograma/palabra/' + selectedText);

    xmlHttpRequest.onload = function() {
        alert(xmlHttpRequest.responseText);
    };
    xmlHttpRequest.send();

}
function onPageDetailsReceived(details) {
    document.getElementById('output').innerText = details.summary;
    callingWebService(details.summary)
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
        // The XMLHttpRequest API is asynchronous
    });
});
