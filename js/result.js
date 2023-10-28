API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7034e65c22ade9db6191d62074a4e0&page=1";
SEARCH_API =
    "https://api.themoviedb.org/3/movie/346698?api_key=7c7034e65c22ade9db6191d62074a4e0";
IMG_PATH = "https://image.tmdb.org/t/p/w1280";

res.header("Access-Control-Allow-Origin", "*");

function getID(id) {
    console.log(id);
    let poster = document.createElement("img");
    let posterDiv = document.getElementsByClassName("movie-poster");

    getDetails();
}

async function getDetails() {
    let res = await fetch(API_URL);
    console.log(res);
    let data = await res.json();
    console.log(data);
}

function showPage() {
    window.location.href = "result.html";
}
