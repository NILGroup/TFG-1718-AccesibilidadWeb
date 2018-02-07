var height = '40px';
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('toolbar.html');
iframe.style.height = height;
iframe.style.width = '100%';
iframe.style.position = 'fixed';
iframe.style.background = '#949494';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.zIndex = '938089';

document.documentElement.appendChild(iframe);

var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';

/**
var url = chrome.extension.getURL('toolbar.html');
var height = '35px';
var iframe = "<iframe scr='"+url+"' id='customToolbarMenu' style='height:" + height + "'></iframe>";

$('html').append(iframe);

$('body').css({
  '-webkit-transform': 'translateY(' + height + ')'
});**/
