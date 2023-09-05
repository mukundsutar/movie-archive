API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1";
SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query=";
IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let num = 12; //number of panels
let flag = false; //to clear all panels on search
let resultFlag = false;

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
async function getMovies(index, url) {
    let res = await fetch(url);
    let data = await res.json();

    if (resultFlag) {
        updatePage(data);
        resultFlag = false;
    } else {
        let movie_name = data["results"][index]["original_title"];
        let movie_plot = data["results"][index]["overview"];
        let movie_poster = data["results"][index]["poster_path"];
        let movie_id = data["results"][index]["id"];

        createPanel(movie_name, movie_plot, movie_poster, movie_id, index);
    }
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
    if (flag) {
        movie_tray.replaceChildren();
        flag = false;
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
    newElement.setAttribute("onclick", "getID(this.id); deletePage(this.id)");
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

function getID(id) {
    console.log(id);
    let poster = document.createElement("img");
    let posterDiv = document.getElementsByClassName("movie-poster");
}

function deletePage(id) {
    let movieTray = document.getElementById("movie-tray");

    while (movieTray.lastElementChild) {
        movieTray.removeChild(movieTray.lastElementChild);
    }

    showPage(id, movieTray);
}

function showPage(id, movieTray) {
    let movieInfo = document.createElement("div");
    movieInfo.id = "movie-info";
    let moviePoster = document.createElement("div");
    moviePoster.id = "movie-poster";
    let moviePosterImg = document.createElement("img");
    moviePosterImg.id= "poster" + 1;
    let moviePlot = document.createElement("div");
    moviePlot.id = "movie-plot";

    movieTray.appendChild(movieInfo);
    movieTray.appendChild(moviePoster);
    movieTray.appendChild(moviePlot);
    moviePoster.appendChild(moviePosterImg);

    let movie_unique= `https://api.themoviedb.org/3/movie/${id}?api_key=7c7034e65c22ade9db6191d62074a4e0`

    changeID();
    resultFlag = true;
    getMovies(
        0,
        movie_unique
    );
}

function changeID() {
    let movieTrayClass = document.getElementsByClassName("content");
    let movieTrayID = document.getElementById("movie-tray");

    movieTrayClass[0].classList.add("content-result");
    movieTrayClass[0].classList.remove("content");

    movieTrayID.id = "movie-tray-result";
}

function updatePage(data) {
    let info = document.getElementById("movie-info");
    let poster = document.getElementById("poster1");
    let plot= document.getElementById("movie-plot");
    
    let movie_name = data["original_title"];
    
    let movie_genre= [];
    for (let i = 0; i < data["genres"].length; i++) {
        movie_genre.push(data["genres"][i]["name"])
    }
    
    let movie_poster = data["poster_path"];
    let movie_plot = data["overview"];
    let movie_id = data["id"];
    
    poster.src= IMG_PATH + movie_poster;
    plot.innerText= movie_plot;

    buildInfo(info, movie_name, movie_genre);
}

function buildInfo(info, movie_name, movie_genre) {
    let name= document.createElement("div");
    name.id= "info-name";
    let genre= document.createElement("div");
    genre.id= "info-genre";
    let rating = document.createElement("div");
    rating.id= "info-rating";

    info.appendChild(name);
    info.appendChild(genre);
    info.appendChild(rating);

    name.innerText= movie_name;

    let genreStr= "";
    for (let i = 0; i < movie_genre.length; i++) {
        genreStr=genreStr.concat(movie_genre[i] + " "); 
    }
    genre.innerText=genreStr;
}
