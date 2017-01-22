/* INITIALIZATION */

/* HELPER FUNCTIONS */

/* EVENT HANDLERS */
document.getElementById("btn-main").onclick = function() {
    window.open('main.html');
}

document.getElementById("btn-save").onclick = function() {
    alertify
        .defaultValue("My Session")
        .prompt("Give this cache a name:",
            function(cacheName, event) { //if 'ok' is selected
                getCurrentTabs(function(tabs) {
                    console.log(tabs);
                });
                alertify
                    .logPosition("top left")
                    .delay(1500)
                    .success("Session saved as '" + cacheName + "'");
            }, null); //do nothing if cancel
}
