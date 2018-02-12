/*
Con este archivo inyectamos su secuencia de comandos en la página web de destino.
Sin este archivo, es imposible obtener el texto seleccionado.
*/
chrome.runtime.sendMessage({
    'title': document.title,
    'url': window.location.href,
    'summary': window.getSelection().toString()
});
