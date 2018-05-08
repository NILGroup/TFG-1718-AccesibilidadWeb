chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    debugger;
    var dataToExport = request.DataToExport;
    chrome.downloads.download({
     url: dataToExport,
     filename: "prueba.txt",
    });
    console.log(request);
    console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  });
