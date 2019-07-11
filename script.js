function addCookie(){
    localStorage.setItem("LargeTextText", document.getElementById("text").innerHTML);
    window.location.href = "display.html"
}

function loadLocalStorage(){
    var LargeTextText = localStorage.getItem("LargeTextText");
    document.getElementById("marquee").innerHTML = LargeTextText;
}