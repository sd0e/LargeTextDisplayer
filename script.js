function addCookie(){
    window.location.href = "https://sebastiandoe5.github.io/LargeTextDisplayer/display.html?text=" + encodeURIComponent(document.getElementById("text").value);;
}

function loadLocalStorage(){
    var LargeTextText = getURLParameter("text");
    document.getElementById("marquee").innerHTML = LargeTextText;
}