var selectedText = "";

function setSelectedText(details) {
    //document.getElementById('output').innerText = details.summary;
    //callingWebService(details.summary);
    selectedText = details.summary;
    localStorage.setItem("text", selectedText);
    alert(selectedText);
    //callingWebService(selectedText)
}

window.addEventListener('load', function(evt) {
    chrome.runtime.getBackgroundPage(function(eventPage) {
       eventPage.getPageDetails(setSelectedText);
   });
});
