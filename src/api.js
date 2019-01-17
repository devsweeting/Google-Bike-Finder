export class Api {
  constructor() {

  }
  callBike(distance) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=${distance}&stolenness=stolen&access_token=${process.env.BIKE_API}`;
      request.onload = function() {
        if (this.status === 200) {
          // resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  geoCode(address) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();

    });
  }
  //   var data = null;
  //
  //   var xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;
  //
  //   xhr.addEventListener("readystatechange", function () {
  //     if (this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   });
  //
  //   xhr.open("GET", );
  //   xhr.setRequestHeader("Cache-Control", "no-cache");
  //   xhr.setRequestHeader("Postman-Token", "79be00c3-767e-4b0f-8c3b-f7ac6003cef9");
  //
  //   xhr.send(data);
  // }
}
