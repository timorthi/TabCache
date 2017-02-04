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
                    //Create a Cache object then store it in local storage
                    var cache = new Cache(cacheName, tabs);
                    saveCache(cache, function(success) {
                        if(success) {
                            alertify
                                .logPosition("top left")
                                .delay(1500)
                                .success("Session saved as '" + cacheName + "'");
                        } else {
                            alertify
                                .logPosition("top left")
                                .delay(1500)
                                .error("There is already a cache named '" + cacheName + "'");
                        }
                    });
                });
            }, null); //do nothing if cancel
}
