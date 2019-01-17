import { Map} from './map';
import { Api } from './api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const loadGoogleMapsApi = require('load-google-maps-api')



$(document).ready(function() {
  let geoApi = new Api();
  let geoPromise = geoApi.geoCode();
  geoPromise.then(function(geoResponse) {
    let body = JSON.parse(geoResponse);
  });




    let mapElement = document.getElementById('map');
    let loadPromise = Map.loadMap();
    loadPromise.then(function(googleMaps) {
      let map = Map.createMap(googleMaps, mapElement);
    });


  // $(".distance").submit(function(event){
  //   event.preventDefault();
  //   let distance = $("#user-distance").val();
  //   console.log(distance);
  //   let newApi = new Api();
  //   let promise = newApi.call(distance);
  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     body.bikes.forEach(function(bike) {
  //       $('#solution').append("<li> Bike " + bike.title + "</li>");
  //     });
  //     debugger
  //   });
  // $("#return").show()
  // });
});
