/* INITIALIZATION */
var navCaches = document.getElementById("nav-caches");
var contentCaches = document.getElementById("caches");
var navSettings = document.getElementById("nav-settings");
var contentSettings = document.getElementById("settings");
var navAbout = document.getElementById("nav-about");
var contentAbout = document.getElementById("about");

generateCacheList();

//Display cache tab by default
contentCaches.style.display = "block";
navCaches.className += "active";

/* CONTENT DISPLAY LOGIC */
var nav = document.getElementById("nav");
nav.onclick = function(event) {
    //Remove nav tab focus
    navCaches.classList.remove("active");
    navSettings.classList.remove("active");
    navAbout.classList.remove("active");

    //Hide all content divs
    var contentDivs =
        document.getElementById("content-container").querySelectorAll("#content-container > div");
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = 'none';
    }

    //Display content and set nav tab focus
    switch(event.target.id) {
        case "nav-caches":
            contentCaches.style.display = "block";
            navCaches.className += "active";
            generateCacheList();
            break;
        case "nav-settings":
            contentSettings.style.display = "block";
            navSettings.className += "active";
            updateStorageUsed();
            break;
        case "nav-about":
            contentAbout.style.display = "block";
            navAbout.className += "active";
            break;
    }
}

/* CACHES */
function generateCacheList() {
    chrome.storage.local.get("caches", function(storage) {
        var caches = storage["caches"];
        var list = document.getElementById("cache-list");
        list.innerHTML = "";

        if(typeof caches != "undefined") {
            for(var i=caches.length-1; i>=0; i--) {
                var name = caches[i].name;
                var item = document.createElement('li');
                item.appendChild(document.createTextNode(name));
                list.appendChild(item);
            }
        } else {
            list.innerHTML = "Oops! It looks like you don't have any caches yet.";
        }
    });
}

/* SETTINGS */
function updateStorageUsed() {
    chrome.storage.local.getBytesInUse("caches", function(bytes) {
        document.getElementById("storage-used").innerHTML = bytes;
    });
}

var removeAll = document.getElementById("removeAll");
removeAll.onclick = function(event) {
    alertify
        .confirm("Are you sure you want to clear all caches? This action cannot be undone.",
        function() { //success
            console.log("User clicked yes. Remove caches!");
            removeAllCaches();
        }, null); //do nothing if cancel
}
