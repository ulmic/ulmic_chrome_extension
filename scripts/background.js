chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': "http://ulmic.ru"}, function(tab) {
  });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  if (changeInfo.status == "complete") {
    chrome.tabs.executeScript(tabId, {file: 'scripts/insert_logo.js'});
  }
});
