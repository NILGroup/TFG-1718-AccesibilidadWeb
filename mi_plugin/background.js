chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.msg != null) {
      chrome.tts.speak(request.msg);
    }
    if(request.exportData != null) {
      debugger;
      chrome.downloads.download({
       url: request.exportData ,
       filename: "prueba.txt",
      });
    }

  }
);
