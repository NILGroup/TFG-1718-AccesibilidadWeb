var theText;

$(document).ready(function(){
  //!!
  $("#searchTextPopup").click(function(e){
  });
  //Llamar al servicio de definiciones
  $("#definitionPopup").click(function(e){
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de sinónimos
  $("#synonymPopup").click(function(e){
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de antónimos
  $("#antonymPopup").click(function(e){
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de pictogramas
  $("#imgPopup").click(function(e){
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/pictograma/palabra/' + theText;
    callingWebService(url, theText);
  });
  //Abrir nueva pestaña de Youtube
  $("#youtubePopup").click(function(e){
    window.open("https://www.Youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  });
});

window.addEventListener('mouseup', function(){
    var text = getSelectionText()
    console.log(text.length);
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
         var myWindow = window.open("", "MsgWindow", "width=500,height=500");
         myWindow.document.write("<h1>" + selectedText + "</h1>");
         myWindow.document.write("<p>" + xmlHttpRequest.responseText + "<p>");
    };
    xmlHttpRequest.send();
}
