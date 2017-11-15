function switchOff(domain, url, tabId) {
  url =
    chrome.extension.getURL("nudgeoff.html") +
    "?" +
    "domain=" +
    domain +
    "&" +
    "url=" +
    encodeURIComponent(url);
  var nudged = false;
  // if ( domain last nudged was within 1 minute,,, ,, , , , )
  eventLog(domain, "off", { nudged, url });
  settingsLocal.domains[domain].off = true;
  chrome.tabs.update(tabId, { url }, function() {});
}

function switchOn(domain, url, tabId) {
  settingsLocal.domains[domain].off = false;
  url = decodeURIComponent(url);
  // missing any part about changing the settings
  chrome.tabs.update(tabId, { url }, function() {});
}