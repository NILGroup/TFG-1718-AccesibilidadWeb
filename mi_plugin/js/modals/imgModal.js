function openImgDataModal(array, serviceCalled, selectedText){
  jQuery('#modalTitleId').empty();
  jQuery('#modalTitleId').append(serviceCalled + ': ' + selectedText);
  jQuery('#modalBodyId').empty();

  jQuery.each(array, function (index, value) {
    jQuery('#modalBodyId').append('<img style="-webkit-user-select: none;" src="http://hypatia.fdi.ucm.es/conversor/Pictos/6009">');
    jQuery('#modalBodyId').append('<br>');
  });

  jQuery('#saveChangesId').show();
  jQuery('#exportChangesId').hide();

}
