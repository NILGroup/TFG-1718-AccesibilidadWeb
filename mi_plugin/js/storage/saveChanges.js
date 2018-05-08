$(document).ready(function(){
  $("#saveChangesId").click(function(){
    var selectedCheckBoxArray = [];
    var title = $('#modalTitleId').text();
    selectedCheckBoxArray.push(title);
    $("input:checkbox.optionsSelected:checked").each(function(){
      selectedCheckBoxArray.push($(this).val());
    });
    chrome.storage.sync.get('dataSaved', function (result) {
      if(result.dataSaved == null ) {
        chrome.storage.sync.set({'dataSaved': selectedCheckBoxArray}, function() {
          alert("guardado por primera vez");
        });
      }
      else {
        var historyData = result.dataSaved;
        var persistentData = selectedCheckBoxArray.concat(historyData);
        chrome.storage.sync.set({'dataSaved': persistentData}, function() {
          // Notify that we saved.
          alert('Settings saved');
        });
      }
    });
  });
});
