// Fetch API Weather API

fetch('https://api.weatherapi.com/v1/current.json?key=0080dac80e2d422d94b171222221404&q=PE9 1AA&aqi=no')
.then(response => {
    return response.json();
}) .then(data => {
    const {temp_c} = data.current;
    //const {cloud} = data.current;
    if (temp_c < 10){
        let degree = document.getElementById('weather-data').innerHTML = temp_c + '°C' + ' it is Cold!';
    }
    else{
        let degree = document.getElementById('weather-data').innerHTML = temp_c + '°C';
    }
    console.log(data);
})

// Air quality API

//http://api.airvisual.com/v2/city?city=Stamford&state=England&country=United Kingdom&key=b9850432-53be-4dbe-b394-d0bacd2111ac

const airQualityAPI = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=52.65146&lon=-0.48017&appid=31eb34b6c630698d1758b3dbad0dc1c6'

// FETCH

fetch(airQualityAPI)
.then(response => {
    return response.json();
}) .then((data) => {
      console.log(data)
      let indexData = '';
      data.list.map((values) => {
        indexData += `
            <tr>
                <td>${values.components.co}</td>
                <td>${values.components.no}</td>
                <td>${values.components.o3}</td>
                <td>${values.components.pm2_5}</td>
                <td>${values.main.aqi}</td>
            </tr>
          `
      });
      document.getElementById('tbody-index-data').innerHTML = indexData;
  })
  .catch(function(error){
      console.log(error);
  })



// Police API
const policeAPI = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.651282&lng=-0.47879';

fetch(policeAPI)
.then((response) => {
    return response.json();
}) .then((data) => {
  //console.log(data[0].category);
    console.log(data)
    let crimesData = '';
    data.map((values) => {

        crimesData += `
            <tr>
                <td>${values.location.street.id}</td>
                <td>${values.category}</td>
                <td>${values.location.street.name}</td>
                <td>${values.month}</td>
            </tr>

          `
    });
    document.getElementById('tbody-police-data').innerHTML = crimesData;
})
.catch(function(error){
    console.log(error);
})

// last updated Police API

const policeAPI2 = 'https://data.police.uk/api/crime-last-updated';

fetch(policeAPI2)
.then((response) => {
    return response.json();
}) .then(data => {
    document.getElementById('last-updated').innerHTML = 'Last updated: ' + data.date;
});



// Events API

eventsApi = 'https://app.ticketmaster.com/discovery/v2/events.json?postalCode=PE9+1PX&size=200&apikey=QUVtE51IjmaOAIsTwRzYOPfcm6MCCogJ';

fetch(eventsApi)
.then(response => {
    return response.json();
}) .then((data) => {
      console.log(data)
      let eventsData = '';
      data._embedded.events.map((values) => {
          eventsData += `
            <tr>
                <td>${values.name}</td>
                <td>${values.dates.start.localDate}</td>
                <td><a href='${values.url}'><button class='open'>View Event</button></a></td>

            </tr>

          `
      });
      document.getElementById('tbody-data').innerHTML = eventsData;
      console.log(eventsName)
  })
  .catch(function(error){
      console.log(error);
  })

  //


  // Google Maps API

  // Initialize and add the map
function initMap() {
    // The location of Stamford
    const Stamford = { lat: 52.65146, lng: -0.48017 };
    // The map, centered at Stamford
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: Stamford,
    });
    // The marker, positioned at Stamford
    const marker = new google.maps.Marker({
      position: Stamford,
      map: map,
    });
  }
  
  window.initMap = initMap;