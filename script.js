function addCookie() {
    var url = "display.html?text=" + encodeURIComponent(document.getElementById("text").value) + "&foreground=" + encodeURIComponent(document.getElementById("foreground").value) + "&background=" + encodeURIComponent(document.getElementById("background").value) + "&speed=" + encodeURIComponent(document.getElementById("speedSlider").value) + "&size=" + encodeURIComponent(document.getElementById("sizeSlider").value);
    window.open(url);
}

function loadLocalStorage() {
    var LargeTextText = getURLParameter("text");
    var LargeTextForeground = getURLParameter("foreground")
    var LargeTextBackground = getURLParameter("background")
    var LargeTextSpeed = getURLParameter("speed")
    var LargeTextSize = getURLParameter("size")
    document.getElementById("marquee").innerHTML = LargeTextText;
    document.getElementById("background").style.color = "#" + LargeTextForeground;
    document.getElementById("background").style.backgroundColor = "#" + LargeTextBackground;
    document.getElementById("marqueeTag").scrollAmount = LargeTextSpeed;
    document.getElementById("marquee").style.fontSize = LargeTextSize + "px";
}

function back() {
    window.close();
}