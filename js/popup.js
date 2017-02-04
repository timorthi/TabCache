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
                //verify cache name here
                getCurrentTabs(function(tabs) {
                    //Create a Cache object then store it in local storage
                    var cache = new Cache(cacheName, tabs);
                    saveCache(cache, function(result) {
                        console.log(result);
                    });
                });
                alertify
                    .logPosition("top left")
                    .delay(1500)
                    .success("Session saved as '" + cacheName + "'");
            }, null); //do nothing if cancel
}
