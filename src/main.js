import { Api } from './api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let newApi = new Api();
  let promise = newApi.call();
  promise.then(function(response) {
    let body = JSON.parse(response);
    body.bikes.forEach(function(bike) {
      $('#solution').append("<li> Bike " + bike.title + "</li>");
    });
  });


});
