var height = '40px';
var iframe = document.createElement('iframe');
iframe.setAttribute("id", "customToolbarMenu");
iframe.src = chrome.extension.getURL('toolbar.html');

document.documentElement.appendChild(iframe);

var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';
