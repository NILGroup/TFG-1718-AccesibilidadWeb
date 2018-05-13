function openSummaryTextModal(summary, serviceCalled, selectedText){
  var title = selectedText.substring(0,10) + "...";

  jQuery('#modalTitleId').empty();
  jQuery('#modalTitleId').append(serviceCalled + ': ' + title);

  jQuery('#modalBodyId').empty();
  jQuery('#modalBodyId').append('<p>'+ summary + '</p>');

  jQuery('#saveChangesId').show();
  jQuery('#exportChangesId').hide();

}
