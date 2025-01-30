chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    if (tab.url.includes("web.whatsapp.com")) {
      chrome.pageAction.show(tab.id);
    }
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.status === "hidden") {
    chrome.pageAction.setIcon({tabId: sender.tab.id, path: "icon-hidden.png"});
    chrome.pageAction.setTitle({tabId: sender.tab.id, title: "Status hidden"});
  } else if (request.status === "visible") {
    chrome.pageAction.setIcon({tabId: sender.tab.id, path: "icon.png"});
    chrome.pageAction.setTitle({tabId: sender.tab.id, title: "Status visible"});
  }
});
