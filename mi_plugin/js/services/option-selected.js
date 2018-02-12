function callingWebService(url, selectedText) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url);

    xmlHttpRequest.onload = function() {
         var myWindow = window.open("", "MsgWindow", "width=200,height=100");
         myWindow.document.write("<h1>" + selectedText + "</h1>");
         myWindow.document.write("<p>" + xmlHttpRequest.responseText + "<p>");
    };
    xmlHttpRequest.send();
}
//$(function(){
$(document).ready(function(){
  //!!
  $("#searchTextPopup").click(function(e){
  });
  //Llamar al servicio de definiciones
  $("#definitionPopup").click(function(e){
    var textt = localStorage.getItem("text");
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/' + textt;
    callingWebService(url, textt);
  });
  //Llamar al servicio de sinónimos
  $("#synonymPopup").click(function(e){
    e.preventDefault();
    window.open("https://www.Youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  });
  //Llamar al servicio de antónimos
  $("#antonymPopup").click(function(e){
    e.preventDefault();
    window.open("https://www.Youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  });
  //Llamar al servicio de pictogramas
  $("#imgPopup").click(function(e){
    e.preventDefault();
    window.open("https://www.Youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  });
  //Abrir nueva pestaña de Youtube
  $("#youtubePopup").click(function(e){
    e.preventDefault();
    window.open("https://www.Youtube.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  });
});
