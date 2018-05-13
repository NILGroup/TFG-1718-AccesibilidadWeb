function openImgDataModal(array, serviceCalled, selectedText){
  debugger;
  jQuery('#modalTitleId').empty();
  jQuery('#modalTitleId').append(serviceCalled + ': ' + selectedText);
  jQuery('#modalBodyId').empty();

  jQuery.each(array, function (index, value) {
    debugger;
    var srcImg = "http://hypatia.fdi.ucm.es/conversor/Pictos/" + value;
    jQuery('#modalBodyId').append('<img style="-webkit-user-select: none;" src=' + srcImg +'>');
    jQuery('#modalBodyId').append('<br>');
  });

  jQuery('#saveChangesId').show();
  jQuery('#exportChangesId').hide();

}
