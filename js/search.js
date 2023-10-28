let SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=7c7034e65c22ade9db6191d62074a4e0&query="

let form = document.getElementById('searchForm')
let search= document.getElementById("searchText");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        // console.log(SEARCH_API + searchTerm)
        let searchResultURL= SEARCH_API + searchTerm;

        getMovieJson(searchResultURL);

        search.value = ''

    } else {
        window.location.reload()
    }
})

async function getMovieJson(searchResultURL) {
    let res = await fetch(searchResultURL);
    let data = await res.json();

    console.log(data);
}