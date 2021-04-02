/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("accountSideNavBar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("accountSideNavBar").style.width = "0";
}

$("#headerTab").children("button").click(function (){
    $("#headerTab").children("button").removeClass("selected")
    $(this).addClass("selected")
})