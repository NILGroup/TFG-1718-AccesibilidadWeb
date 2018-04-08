var height = '45px';
var div = document.createElement('div');
div.setAttribute("id", "customToolbarMenu");

document.documentElement.appendChild(div);
$("#customToolbarMenu").load(chrome.extension.getURL('../toolbar.html'));
var bodyStyle = document.body.style;
var cssTransform = 'transform' in bodyStyle ? 'transform' : 'webkitTransform';
bodyStyle[cssTransform] = 'translateY(' + height + ')';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      var itemsToShow = request.greeting;
      $('.hidableItems').hide();
      itemsToShow.forEach(x => $("#" + x).show());
      console.log(request);
      console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
  });
