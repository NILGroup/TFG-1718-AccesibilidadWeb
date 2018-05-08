//no lo uso
function loadChanges(){
  var savedUserData = [];
  chrome.storage.sync.get('dataSaved', function (result) {
    savedUserData = result.dataSaved;

    if(savedUserData != null){
      savedUserDataModal(savedUserData);
    }
  });
}
