chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': "http://ulmic.ru"}, function(tab) {
  });
});

//var position = document.documentElement.innerHTML.indexOf('#МИЦ');
//alert(position);
