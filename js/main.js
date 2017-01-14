/* INITIALIZATION */
var navCaches = document.getElementById("nav-caches");
var contentCaches = document.getElementById("content-caches");
var navSettings = document.getElementById("nav-settings");
var contentSettings = document.getElementById("content-settings");
var navAbout = document.getElementById("nav-about");
var contentAbout = document.getElementById("content-about");

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
            break;
        case "nav-settings":
            contentSettings.style.display = "block";
            navSettings.className += "active";
            break;
        case "nav-about":
            contentAbout.style.display = "block";
            navAbout.className += "active";
            break;
    }
}
