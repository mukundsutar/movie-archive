let API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1"; //popular api
let SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query=";
let IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //search api
let num = 12; //number of panels
let flag = false; //to clear all panels on search

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
    console.log(movie_name);
    let movie_plot = data["results"][id]["overview"];
    let movie_poster = data["results"][id]["poster_path"];

    // console.log(id);

    createPanel(movie_poster, id);
}

// creates panel in a grid using parameters got from getMovies
async function createPanel(poster_path, id) {
    let movie_tray = document.getElementById("movie-tray");

    // to clear all child nodeds after search
    if (flag) {
        movie_tray.replaceChildren();
        flag = false;
    }

    let newElement = document.createElement("img");

    movie_tray.appendChild(newElement);

    // check wheather poster_pasth is not empty
    if (poster_path !== null) {
        newElement.src = "";
        newElement.src = IMG_PATH + poster_path + "?dummy=371662";
    }
    newElement.id = "poster" + id;
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
        flag = true;
        start(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
