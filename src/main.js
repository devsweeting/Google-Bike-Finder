import { Api } from './api';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $(".distance").submit(function(event){
    event.preventDefault();
    let distance = $("#user-distance").val();
    console.log(distance);
    let newApi = new Api();
    let promise = newApi.call(distance);
    promise.then(function(response) {
      let body = JSON.parse(response);
      body.bikes.forEach(function(bike) {
        $('#solution').append("<li> Bike " + bike.title + "</li>");
      });
    });
  $("#return").show()
  });
});
