/*
Con este archivo inyectamos su secuencia de comandos en la página web de destino. 
Sin este archivo, es imposible obtener el texto seleccionado.
*/


chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'summary': window.getSelection().toString()
});


/*
//Si queremos obtener el código fuente HTML del texto seleccionado: -- no veo diferencia

// http://groups.google.com/group/mozilla.dev.tech.dom/browse_thread/thread/7ecbbb066ff2027f
// Martin Honnen
//  http://JavaScript.FAQTs.com/ 
var selection = window.getSelection();
var range = selection.getRangeAt(0);
if (range) {
	var div = document.createElement('div');
	div.appendChild(range.cloneContents());
	vs=div.innerHTML;
} 
chrome.runtime.sendMessage({
	'title': document.title,
	'url': window.location.href,
	'summary': vs
});
*/





