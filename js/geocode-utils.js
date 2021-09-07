"use strict"

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
// this is START everything inported from the html script section.
var numberToStopAt = 5;

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'mapbox-map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.49, 29.42],                     // starting position [lng, lat]
    zoom: 9                                      // default zoom
});

// this is END everything inported from the html script section.


   // This code works. Dont mess with it Javier
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });

    // Array of myFav Restaturants
    let restaurants =
        [
            {
                name       : "Conroy's Irish Pub",
                address    : "9091 Fair Oaks Pkwy, Fair Oaks Ranch, TX 78015",
                coordinates: [29.72067, -98.66],
                categoriesd: ["Steaks", "Salads"],
                price:   "$ 50.00"
            },

            {
                name       : "Saltgrass Steak House",
                address    : "1175 I-10 West San Antonio TX 78230",
                coordinates: [29.72067, -98.66],
                categoriesd: ["Steaks", "Salads"],
                price:   "$ 100.00"
            },

            {
                name       : "Conroy's Irish Pub",
                address    : "12730 W I-10 Ste 314, San Antonio, TX 78230",
                coordinates: [29.562705873959917, -98.59311953029197],
                categoriesd: ["Bagels", "Coffee"],
                price      :   "$ 10.00"
            },
        ]

    favRestaurants.forEach(function (restaurants) {
        let popup = new mapboxgl.Popup({offset: 25})
            .setHTML("<h4" + restaurants.name + "</h4>");

        let marker = new mapboxgl.Marker()
            .setLngLat(restaurants.coordinates)
            .setPopup(popup)
            .addTo(map);
        });
    // THIS IS THE CODE IMPORTED FROM HTML SCRIPT
                var numberToStopAt = 5;


                mapboxgl.accessToken = mapboxToken;
                var map = new mapboxgl.Map({
                container: 'mapbox-map',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [-98.49, 29.42],                     // starting position [lng, lat]
                zoom: 25                                     // default zoom
            });

                // Add zoom and rotation controls to the map.
                map.addControl(new mapboxgl.NavigationControl());

                // create the popup
                var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                '<h4 id="zoo-heading">The San Antonio Zoo.</h4>'
                );

                // Adding a marker to the map
                var marker = new mapboxgl.Marker()
                .setLngLat([-98.4737, 29.4624])
                .setPopup(popup)
                .addTo(map);

                geocode("600 Navarro St #600, San Antonio, TX 78205", mapboxToken).then(function (data) {
                var codeupMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map);
            });

                reverseGeocode({lat: 29.8829, lng: -97.9443}, mapboxToken).then(function (data) {
                console.log(data);
            })

}