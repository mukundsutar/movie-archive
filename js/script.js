API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1";
SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query=";
IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let num = 12; //number of panels
// let flag = false; //to clear all panels on search
sessionStorage.setItem("sessionFlag", "false");
let flag= sessionStorage.getItem("sessionFlag");


// starts as soon as the window loads
window.onload = async function () {
    start(API_URL);
};



//start all code
async function start(url) {
    for (let i = 0; i < num; i++) {
        getMovies(i, url);
    }
}



// gets all movies from api -> json -> variable, and calls createPenel function
async function getMovies(id, url) {
    // console.log(url);
    let res = await fetch(url);
    let data = await res.json();

    let movie_name = data["results"][id]["original_title"];
    let movie_plot = data["results"][id]["overview"];
    let movie_poster = data["results"][id]["poster_path"];

    // console.log(id);

    createPanel(movie_name, movie_plot, movie_poster, id);
}



// creates panel in a grid using parameters got from getMovies
async function createPanel(movie_name, movie_plot, poster_path, id) {
    let movie_tray = document.getElementById("movie-tray");

    // to clear all child nodeds after search
    if (flag=="true") {
        movie_tray.replaceChildren();
        flag = "false";
    }

    let newAnchor = document.createElement("a");
    let newElement = document.createElement("img");

    movie_tray.appendChild(newAnchor);
    newAnchor.id = "poster-link" + id;
    newAnchor.appendChild(newElement);

    // check wheather poster_pasth is not empty
    if (poster_path !== null) {
        newElement.src = "";
        newElement.src = IMG_PATH + poster_path;
    }
    newElement.setAttribute("alt", "Image not found in the Database");
    newElement.classList.add("poster-img");
    newElement.id = "poster" + id;
    newAnchor.setAttribute("href", "result.html");


    // save name storage to access for results
    sessionStorage.setItem("name")
}



// get elements
let form = document.getElementById("searchForm");
let search = document.getElementById("searchText");

// event listener for input box when enter would press
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        // console.log(SEARCH_API + searchTerm)
        let searchResultURL = SEARCH_API + searchTerm;
        flag ="true";

        start(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
