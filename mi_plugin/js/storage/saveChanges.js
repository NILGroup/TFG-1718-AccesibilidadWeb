$(document).ready(function(){
  $("#saveChangesId").click(function(){
    //var title = document.getElementById('#modalTitleId');
    debugger;
    var selectedCheckBoxArray = [];
    $("input:checkbox.optionsSelected:checked").each(function(){
      selectedCheckBoxArray.push($(this).val());
    });
    chrome.storage.sync.get('dataSaved', function (result) {
      if(result.dataSaved == null ) {
        chrome.storage.sync.set({'dataSaved': selectedCheckBoxArray}, function() {
                alert("guardado por primera vez");
            });
      } else {
        var persistentData = result.dataSaved;
        persistentData.push(selectedCheckBoxArray);
        chrome.storage.sync.set({'dataSaved': persistentData}, function() {
          // Notify that we saved.
          alert('Settings saved');
        })
      }
    });



  });
});
