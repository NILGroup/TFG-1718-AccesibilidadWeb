var theText;

$(document).ready(function(){
  //Llamar al servicio de definiciones
  $("#definitionPopup").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/xml/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de sinónimos
  $("#synonymPopup").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/xml/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de antónimos
  $("#antonymPopup").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/xml/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de pictogramas
  $("#imgPopup").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/pictograma/xml/' + theText;
    callingWebService(url, theText);
  });
  //Abrir nueva pestaña de Youtube
  $("#youtubePopup").click(function(){
    var url = "https://www.youtube.com";
    openCenteringWindow(url);
  });
});

window.addEventListener('mouseup', function(){
    var text = getSelectionText()
    if (text.length > 0){ // check there's some text selected
        theText = text;
    }
}, false)

function getSelectionText(){
    var selectedText = "";
    if (document.getSelection()){
        selectedText = document.getSelection().toString();
    }
    return selectedText;
}

function callingWebService(url, selectedText) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url);

    xmlHttpRequest.onload = function() {
         var myWindow = openCenteringWindow("");
         myWindow.document.write("<h1>" + selectedText + "</h1>");
         myWindow.document.write("<p>" + xmlHttpRequest.responseText + "<p>");
    };
    xmlHttpRequest.send();
    if(searchText != ""){
      document.getElementById("searchText").value = "";
    }
}
function getSearchText(){
  var searchText = document.getElementById('searchText').value;
  if(searchText != ""){
    theText = searchText;
  }
}
function openCenteringWindow(url){
  var width  = 900;
  var height  = 700;
  var left = (window.screen.width / 2) - ((width / 2) + 10);
  var top = (window.screen.height / 2) - ((height / 2) + 50);
  return  window.open(url, "_blank", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left="
  + left + ",top=" + top + ",screenX=" + left + ",screenY="
  + top + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");

}
