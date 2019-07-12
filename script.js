function addCookie(){
    var url = "https://sebastiandoe5.github.io/LargeTextDisplayer/display.html?text=" + encodeURIComponent(document.getElementById("text").innerHTML));
    window.location.href = url;
}

function loadLocalStorage(){
    var LargeTextText = getURLParameter("text");
    document.getElementById("marquee").innerHTML = LargeTextText;
}