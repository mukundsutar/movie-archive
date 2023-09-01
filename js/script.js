API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1";
SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query=";
IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let num = 12; //number of panels
// let flag = false; //to clear all panels on search
sessionStorage.setItem("sessionFlag", "false");
let flag = sessionStorage.getItem("sessionFlag");

// starts as soon as the window loads
window.onload = async function () {
    start(API_URL);
};

//start all code
async function start(url) {
    for (let i = 1; i <= num; i++) {
        getMovies(i, url);
    }
}

// gets all movies from api -> json -> variable, and calls createPenel function
async function getMovies(index, url) {
    // console.log(url);
    let res = await fetch(url);
    let data = await res.json();

    let movie_name = data["results"][index]["original_title"];
    let movie_plot = data["results"][index]["overview"];
    let movie_poster = data["results"][index]["poster_path"];
    let movie_id = data["results"][index]["id"];

    createPanel(movie_name, movie_plot, movie_poster, movie_id, index);
}

// creates panel in a grid using parameters got from getMovies
async function createPanel(
    movie_name,
    movie_plot,
    poster_path,
    movie_id,
    index
) {
    let movie_tray = document.getElementById("movie-tray");

    // to clear all child nodeds after search
    if (flag == "true") {
        movie_tray.replaceChildren();
        flag = "false";
    }

    let newElement = document.createElement("img");

    movie_tray.appendChild(newElement);

    // check wheather poster_pasth is not empty
    if (poster_path !== null) {
        newElement.src = "";
        newElement.src = IMG_PATH + poster_path;
    }
    newElement.setAttribute("alt", "Image not found in the Database");
    newElement.classList.add("poster-img", "poster" + index);
    newElement.id = movie_id;
    newElement.setAttribute("onclick", "getID(this.id); showPage()");

    // save name storage to access for results
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
        flag = "true";

        start(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
