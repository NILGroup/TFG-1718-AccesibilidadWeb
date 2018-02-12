// De momento no lo uso, js para cambiar de color la pestaña seleccionada de la toolbar
$('#toolbar > ul.nav li a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
});
