var height = '45px';
var div = document.createElement('div');
div.setAttribute("id", "customToolbarMenu");

document.documentElement.appendChild(div);
$("#customToolbarMenu").load(chrome.extension.getURL('../toolbar.html'));
var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';
