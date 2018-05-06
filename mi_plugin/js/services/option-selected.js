var userText= "";
var serviceCalled = "";
$(document).ready(function(){
  //Llamar al servicio de definiciones
  $("#Definitions").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/tfgapi/servicios/rest/definicion/json/' + userText;
    serviceCalled = this.textContent;
    callingWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de sinónimos
  $("#Synonyms").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es:tfgapi/servicios/rest/sinonimos/json/' + userText;
    var serviceCalled = this.textContent;
    callingWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de antónimos
  $("#Antonyms").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es:tfgapi/servicios/rest/antonimos/json/' + userText;
    var serviceCalled = this.textContent;
    callingWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de pictogramas
  $("#Pictograms").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es:tfgapi/servicios/rest/pictograma/json/' + userText;
    var serviceCalled = this.textContent;
    callingWebService(url, userText, serviceCalled);
  });
  //Abrir nueva pestaña de Youtube
  $("#Youtube").click(function(){
    var url = "https://www.youtube.com/results?search_query=" + userText;
    openCenteringWindow(url);
  });
  //Abrir nueva pestaña de Wikipedia
  $("#Wikipedia").click(function(){
    var url = "https://es.wikipedia.org/wiki/" + userText;
    openCenteringWindow(url);
  });

  //Abrir popup con los datos guardados por el usuario
  $("#getChangesId").click(function(){
    loadChanges();
  });
});

window.addEventListener('mouseup', function(){
    var text = getSelectionText();
    if (text.length > 0){ // check there's some text selected
        userText = text;
    }
}, false)

function getSelectionText(){
  var selectedText = "";
  if (document.getSelection()){
      selectedText = document.getSelection().toString();
  }
  return selectedText;
}

function callingWebService(url, selectedText, serviceCalled) {
  if(selectedText == "") return;
  $.get(url, function( data ) {
      var jsonData = JSON.parse(data);

      var arrayDef = [];
      arrayDef = parseData(arrayDef, jsonData);
      openTextModal(arrayDef, serviceCalled, selectedText);
  });
}
function getSearchText(){
  var searchText = document.getElementById('searchText').value;
  if(searchText != ""){
    userText = searchText;
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

function parseData(arrayDef, jsonData){
  $.each(jsonData.definiciones, function (index, value) {
    var def = value.definicion;
    arrayDef.push(def);
  });
  return arrayDef;
}
