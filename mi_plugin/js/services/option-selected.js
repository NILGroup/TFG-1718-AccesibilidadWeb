var theText= "";
$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
      var inputValue = $(this).attr("value");
      $("#" + inputValue).toggle();
  });
  //Llamar al servicio de definiciones
  $("#Definitions").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de sinónimos
  $("#Synonyms").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de antónimos
  $("#Antonyms").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/' + theText;
    callingWebService(url, theText);
  });
  //Llamar al servicio de pictogramas
  $("#Pictograms").click(function(){
    getSearchText();
    var url = 'http://sesat.fdi.ucm.es:8080/servicios/rest/pictograma/json/' + theText;
    callingWebService(url, theText);
  });
  //Abrir nueva pestaña de Youtube
  $("#Youtube").click(function(){
    var url = "https://www.youtube.com/results?search_query=" + theText;
    openCenteringWindow(url);
  });
  //Abrir nueva pestaña de Wikipedia
  $("#Wikipedia").click(function(){
    var url = "https://es.wikipedia.org/wiki/" + theText;
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
    if(selectedText == "") return;
    $.get(url, function( data ) {
        var definitions = JSON.parse(data);
        console.log(definitions);
        var myWindow = openCenteringWindow("");
        myWindow.document.write("<h1>" + selectedText + "</h1>");
        myWindow.document.write("<p>" + data + "<p>");
    });
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
