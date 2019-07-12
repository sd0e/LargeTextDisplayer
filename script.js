function addCookie(){
    localStorage.setItem("LargeTextText", document.getElementById("text").innerHTML);
    window.location.href = "display.html?text=" + encodeURIComponent(textYouWantToUseLol);
}

function loadLocalStorage(){
    var LargeTextText = getURLParameter("text");
    document.getElementById("marquee").innerHTML = LargeTextText;
}