/* INITIALIZATION */

/* EVENT HANDLERS */
document.getElementById("btn-main").onclick = function() {
    window.open('main.html');
}

document.getElementById("btn-save").onclick = function() {
    alertify
        .defaultValue("My Session")
        .prompt("Give this cache a name:",
            function(value, event) { //if 'ok' is selected
                alertify
                    .logPosition("top left")
                    .delay(1500)
                    .success("Session saved as '" + value + "'");
            }, null); //do nothing if cancel
}
