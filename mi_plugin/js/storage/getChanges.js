function loadChanges(){
  var array = [];
  chrome.storage.sync.get('dataSaved', function (result) {
    array = result.dataSaved;
    $.each(array, function (index, value) {
        alert(value);
    });
  });
}
