/* INITIALIZATION */
var navHome = document.getElementById("nav-home");
var contentHome = document.getElementById("content-home");
var navSettings = document.getElementById("nav-settings");
var contentSettings = document.getElementById("content-settings");
var navAbout = document.getElementById("nav-about");
var contentAbout = document.getElementById("content-about");

//Display home page by default
contentHome.style.display = "block";
navHome.className += "active";

/* CONTENT DISPLAY LOGIC */
var ul = document.getElementById("nav");
ul.onclick = function(event) {
    //Remove nav tab focus
    navHome.classList.remove("active");
    navSettings.classList.remove("active");
    navAbout.classList.remove("active");

    //Hide all content divs
    var contentDivs =
        document.getElementById("content-container").getElementsByTagName("div");
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = 'none';
    }

    //Display content and set nav tab focus
    switch(event.target.id) {
        case "nav-home":
            contentHome.style.display = "block";
            navHome.className += "active";
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
