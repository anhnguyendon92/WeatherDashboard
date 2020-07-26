let app = "0f3e11117cf4815f182186649c2179fa";
let units = "imperial";
let searchMethod;

function searchWeather(searchTerm) {
    fetch('http://api.openweathermap.org/data/2.5/weather?$("searchMethod")=$(searchTerm)&APPID=$(appID)&units=$(units)').then(results => {
        return results.json();
    }).then(results => {
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
        searchWeather(searchTerm);
})