import { Api } from './api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';


// import mapboxgl from 'mapbox-gl';
$('#map-form').submit(function() {
  $('#location').val()
})
mapboxgl.accessToken = 'pk.eyJ1IjoibWlsbGVycXVpbm42NiIsImEiOiJjanF6cXZzOWYwMmNvNDZsamt4d2MzdGt6In0.vWmStGk3pdqYpZX-SGutKA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v10',
    center: [-74.50, 40],
    zoom: 9,
});

// Add zoom and rotation controls to the map
map.addControl(new mapboxgl.NavigationControl());


map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
