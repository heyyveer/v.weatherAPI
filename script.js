let locatin;
let date1;
let key = 'KGF372JH2ZAGGX9V6ZUKK3K9D';
const details = document.querySelector('#weatherDetails');
const array = [];

function fetchdata() {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locatin}/${date1}/?key=${key}`)
    .then(response => response.json())
    .then(data => {
        array.push(data.days[0]);
        console.log(array);
        displayWeather(); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function searchWeather() {
    date= document.querySelector('#dateInput');
    locatin = document.querySelector('#locationInput');
    fetchdata();
}