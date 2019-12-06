function addCookie() {
    var url = "display.html?text=" + encodeURIComponent(document.getElementById("text").value) + "&foreground=" + encodeURIComponent(document.getElementById("foreground").value) + "&background=" + encodeURIComponent(document.getElementById("background").value) + "&speed=" + encodeURIComponent(document.getElementById("speedSlider").value) + "&size=" + encodeURIComponent(document.getElementById("sizeSlider").value) + "&font=" + encodeURIComponent(document.getElementById("font").value);
    window.open(url);
}

function loadLocalStorage() {
    var LargeTextText = getURLParameter("text");
    var LargeTextForeground = getURLParameter("foreground");
    var LargeTextBackground = getURLParameter("background");
    var LargeTextSpeed = getURLParameter("speed");
    var LargeTextSize = getURLParameter("size");
    var LargeTextFontValue = getURLParameter("font");
    if (LargeTextFontValue == "1") {
        document.getElementById("marquee").style.fontFamily = "Arial,Helvetica,sans-serif";
    } else if (LargeTextFontValue == "2") {
        document.getElementById("marquee").style.fontFamily = "'Comic Sans MS',sans-serif";
    } else if (LargeTextFontValue == "3") {
        document.getElementById("marquee").style.fontFamily = "'Courier New',Courier,monospace";
    } else if (LargeTextFontValue == "4") {
        document.getElementById("marquee").style.fontFamily = "'DM Serif Display',serif";
    } else if (LargeTextFontValue == "5") {
        document.getElementById("marquee").style.fontFamily = "Garamond,serif";
    } else if (LargeTextFontValue == "6") {
        document.getElementById("marquee").style.fontFamily = "Helvetica,Arial,sans-serif";
    } else if (LargeTextFontValue == "7") {
        document.getElementById("marquee").style.fontFamily = "Impact,Charcoal,sans-serif";
    } else if (LargeTextFontValue == "8") {
        document.getElementById("marquee").style.fontFamily = "'Lato',sans-serif";
    } else if (LargeTextFontValue == "9") {
        document.getElementById("marquee").style.fontFamily = "'Montserrat',sans-serif";
    } else if (LargeTextFontValue == "10") {
        document.getElementById("marquee").style.fontFamily = "'Overpass',sans-serif";
    } else if (LargeTextFontValue == "11") {
        document.getElementById("marquee").style.fontFamily = "'Pacifico',cursive";
    } else if (LargeTextFontValue == "12") {
        document.getElementById("marquee").style.fontFamily = "'Times New Roman', Times, serif";
    };
    document.getElementById("marquee").innerHTML = LargeTextText;
    document.getElementById("background").style.color = "#" + LargeTextForeground;
    document.getElementById("background").style.backgroundColor = "#" + LargeTextBackground;
    document.getElementById("marqueeTag").scrollAmount = LargeTextSpeed;
    document.getElementById("marquee").style.fontSize = LargeTextSize + "px";
}

function back() {
    window.close();
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
}