function addCookie(){
    var url = "display.html?text=" + encodeURIComponent(document.getElementById("text").value); + "&foreground=" + encodeURIComponent(document.getElementById("foreground").value); + "&background=" + encodeURIComponent(document.getElementById("background").value);;
    window.location.href = url;
}

function loadLocalStorage(){
    var LargeTextText = getURLParameter("text");
    var LargeTextForeground = getURLParameter("foreground")
    var LargeTextBackground = getURLParameter("background")
    document.getElementById("marquee").innerHTML = LargeTextText;
    document.getElementById("background").style.color = "#" + LargeTextForeground;
    document.getElementById("background").style.backgroundColor = "#" + LargeTextBackground;
}