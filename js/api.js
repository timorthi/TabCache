class Tab {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}

function getCurrentTabs(callback) {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
        var result = [];
        for(var i=0; i<tabs.length; i++) {
            if(tabs[i].url.indexOf("chrome-extension://") !== -1) {
            //Remove TabCache pages from array
                tabs.splice(i, 1);
            } else {
            //Add custom Tab object to result array
                var tb = new Tab(LZString.compress(tabs[i].title),
                                 LZString.compress(tabs[i].url));
                result.push(tb);
            }
        }
        callback(result);
    });
}

function isValidName(name) {

}
