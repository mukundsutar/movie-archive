API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1";
SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query=";
IMG_PATH = "https://image.tmdb.org/t/p/w1280";

function getID(id) {
let poster= document.createElement("img");
    let posterDiv = document.getElementsByClassName("movie-poster");

    getDetails();
}

async function getDetails() {
    let res = await fetch("https://api.themoviedb.org/3/movie/27205&api_key=7c7034e65c22ade9db6191d62074a4e0");
    let data = await res.json();

    console.log(data["results"]);
}

function showPage() {
    window.location.href = "result.html";
}
