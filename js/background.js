let movieTray= document.getElementById("movie-tray");

function mouseOver() {
    movieTray.style.backgroundColor= "#d90429";
}

function mouseOut() {
    movieTray.style.backgroundColor= "red";
}

var handle;

function func() {
    // Increment the value by 1
    // if(necessary value is reached) {
    //     window.clearInterval(handle);
    // }
}

handle = window.setInterval("func", 50); // Run each 50ms