chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.msg != null) {
      chrome.tts.speak(request.msg);
    } else if (request.url != null) {
        fetch(request.url)
            .then(response => response.json())
            .then(sendResponse);
        return true;
    }
  }
);
