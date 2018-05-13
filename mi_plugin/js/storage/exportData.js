// $(document).ready(function(){
//   $("#exportChangesId").click(function(){
//     debugger;
//     var prueba = "<p>hola</p>";
//     chrome.extension.sendMessage({ exportData: prueba });
//   });
// });


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     debugger;
//     var dataToExport = request.DataToExport;
//     chrome.downloads.download({
//      url: dataToExport,
//      filename: "prueba.txt",
//     });
//     console.log(request);
//     console.log(sender.tab ?
//               "from a content script:" + sender.tab.url :
//               "from the extension");
//   });
