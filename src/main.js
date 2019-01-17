import { Map} from './map';
import { Api } from './api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const loadGoogleMapsApi = require('load-google-maps-api')



$(document).ready(function() {
  // Load Map at start
  let mapElement = document.getElementById('map');
  let loadPromise = Map.loadMap();
  loadPromise.then(function(googleMaps) {
    let map = Map.createMap(googleMaps, mapElement);
    var ohsu = {lat: 45.5186, lng: -122.6849};
    var marker = new google.maps.Marker({position: ohsu, map: map});
  });


  $(".distance").submit(function(event){
    event.preventDefault();
    let distance = $("#user-distance").val();
    let address = $("#address").val();
    let newApi = new Api();


// Bike API call
    let bikePromise = newApi.callBike(distance);
    bikePromise.then(function(response) {
      let body = JSON.parse(response);
      body.bikes.forEach(function(bike) {
        $('#solution').append("<li> Bike " + bike.title + "</li>");
      });
    });
    $("#return").show();

// Coordinates API call
    let geoCodePromise = newApi.geoCode(address);
    geoCodePromise.then(function(response){
      let body = JSON.parse(response);
      let latLong = new google.maps.LatLng(parseInt(body.results[0].geometry.location.lat), parseInt(body.results[0].geometry.location.lng))
      let marker = new googleMaps.Marker({
        position: latLong,
        map: map,
        draggable:true,
      });
    });
  });
});

    // let geoApi = new Api();
    // let geoPromise = geoApi.geoCode();
    // geoPromise.then(function(geoResponse) {
    //   let body = JSON.parse(geoResponse);
    // });
