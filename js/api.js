class Tab {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}

class Cache {
    constructor(name, tabs) {
        this.name = name;
        this.tabs = tabs;
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

function saveCache(cache, callback) {
    //Retrieve cache array from storage then update it
    chrome.storage.local.get("caches", function(storage) {
        var caches = storage["caches"];

        //Check if the given cache name is valid
        var isValidName = true;
        if(typeof caches != "undefined") {
            //If caches is initialized, check for duplicate names
            for(var i=0; i<caches.length; i++) {
                if(cache.name == caches[i].name) isValidName = false;
            }
        }

        if(isValidName) {
            if(caches instanceof Array) {
                caches.push(cache);
            } else {
                caches = [];
                caches.push(cache);
            }
            chrome.storage.local.set({"caches" : caches});
        }
        callback(isValidName);
    });
}

function removeAllCaches(callback) {
    chrome.storage.local.remove("caches");
}
