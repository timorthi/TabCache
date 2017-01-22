function getCurrentTabs() {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
        for(var i=0; i<tabs.length; i++) {
            if(tabs[i].url.indexOf("chrome-extension://") !== -1) {
                //Remove TabCache pages from array
                tabs.splice(i, 1);
            } //Else make Tab objects smaller?
        }

        return tabs;
    });
}
