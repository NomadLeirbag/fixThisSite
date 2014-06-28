chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file: "removeStyles.js"});
  chrome.tabs.insertCSS({file: "style.css"});
  });
