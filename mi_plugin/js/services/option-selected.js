var userText= "";
var serviceCalled = "";
$(document).ready(function(){
  //Llamar al servicio de definiciones
  $("#Definitions").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/tfgapi/servicios/rest/definicion/json/' + userText;
    serviceCalled = this.textContent;
    callingGetWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de sinónimos
  $("#Synonyms").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/tfgapi/servicios/rest/sinonimos/json/' + userText;
    var serviceCalled = this.textContent;
    callingGetWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de antónimos
  $("#Antonyms").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/tfgapi/servicios/rest/antonimos/json/' + userText;
    var serviceCalled = this.textContent;
    callingGetWebService(url, userText, serviceCalled);
  });
  //Llamar al servicio de pictogramas
  $("#Pictograms").click(function(){
    debugger;
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/serviciopictar/' + userText;
    var serviceCalled = this.textContent;
    callingPictogramsService(url, userText, serviceCalled);
  });
  //Llamar al servicio de resumenes
  $("#Summary").click(function(){
    getSearchText();
    var url = 'https://sesat.fdi.ucm.es/grafeno/run/summary_es';
    var serviceCalled = this.textContent;
    callingSummarytWebService(url, userText, serviceCalled);
  });
  //Abrir nueva pestaña de Youtube
  $("#Youtube").click(function(){
    getSearchText();
    var url = "https://www.youtube.com/results?search_query=" + userText;
    openCenteringWindow(url);
  });
  //Abrir nueva pestaña de Wikipedia
  $("#Wikipedia").click(function(){
    getSearchText();
    var url = "https://es.wikipedia.org/wiki/" + userText;
    openCenteringWindow(url);
  });
  //Abrir popup con los datos guardados por el usuario
  $("#getChangesId").click(function(){
    var savedUserData = [];
    chrome.storage.sync.get('dataSaved', function (result) {
      savedUserData = result.dataSaved;
      if(savedUserData != null){
        openSavedUserDataModal(savedUserData);
      }
    });
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

function callingGetWebService(url, selectedText, serviceCalled) {
  if(selectedText == "") return;
  debugger;
  $.get(url, function( data ) {
    var jsonData = JSON.parse(data);
    var arrayDef = [];
    switch (serviceCalled) {
      case "Definiciones":
        arrayDef = parseDefinitionsData(jsonData);
        break;
      case "Palabras parecidas":
        arrayDef = parseSynonymsData(jsonData);
        break;
      case "Palabras diferentes":
        arrayDef = parseAntonymsData(jsonData);
        break;
    }
      openTextModal(arrayDef, serviceCalled, selectedText);
  });
}

function callingSummarytWebService(url, selectedText, serviceCalled) {
  debugger;
  var inputDataJson = {}
  inputDataJson["text"] = selectedText;

  if(selectedText == "") return;

  $.ajax({
    url:url,
    type:"POST",
    data:inputDataJson,
    dataType: "json",
    async:false,
    headers: {
      'Content-Type':'application/json'
    },
    success: function(){
      //
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
			  alert("error");
		}
  });
  // $.post(url, inputDataJson, function(data,status){
  //   alert("Data: " + data + "\nStatus: " + status);
  // });
}

function callingPictogramsService(url, selectedText, serviceCalled){
  $.get("http://hypatia.fdi.ucm.es/conversor/Pictos/6009", function( data ) {
    debugger;
    var a = [];
    a.push(data);
    openImgDataModal(a, serviceCalled, selectedText);
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

function parseDefinitionsData(jsonData){
  var arrayDefinitions = [];
  $.each(jsonData.definiciones, function (index, value) {
    var def = value.definicion;
    arrayDefinitions.push(def);
  });
  return arrayDefinitions;
}

function parseSynonymsData(jsonData){
  var arraySynonyms = [];
  $.each(jsonData.sinonimos, function (index, value) {
    var def = value.sinonimo;
    arraySynonyms.push(def);
  });
  return arraySynonyms;
}

function parseAntonymsData(jsonData){
  var arrayAntonyms = [];
  $.each(jsonData.antonimos, function (index, value) {
    var def = value.antonimo;
    arrayAntonyms.push(def);
  });
  return arrayAntonyms;
}

function parsePictogramsData(jsonData){


}
